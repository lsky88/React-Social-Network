import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./Redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {addPost, updateNewPostText} from "./Redux/state";
import {BrowserRouter as Router} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <Router>
                <App state={state} addPost={addPost}
                     updateNewPostText={updateNewPostText}/>
            </Router>
        </React.StrictMode>
    );
}


rerenderEntireTree(state)

subscribe(rerenderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
