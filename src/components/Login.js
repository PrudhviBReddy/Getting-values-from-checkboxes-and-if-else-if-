import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
   let emailInputRef = useRef();
   let passwordInputRef = useRef();
   let messageInputRef = useRef();
   let navigate = useNavigate ();


  return (
    <div className='App'>
        <form>
            <h2>LOGIN</h2>
            <div>
                <label>Email</label>
                <input ref={emailInputRef}  type="text"></input>
            </div>
            <div>
                <label>Password</label>
                <input ref={passwordInputRef} type="text" ></input>
            </div>
            <div>
                <label>Message</label>
                <input ref={messageInputRef}  type="text"></input>
            </div>
            <div>
                <button type="button" onClick={()=>{
                    let typedEmail = emailInputRef.current.value;
                    let typedPassword = passwordInputRef.current.value;
                    if(typedEmail == "prudhvi@gmail.com" && typedPassword == "Prudhvi"){
                        navigate("/home", {state:{msg:messageInputRef.current.value}});
                    }else{
                        alert("Invalid username/password")
                    }
                }}>Login</button>
            </div>
        </form>
        <br></br>
        <Link to="/signup">signup</Link>
    </div>
  )
}

export default Login