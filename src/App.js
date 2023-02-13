import './App.css';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
// import Profile from "./Components/Profile/Profile";
import Messages from "./Components/Messages/Messages";

function App() {
    return (
        <div className="App">
            <Header/>
            <Navigation/>
            <section className="app-content">
                {/*<Profile/>*/}
                <Messages/>
            </section>
        </div>
    );
}

export default App;
