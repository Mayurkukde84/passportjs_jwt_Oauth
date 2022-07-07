import React, { useContext, useEffect } from "react";
import "./app.css";
import { Link } from "react-router-dom";
import TextLoop from "react-text-loop";
// import { BodyText } from "./ui";
import { AuthContext } from "../Context/AuthContext";
const UserOptions = () => {
  const { user } = useContext(AuthContext);
  const users = user.username;

  const members = async () => {
    const Member = users;

    const res = await fetch("http://localhost:5000/member", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Member,
      }),
    });
    const data = await res.json();
    console.log("member2", data);
    if (res.status === 422 || !data) {
      console.log("error");
    } else {
      console.log("added data");
    }
  };
  // useEffect(() => {
  //   members();
  // }, []);

  return (
    <div className="userbg">
      <h3
        className="text-center mt-5"
        style={{ color: "#6E5DCF", fontFamily: "Poppins" }}
      >
        <TextLoop
          springConfig={{ stiffness: 70, damping: 31 }}
          adjustingSpeed={500}
        >
          <span>Hi👋</span>
          <span>Hi👋</span>
        </TextLoop>{" "}
        <span
          className="text-uppercase"
          style={{ color: "#c27DFC", "font-family": "Roboto" }}
        >
          {user.username}
        </span>
      </h3>

      <div className="centerbutton .d-flex">
        <Link to="/assetassign">
          <button className="p-2 table-color">Table Assign</button>
        </Link>
        <Link to="/tableasset">
          <button className="p-2 table-color">Table Asset</button>
        </Link>
        <Link to="/tableemployee">
          <button className="p-2 table-color">Table Employee</button>
        </Link>
        <Link to="/tablevendor">
          <button className="p-2 table-color">Table Vendor</button>
        </Link>
        <Link to="/tableproject">
          <button className="p-2 table-color">Table Project</button>
        </Link>
      </div>
    </div>
  );
};

export default UserOptions;
