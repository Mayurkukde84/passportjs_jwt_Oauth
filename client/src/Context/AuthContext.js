import React, {createContext,useState,useEffect} from 'react';
import AuthService from '../Services/AuthService';
import { TailSpin } from  'react-loader-spinner'
import "./loader.css"


export const AuthContext = createContext();

export default ({ children })=>{
    const [user,setUser] = useState(null);
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect(()=>{
        AuthService.isAuthenticated().then(data =>{
            setUser(data.user);
            setIsAuthenticated(data.isAuthenticated);
            setIsLoaded(true);
        });
    },[]);

    return (
        <div>
            {!isLoaded ? <div className='loader'> <TailSpin
    height="100"
    width="100"
    color='#D7415D'
    ariaLabel='loading'
  /> </div> : 
            <AuthContext.Provider value={{user,setUser,isAuthenticated,setIsAuthenticated}}>
                { children }
            </AuthContext.Provider>}
        </div>
    )
}