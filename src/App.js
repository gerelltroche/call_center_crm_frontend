import './App.css';
import {useState} from "react";
import axios from 'axios'

function App() {

    const [user, setUser] = useState('')
    const [territories, setTerritories] = useState()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const loginHandler = async (e) => {
        e.preventDefault()
        setIsLoggedIn(!isLoggedIn)
        const username = await getUserHandler()
        setUser(username)
    }

    const getUserHandler = async (user) => {
        try {
            const User = await axios.get(`http://localhost:3000/api/users/`)
            return User.data
        } catch (err) {
            console.log(`Error: ${err}`)
        }
    }

    const getTerritoriesHandler = async (options) => {
        try {
            const Territories = await axios.get(`http://localhost:3000/api/territories/`)
            setTerritories(territories)
        } catch (err) {
            console.log(`Error: ${err}`)
        }
    }

    return (
    <div className="App">
      <header>
      </header>
      <section>
          <form onSubmit={(e) => loginHandler(e)}>
              <input type='text' />
              <button>Login</button>
          </form>
          <p>{isLoggedIn ? 'yes' : 'no'}</p>
          { user ? user.map((user => {
              return <h1>{user.name}</h1>
          })) : ''
          }
      </section>
    </div>
    );
}

export default App;
