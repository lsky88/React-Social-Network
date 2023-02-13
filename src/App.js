// Imports =================================================
import './App.css';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// App =================================================================
function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Navigation/>
                <main className="app-content">
                    <Routes>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/dialogs' element={<Dialogs/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
