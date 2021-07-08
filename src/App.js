import './App.css';
import {useState} from "react";
import Login from './components/Login'
import Regions from "./components/Regions";
import RequestRegion from "./components/RequestRegion";
import AdminView from "./components/AdminView";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userToken, setUserToken] = useState()
    const [isAdmin, setIsAdmin] = useState(false)
    const [request, setRequest] = useState('idle')
    const [currentView, setCurrentView] = useState('default')

    // need to add a check to set the state of request (maybe save that on the usertoken)
    // also checks if you're admin. All of this on login.

    const AdminViewProps = {
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
        userToken: userToken,
        setUserToken: setUserToken,
        setIsAdmin: setIsAdmin
    }

    if (isAdmin) {
        return (
            <AdminView AdminViewProps={AdminViewProps} currentView={currentView} setCurrentView={setCurrentView}/>
        )
    }

    return (
    <div className="App">
      <section>
          {isLoggedIn ? <h1>Welcome {userToken.name}</h1> : <h1>Please Login</h1>}
          <Login LoginObj={{isLoggedIn: isLoggedIn, Login: setIsLoggedIn, setUserToken: setUserToken}}/>
          <br />
          {isLoggedIn ? <Regions user={userToken}/> : ''}
          <hr />
          {isLoggedIn ? <RequestRegion request={request} setRequest={setRequest}/> : ''}
      </section>
    </div>
    );
}

export default App;
