import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import AuthService from '../Services/AuthService';
import { AuthContext } from '../Context/AuthContext';

const Navbar = props =>{
    const {isAuthenticated,user,setIsAuthenticated,setUser} = useContext(AuthContext);
    
    const onClickLogoutHandler = ()=>{
        AuthService.logout().then(data=>{
            if(data.success){
                setUser(data.user);
                setIsAuthenticated(false);
            }
        });
    }

    const unauthenticatedNavBar = ()=>{
        return (
            <>
                <Link to="/">
                    <li className="nav-item nav-link text-lg-left">
                        Home
                    </li>
                </Link>  
                <Link to="/login">
                    <li className="nav-item nav-link">
                        Login
                    </li>
                </Link>  
                <Link to="/register">
                    <li className="nav-item nav-link">
                        Register
                    </li>
                </Link>  
            </>
        )
    }

    const authenticatedNavBar = ()=>{
        return(
            <>

            
                <Link to="/">
                    <li className="nav-item nav-link">
                        Home
                    </li>
                </Link> 
                <Link to="/table">
                    <li className="nav-item nav-link">
                        Table
                    </li>
                </Link> 
                {
                    user.role === "admin" ? 
                    <Link to="/admin">
                        <li className="nav-item nav-link">
                            Admin
                        </li>
                    </Link> : null
                }  
                <button type="button" 
                        className="btn btn-link nav-item nav-link" 
                        onClick={onClickLogoutHandler}>Logout</button>
            </>
        )
    }
    return(
        <>
        <nav className=" navbar navbar-expand-lg navbar-light bg-primary">
            <Link to="/">
                <div className="navbar-brand m-5 ">Neuoflux</div>
            </Link>
            <div className="collapse navbar-collapse mx-auto " id="navbarText">
                <ul className="navbar-nav mx-auto">
                    { !isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;