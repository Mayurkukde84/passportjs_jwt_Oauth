import React from 'react';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import UserOptions from './Components/UserOptions';
import TableAsset from './Components/TableAsset';
import Table from './Components/Table';
import Register from './Components/Register';
import Admin  from './Components/Admin';
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TableEmployee from './Components/TableEmployee';
import Vendor from './Components/Vendor';
import VendorDetails from './Components/VendorDetails';
import VendorEdit from './Components/VendorEdit';



function App() {
  return (
    <Router>
   
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <UnPrivateRoute path="/login" component={Login}/>
      <UnPrivateRoute path="/register" component={Register}/>
     
      <PrivateRoute path="/table" roles={["user","admin"]} component={Table}/>
      <PrivateRoute path="/tableasset" roles={["user","admin"]} component={TableAsset}/>
      <PrivateRoute path="/useroptions" roles={["user","admin"]} component={UserOptions}/>
      <PrivateRoute path="/tableemployee" roles={["user","admin"]} component={TableEmployee}/>
      <PrivateRoute path="/tablevendor" roles={["user","admin"]} component={Vendor}/>
      <PrivateRoute path="/getvendor/:id" roles={["user","admin"]} component={VendorDetails}/>
      <PrivateRoute path="/getvendoredit/:id" roles={["user","admin"]} component={VendorEdit}/>
      
      <PrivateRoute path="/admin" roles={["admin"]} component={Admin}/>
      
    </Router>
  );
}

export default App;
