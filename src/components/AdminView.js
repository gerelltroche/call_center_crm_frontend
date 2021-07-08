import AdminPanel from "./AdminPanel";
import Login from "./Login";
import Regions from "./Regions";


const AdminView = ({AdminViewProps, currentView, setCurrentView}) => {

    const [isLoggedIn, setIsLoggedIn, userToken, setUserToken, setIsAdmin] = AdminViewProps

    return (
        <div className="App">
            <section>
                {isLoggedIn ? <h1>Welcome Admin {userToken.name}</h1> : <h1>Please Login</h1>}
                {isLoggedIn ? <AdminPanel /> : ''}
                <Login LoginObj={{isLoggedIn: isLoggedIn, Login: setIsLoggedIn, setUserToken: setUserToken, setIsAdmin: setIsAdmin}}/>
                <br />
                {isLoggedIn ? <Regions user={userToken}/> : ''}
            </section>
        </div>
    )
}

export default AdminView