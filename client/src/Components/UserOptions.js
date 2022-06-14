import React,{useContext,useEffect} from "react";
import "./app.css";
import { Link } from "react-router-dom";

import { AuthContext } from '../Context/AuthContext'
const UserOptions = () => {
  const {user} = useContext(AuthContext);
  const users = user.username

  const members = async()=>{
        
    const Member = users
    console.log(Member)
    const res = await fetch("http://localhost:5000/member",{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            Member
        })
    })
    const data = await res.json();

   

}
useEffect(() => {
  members();
},[]);

 
  

  return (
    
    <div className="userbg">
    <h3 className="text-center mt-5">Hi {user.username}</h3>
    
      <div className="centerbutton .d-flex">
      
        <Link to="/assetassign"><button className="p-2 bg-success ">Table Assign</button></Link>
        <Link to="/tableasset"><button className="p-2 bg-success ">Table Asset</button></Link>
        <Link to = '/tableemployee'><button className="p-2 bg-success">Table Employee</button></Link>
        <Link to = "/tablevendor"><button className="p-2 bg-success">Table Vendor</button></Link>
      </div>
    </div>
  );
};

export default UserOptions;
