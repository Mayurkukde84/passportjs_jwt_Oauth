import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TableHead from "@mui/material/TableHead";
import TableCol from "@mui/material/TableRow";
import Button from "@mui/material/Button";

import { useParams } from "react-router";
import { NavLink, useHistory } from "react-router-dom";

import TableCell from "@mui/material/TableCell";



const AssignDetails = () => {
  const [getAssign, setAssignData] = useState([]);
  const {id} = useParams("");
  const history = useHistory("");

  const addgetAssign = async(e)=>{
    const res = await fetch(`http://localhost:5000/getassigndetails/${id}`,{
      method:"GET",
      headers:{
        "Content-Type": "application/json",
      }
    });
    const data1 = await res.json()
   
  
    if(res.status === 422 || !data1){
      
    }else{
      
      setAssignData(data1)
    }
  
  
  };
  useEffect(() => {
    addgetAssign();
  },[]);

  const getassignuser = async (e) => {
    const res = await fetch("http://localhost:5000/geassign", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (res.status === 422 || !data) {
      
    } else {
      setAssignData(data);
      console.log("get data");
    }
  };
  const assigndelet = async (id) =>{
    const res3 = await fetch(`http://localhost:5000/getassigndelet/${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json",

      },
    });
    const deletassigndata = await res3.json();
    

    if (res3.status === 422 || !deletassigndata){
      history.go("/assetassign")
     
    }else{
      console.log("user deleted");
      getassignuser(deletassigndata);
      history.push("/assetassign")
      
    }

  }
    
  return (
    <>
      <div className="center p-5 mt-3">
        <Card sx={{maxWidth:500}}>
          <CardContent>
            <TableHead>
              <TableCol>
                <TableCell>
                  <h5>User Name:</h5>
                </TableCell>
                <TableCell align="right">
                  <h5>{getAssign.UserName}</h5>
                </TableCell>
                
              </TableCol>
              <TableCol>
                <TableCell>
                  <h5>Member:</h5>
                </TableCell>
                <TableCell align="right">
                  <h5>{getAssign.Member}</h5>
                </TableCell>
              </TableCol>
              <TableCol>
                <TableCell>
                  <h5>TaskAssign:</h5>
                </TableCell>
                <TableCell align="right">
                  <h5>{getAssign.TaskAssign}</h5>
                </TableCell>
              </TableCol>
              <TableCol>
                <TableCell>
                  <h5>Descripation:</h5>
                </TableCell>
                <TableCell align="right">
                  <h5>{getAssign.TaskAssign}</h5>
                </TableCell>
              </TableCol>
            </TableHead>
          </CardContent>
          <CardActions>
          <NavLink to={`/tableassignedit/${getAssign._id}`}>
          <Button size="small" class="btn btn-info p-2 m-2">
              Edit
            </Button>

          </NavLink>
            

            <Button size="small" class="btn btn-danger p-2 m-2" onClick={()=>assigndelet(getAssign._id)}>
              Delete
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default AssignDetails;
