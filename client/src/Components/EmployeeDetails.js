import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";

import { NavLink, useParams, useHistory } from "react-router-dom";
import TableHead from "@mui/material/TableHead";
import TableCol from "@mui/material/TableRow";

const EmployeeDetails = () => {
  const history = useHistory("");
  const { id } = useParams("");
  const [getEmployee, setEmployeeData] = useState([]);
  console.log(id);
  const addgetemployee = async () => {
    const res = await fetch(`http://localhost:5000/getemployee/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data1 = await res.json();
    console.log(data1);

    if (res.status === 422 || !data1) {
      alert("error");
      console.log("error");
    } else {
      console.log("data aaded");
      setEmployeeData(data1);
    }
  };
  useEffect(() => {
    addgetemployee();
  }, []);

  const getemployeeuser = async (e) => {
    const res = await fetch("http://localhost:5000/getemployee", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (res.status === 422 || !data) {
      console.log("error");
    } else {
      setEmployeeData(data);
      console.log("get data");
    }
  };
  const employeedelet = async (id) => {
    const res2 = await fetch(`http://localhost:5000/getemployeedelet/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deletdata = await res2.json();
    console.log(deletdata);

    if (res2.status === 422 || !deletdata) {
      console.log("error");
      history.go("/tableemployee");
    } else {
      console.log("user deleted");
      getemployeeuser(deletdata);
      history.push("/tableemployee");
    }
  };

  return (
    <>
    <div className="center mt-3">
    <h4>Here is {getEmployee.Name} Employee  Details</h4>

    </div>

  
    <div className="center p-4 mt-1 d-flex">
      
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <TableHead>
            <TableCol>
              <TableCell>
                <h5>Name:</h5>
              </TableCell>
              <TableCell align="right">
                <h5>{getEmployee.Name}</h5>
              </TableCell>
            </TableCol>
            <TableCol>
              <TableCell>
                <h5>EmployeeID:</h5>
              </TableCell>
              <TableCell align="right">
                <h5>{getEmployee.EmployeeID}</h5>
              </TableCell>
            </TableCol>
            <TableCol>
              <TableCell>
                <h5>Department:</h5>
              </TableCell>
              <TableCell align="right">
                <h5>{getEmployee.Department}</h5>
              </TableCell>
            </TableCol>
            <TableCol>
              <TableCell>
                <h5>PhoneNumber:</h5>
              </TableCell>
              <TableCell align="right">
                <h5>{getEmployee.PhoneNumber}</h5>
              </TableCell>
            </TableCol>
            <TableCol>
              <TableCell>
                <h5>Address:</h5>
              </TableCell>
              <TableCell align="right">
                <h5>{getEmployee.Address}</h5>
              </TableCell>
            </TableCol>
          </TableHead>
        </CardContent>
        <CardActions>
          <NavLink to={`/tableemployeeedit/${getEmployee._id}`}>
            <Button size="small" class="btn btn-info p-2 m-2">Edit</Button>
          </NavLink>

          <Button size="small" class="btn btn-danger p-2 m-2" onClick={() => employeedelet(getEmployee._id)}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
    </>
  );
};

export default EmployeeDetails;
