import './App.css';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/Profile";

function App() {
    return (
        <div className="App">
            <Header/>
            <Navigation/>
            <Profile/>
        </div>
    );
}

export default App;
