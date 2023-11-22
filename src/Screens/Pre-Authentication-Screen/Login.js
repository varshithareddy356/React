

import React, {  useContext, useState } from 'react'
import { Login } from '../../Navigation/Navigation'





function LoginPage() {
     const loginstatus=useContext(Login)
    

    const data = localStorage.getItem("Gettingdata");
    const c = JSON.parse(data);

    const [username, setusername] = useState("")
    const [emailid, setemailid] = useState("")
    const [password, setpassword] = useState("")
    const [loginError, setloginError] = useState(false)
    const handleusername = (data) => {
        setusername(data.target.value)
    }
    const handleemail = (data) => {
        setemailid(data.target.value)
    }
    const handlepassword = (data) => {
        setpassword(data.target.value)
    } 
    const handlebutton = (event) => {
        event.preventDefault()
const user = c.find(c => c.username === username && c.email === emailid && c.password === password);

if (user) {
    setloginError(false);
    alert("login Sucees");
    loginstatus.handlelogin()
} else {
    setloginError(true);
    if (loginError) {
        alert("invalid credentials");
    }
}
    }


    return (
        <>
        <h1>Login Form</h1>
<form >
<center>
          <b>username</b><br></br>
            <input type='text' value={username} onChange={(data) => handleusername(data)} /><br></br>
            <b>emailid</b><br></br>
            <input type='email' value={emailid} onChange={(data) => handleemail(data)} /><br></br>
            <b>password</b><br></br>
            <input type='password' value={password} onChange={(data) => handlepassword(data)} /><br/><br/>
            <button onClick={handlebutton}>submit</button>
            </center>
        </form>    

        </>
    )

}

export default LoginPage;
