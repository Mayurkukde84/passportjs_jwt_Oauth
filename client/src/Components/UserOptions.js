import React,{useContext} from "react";
import "./app.css";
import { Link } from "react-router-dom";

import { AuthContext } from '../Context/AuthContext'
const UserOptions = () => {
  const {user} = useContext(AuthContext);
 
  

  return (
    
    <div className="userbg">
    <h3 className="text-center mt-5">Hi {user.username}</h3>
    
      <div className="centerbutton .d-flex">
      
        <Link to="/assetassign"><button className="p-2 bg-success ">Table Asset</button></Link>
        <Link to="/tableasset"><button className="p-2 bg-success ">Table Asset</button></Link>
        <Link to = '/tableemployee'><button className="p-2 bg-success">Table Employee</button></Link>
        <Link to = "/tablevendor"><button className="p-2 bg-success">Table Vendor</button></Link>
      </div>
    </div>
  );
};

export default UserOptions;
