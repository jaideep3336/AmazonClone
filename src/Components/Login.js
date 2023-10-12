import React, { useState } from 'react'
import "../Login.css";
import { Link, useNavigate } from 'react-router-dom'



function Login() {
const navigate = useNavigate();
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = e => { 
    if(email && password){
      navigate('/')
    } else{
      alert("Please fill the required details")
    }
        e.preventDefault()
        
    }
    const register = e => { 
      
        e.preventDefault();
    
    }
  return (
    <div className='login'>
        <Link to='/'>
<img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=''/>
</Link>
<div className='login__container'>
<h1>Sign-in</h1>

<form>

<h5>Email</h5>
<input type='text' onChange={e => setEmail(e.target.value)} value={email} />
<h5>Password</h5>
<input type='password' onChange={e => setPassword(e.target.value)} value={password} required/>
<button type='submit' onClick={signIn} className='login__signInButton'>Sign-in</button>

</form>
<p>
By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
</p>
<button type='submit' onClick={register} className='login__registerButton'>Create your amazon account</button>
    </div>
    </div>
  )
}

export default Login