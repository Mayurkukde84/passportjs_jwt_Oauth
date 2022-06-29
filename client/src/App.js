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
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';

import Vendor from './Components/Vendor';
import VendorDetails from './Components/VendorDetails';
import VendorEdit from './Components/VendorEdit';
import TableAssetEdit from './Components/TableAssetEdit';
import TableAssetDetails from './Components/TableAssetDetails';
import Employee from './Components/Employee';
import EmployeeDetails from './Components/EmployeeDetails';
import EmployeeEdit from './Components/EmployeeEdit';
import AssetAssign from './Components/AssetAssign';
import AssignDetails from './Components/AssignDetails';
import Comment from './Components/Comment';
import AssignEdit from './Components/AssignEdit';




function App() {
 return (

<Router>
<Navbar/>

      <Route exact path="/" component={Home}/>
 

     
      <UnPrivateRoute  path="/login" component={Login}/>
      <UnPrivateRoute path="/register" component={Register}/>
      <PrivateRoute path="/useroptions" roles={["user","admin"]} component={UserOptions}/>
      <PrivateRoute  path="/table"  roles={["user","admin"]} component={Table}/>
      <PrivateRoute path="/tableasset" roles={["user","admin"]} component={TableAsset}/>
      <PrivateRoute path="/tableassetdetails/:id" roles={["user","admin"]} component={TableAssetDetails}/>
      <PrivateRoute path="/tableassetedit/:id" roles={["user","admin"]} component={TableAssetEdit}/>

      <PrivateRoute path="/assetassign" roles={["user","admin"]} component={AssetAssign}/>
      <PrivateRoute path="/tableassigndetails/:id" roles={["user","admin"]} component={AssignDetails}/>
      <PrivateRoute path="/tableassigndetails/:id/comments" roles={["user","admin"]} component={Comment}/>
      <PrivateRoute path="/tableassignedit/:id" roles={["user","admin"]} component={AssignEdit}/>
      

      <PrivateRoute path="/tablevendor" roles={["user","admin"]} component={Vendor}/>
      <PrivateRoute path="/getvendor/:id" roles={["user","admin"]} component={VendorDetails}/>
      <PrivateRoute path="/getvendoredit/:id" roles={["user","admin"]} component={VendorEdit}/>

      <PrivateRoute path="/tableemployee" roles={["user","admin"]} component={Employee}/>
      <PrivateRoute path="/tableemployeedetails/:id" roles={["user","admin"]} component={EmployeeDetails}/>
      <PrivateRoute path="/tableemployeeedit/:id" roles={["user","admin"]} component={EmployeeEdit}/>
      
      <PrivateRoute path="/admin" roles={["admin"]} component={Admin}/>

  
 
    </Router>
    
  );
}

export default App;
