import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";

const Navbar = (props) => {
  const { isAuthenticated, user, setIsAuthenticated, setUser } =
    useContext(AuthContext);
  const users = user.username;
  console.log(users);

  const onClickLogoutHandler = () => {
    AuthService.logout().then((data) => {
      if (data.success) {
        setUser(data.user);
        setIsAuthenticated(false);
      }
    });
  };

  const unauthenticatedNavBar = () => {
    return (
      <>
        <Link to="/" className="text-decoration-none">
          <li className="nav-item nav-link text-lg-left">Home</li>
        </Link>
        <Link to="/login" className="text-decoration-none">
          <li className="nav-item nav-link text-lg-left">Login</li>
        </Link>

        <Link to="/register" className="text-decoration-none">
          <li className="nav-item nav-link">Register</li>
        </Link>
      </>
    );
  };

  const authenticatedNavBar = () => {
    return (
      <div className="d-flex ">
        <Link to="/" className="text-decoration-none">
          <li className="nav-item nav-link" >Home</li>
        </Link>
        <Link to="/Useroptions" className="text-decoration-none">
          <li className="nav-item nav-link" >Table</li>
        </Link>
        <Link to="/login" className="text-decoration-none" >
          <li className="nav-item nav-link ">{user.username}</li>
        </Link>
        {user.role === "admin" ? (
          <Link to="/admin" className="text-decoration-none">
            <li className="nav-item nav-link">Admin</li>
          </Link>
        ) : null}
        <span>
          <button
            type="button"
            className="btn btn-link  nav-link"
            onClick={onClickLogoutHandler}
          >Logout
          </button>
        </span>
      </div>
    );
  };
  return (
    <>
      <nav className=" navbar navbar-expand-lg navbar-dark  ">
        <Link to="/" className="text-decoration-none">
          <div className="navbar-brand nav-link ">Neuoflux</div>
        </Link>
        <div className="collapse navbar-collapse nav-link " id="navbarText">
          <ul className="navbar-nav nav-link">
            {!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
