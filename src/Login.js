import React ,{useState}from 'react'
import {Link,useHistory} from 'react-router-dom';
import "./login.css"
import {auth} from './firebase';
function Login() {
            const [email,setEmail] =useState('');
            const [password, setPassword]=useState('');
            const history=useHistory();
    const signin=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            // redirect to ligin page
            history.push("/");

        }).catch((err)=>alert(e.message));
    };

    const create =(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then(()=>{
            history.push("/");
            
        }).catch((err)=>alert('user already register'));
    };

    return (
        <div className="login">
        <Link to="/">
        <img 
        className="login__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
         alt=""
          />
        </Link>

        <div className="login__container">
        <h1>Sign in</h1>

        <form>
        <h5>E-mail</h5>
        <input value={email} onChange={e=>setEmail(e.target.value)} type="text" />
        <h5>Password</h5>
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" />
        <button onClick={signin} type="submit" className="signin">Sign in</button>
        </form>

        <p>
        By signing-in you agree to Amazon conditions of Use & sale. Plase see our Privacy Notice,our Cookies Notice and our Intrest-Based Ads Notice
        </p>
        <button onClick={create} className="newcreate">create a new account</button>
        </div>
        </div>
    )
}

export default Login
