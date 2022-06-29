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

export default function VendorDetails() {
  const history = useHistory("");
  const [getvendor, setVendor] = useState([]);
  const { id } = useParams(" ");
  console.log(id);
  console.log(getvendor._id);
  const vendoruser = async () => {
    const res = await fetch(`http://localhost:5000/getvendor/${id}`, {
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
      setVendor(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    vendoruser();
  }, []);

  const getvendoruser = async (e) => {
    const res = await fetch("http://localhost:5000/getvendor", {
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
      setVendor(data);
      console.log("get data");
    }
  };

  // useEffect(() => {
  //   getvendoruser();
  // }, []);

  const vendordelet = async (id) => {
    const res2 = await fetch(`http://localhost:5000/getvendordelet/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deletdata = await res2.json();
    console.log(deletdata);

    if (res2.status === 422 || !deletdata) {
      console.log("error");
      history.go("/tablevendor");
    } else {
      console.log("user deleted");
      getvendoruser(deletdata);
      history.push("/tablevendor");
    }
  };

  return (
    <>
    <div className="center mt-3">
    <h4 className="mt-2" style={{"color":"#6E5DCF ","font-family": "Poppins"}}> Here is <span className="text-uppercase" style={{"color":"#c27DFC","font-family": "Roboto"}}>{getvendor.VendorName}</span> Vendor  Details</h4>

    </div>
    <div className="center p-5 mt-3">
      <Card sx={{ maxWidth: 3500 }}>
        <CardContent>
          <TableHead>
            <TableCol>
              <TableCell>
                <h5>id:</h5>
              </TableCell>
              <TableCell align="right">
                <h5>{getvendor._id}</h5>
              </TableCell>
            </TableCol>
            <TableCol>
              <TableCell>
                <h5>VendorID:</h5>
              </TableCell>
              <TableCell align="right">
                <h5>{getvendor.VendorID}</h5>
              </TableCell>
            </TableCol>
            <TableCol>
              <TableCell>
                <h5>VendorName:</h5>
              </TableCell>
              <TableCell align="right">
                <h5>{getvendor.VendorName}</h5>
              </TableCell>
            </TableCol>
            <TableCol>
              <TableCell>
                <h5>PhoneNumber:</h5>
              </TableCell>
              <TableCell align="right">
                <h5>{getvendor.PhoneNumber}</h5>
              </TableCell>
            </TableCol>
            <TableCol>
              <TableCell>
                <h5>GSTNumber:</h5>
              </TableCell>
              <TableCell align="right">
                <h5>{getvendor.GSTNumber}</h5>
              </TableCell>
            </TableCol>
            <TableCol>
              <TableCell>
                <h5>VendorType:</h5>
              </TableCell>
              <TableCell align="right">
                <h5>{getvendor.VendorType}</h5>
              </TableCell>
            </TableCol>
            <TableCol>
              <TableCell>
                <h5>BankAccountDetails:</h5>
              </TableCell>
              <TableCell align="right">
                <h5>{getvendor.BankAccountDetails}</h5>
              </TableCell>
            </TableCol>
            <TableCol>
              <TableCell>
                <h5>Address:</h5>
              </TableCell>
              <TableCell align="right">
                <h5>{getvendor.Address}</h5>
              </TableCell>
            </TableCol>
          </TableHead>

         
        </CardContent>
        <CardActions>
          <NavLink to={`/getvendoredit/${getvendor._id}`}>
            <Button size="small" class="btn btn-info p-2 m-2">Edit</Button>
          </NavLink>

          <Button size="small" class = "btn btn-danger p-2 m-2"onClick={() => vendordelet(getvendor._id)}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
    </>
  );
}
