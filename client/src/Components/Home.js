import React, {useState,useRef,useEffect} from 'react';
import AuthService from '../Services/AuthService';
import Message from '../Components/Message';
import google1 from "../images/google.png";
import facebook from "../images/facebook.png"
import github1 from "../images/github.png";
import {Link} from 'react-router-dom';
import Particles from './Particles';
import "./app.css"
const Home = props=>{
    const [user,setUser] = useState({username: "", password : "", role : ""});
    const [message,setMessage] = useState(null);
    let timerID = useRef(null);
    const google = () => {
      window.open("http://localhost:5000/auth/google", "_self");
    };
    const github = () => {
      window.open("http://localhost:5000/auth/github", "_self");
    };
    useEffect(()=>{
        return ()=>{
            clearTimeout(timerID);
        }
    },[]);

    const onChange = e =>{
        setUser({...user,[e.target.name] : e.target.value});
    }

    const resetForm = ()=>{
        setUser({username : "", password : "",role : ""});
    }

    const onSubmit = e =>{
        e.preventDefault();
        AuthService.register(user).then(data=>{
            const { message } = data;
            setMessage(message);
            resetForm();
            if(!message.msgError){
                timerID = setTimeout(()=>{
                    props.history.push('/login');
                },2000)
            }
        });
    }

   return(

    

    
    <div className="login mt-5">
    {/* <h1 className="loginTitle">Choose a Login Method</h1> */}
    <div className="wrapper">
      <div className="left">
        <div className="loginButton google" onClick={google}>
          <img src={google1} alt="google" className="icon" onClick={google} />
          Google
        </div>
        <div className="loginButton facebook" onClick={facebook}>
          <img src={facebook} alt="google" className="icon" />
          Facebook
        </div>
        <div className="loginButton github" onClick={github}>
          <img src={github1} alt="google" className="icon" />
          Github
        </div>
      </div>
      <div className="center">
        <div className="line" />
        <div className="or">OR</div>
      </div>
      <div className="right">
        <div class="row">
          
          <form onSubmit={onSubmit}>
          <div class="col-md-6  w-100 p-1">
            <input
              type="text" 
                       name="username" 
                       value={user.username}
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter Username"/>
            
          </div>
          {/* <div className="col-md-6 ">
            <input
            
              type="text"
              class="form-control"
              placeholder="Last name"
              aria-label="Last name"
             
            />
          </div> */}
            {/* <div className="col-md-6 w-100 p-1">
              
              <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
            </div> */}
            <div class="col-md-6 w-100 p-1">
              <input
                type="password" 
                       name="password"
                       value={user.password} 
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter Password"
                
              />
            </div>
            {/* <div className="col-md-6 w-100 p-1 ">
              <input
                type="password"
                class="form-control"
                id="inputPassword4"
                placeholder="Repeat Password"
                
              /> 
            </div> */}
            <div className='w-100 p-1'>
            <input type="text" 
                       name="role"
                       value={user.role}  
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter role (admin/user)"/>

            </div>
            
            <button className="submit bg-primary mt-3 ml-4" type='submit'>Sign Up</button>
          </form>
          {message ? <Message message={message}/> : null}
        </div>
       
        <p className="p-2 text-secondary"> already have an account? <Link to="/login"><button className='bg-warning'>SIGN IN</button></Link></p>
        <Particles id="tsparticles" />
      </div>
    </div>
  </div>
  
    )
  }

export default Home;