import React from "react";
import "./app.css";
import { Link } from "react-router-dom";
const UserOptions = () => {
  return (
    <>
      <div className="centerbutton ">
        <Link to="/tableasset"><button className="p-2 bg-success ">Table Asset</button></Link>
        <Link to = '/tableemployee'><button className="p-2 bg-success">Table Employee</button></Link>
        <Link to = "/tablevendor"><button className="p-2 bg-success">Table Vendor</button></Link>
      </div>
    </>
  );
};

export default UserOptions;
