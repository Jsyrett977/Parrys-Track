import { useState } from "react";
import { loginUser } from "../api";
const Home = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = async (event) => {
        event.preventDefault()
        const loggedinUser = await loginUser(email, password)
        console.log(loggedinUser)
        setEmail('')
        setPassword('')
    }
    return (
        <>
        <h1>
            Parry's Track
        </h1>
        <form id='loginForm' onSubmit={handleLogin}>
            <input className='loginInput' placeholder="Email" type="text" value={email} onChange={event => setEmail(event.target.value)}></input>
            <input className="loginInput" placeholder="Password" type="password" value={password} onChange={event => setPassword(event.target.value)}></input>
            <button id='submitButton' type="submit">Login</button>
        </form>
        </>
    )
}
export default Home;