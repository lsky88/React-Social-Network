// Imports =================================================
import './App.css';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";

// App =================================================================
function App(props) {
    return (
            <div className="App">
                <Header/>
                <Navigation/>
                <main className="app-content">
                    <Routes>
                        <Route path='/profile'
                               element={<Profile
                                   profile={props.state.profile}/>}/>
                        <Route path='/dialogs' element={<Dialogs
                            dialogs={props.state.dialogs}/>}/>
                    </Routes>
                </main>
            </div>
    );
}

export default App;
