import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
    {id: 1, message: 'Hello', likesCount: 1},
    {id: 2, message: 'Yo', likesCount: 7},
    {id: 3, message: 'Hi', likesCount: 8},
]

let dialogsListData = [
    {name: 'John', id: 1},
    {name: 'Ivan', id: 2},
    {name: 'Ann', id: 3},
]

let messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Yo'},
    {id: 3, message: 'Hi'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App postsData={postsData} dialogsListData={dialogsListData}
             messagesData={messagesData}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
