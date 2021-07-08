import {useState} from 'react'
import axios from 'axios'

const Login = ({LoginObj}) => {
    const {isLoggedIn, Login, setUserToken, setIsAdmin} = LoginObj
    const [errorMsg, setErrorMsg] = useState()

    // need to add a check to set the state of request (maybe save that on the usertoken)
    // also checks if you're admin. All of this on login.

    const loginHandler = async (e) => {
        e.preventDefault()
        try {
            const user = await axios.post(`http://localhost:3000/api/users/login`, {
                name: e.target[0].value,
                password: e.target[1].value
                })
            setUserToken(user.data)

            if (user.data.privilege === 'admin') {
                setIsAdmin(true)
            }

            Login(true)
        } catch (err) {
            console.log(`Error: ${err}`)
            setErrorMsg(err.message)
        }
    }

    const logoutHandler = async (e) => {
        e.preventDefault()
        Login(false)
        setIsAdmin(false)
    }

    // need a create account
    const LoginForm = (
        <form onSubmit={(e) => loginHandler(e)}>
            <input id='Username' type='text'/>
            <label htmlFor='Username'>Username</label>
            <br/>
            <input id='Password' type='text'/>
            <label htmlFor='Password'>Password</label>
            <br/>
            <button type='submit'>Login</button>
            {errorMsg ? <p>Error: {errorMsg}</p> : ''}
        </form>
    )

    const LogoutForm = (
        <form onSubmit={(e) => logoutHandler(e)}>
            <button type='submit'>Logout</button>
        </form>
    )

    return (
        <div>
            {isLoggedIn ? LogoutForm : LoginForm}
        </div>
    )
}

export default Login