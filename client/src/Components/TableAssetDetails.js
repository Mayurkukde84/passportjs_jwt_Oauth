import React, { useState, useEffect, useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useParams } from "react-router";
import Button from "@mui/material/Button";

import TableHead from "@mui/material/TableHead";
import TableCol from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Comment from "./Comment";
import "./comment.css"
import { pdfjs } from "react-pdf";
import {mediaUrl} from "../config"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

const TableAssetDetails = () => {
   const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };  
  const history = useHistory("");
  const [getAssetID, setAssetID] = useState([]);
 
  const { id } = useParams(" ");
  const { user } = useContext(AuthContext);
  
  // console.log(getAssetID._id);
  const addgetassetid = async () => {
    const res = await fetch(`http://localhost:5000/getasset/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data2 = await res.json();

    if (res.status === 422 || !data2) {
      alert("error");
    } else {
      setAssetID(data2);
    }
  };

  useEffect(() => {
    addgetassetid();
  }, []);

  const getassetuser = async (e) => {
    const res = await fetch("http://localhost:5000/getasset", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data2 = await res.json();
    console.log(data2);
    if (res.status === 422 || !data2) {
      console.log("error");
    } else {
      setAssetID(data2);
    }
  };

  // useEffect(() => {
  //   getassetuser();
  // }, []);

  const assetdelet = async (id) => {
    const res2 = await fetch(`http://localhost:5000/getassetdelet/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deletdata = await res2.json();

    if (res2.status === 422 || !deletdata) {
      history.go("/tableasset");
    } else {
      getassetuser(deletdata);
      history.push("/tableasset");
    }
  };

  return (
    <>
      <div className="center mt-3">
        <h4 className="mt-2" style={{"color":"#6E5DCF","font-family": "Poppins"}}>Here is <span className="text-uppercase" style={{"color":"#c27DFC","font-family": "Roboto"}}>{getAssetID.ItemName}</span> Details</h4>
      </div>
      <div className="center p-5 mt-3">
        <Card sx={{ maxWidth: 500 }}>
          <CardContent>
            <TableHead>
              <TableCol>
                <TableCell>
                  <h5>ID:</h5>
                </TableCell>
                <TableCell align="right">
                  <h5> {getAssetID._id}</h5>
                </TableCell>
              </TableCol>
              <TableCol>
                <TableCell>
                  <h5>Barcode:</h5>
                </TableCell>
                <TableCell align="right">
                  <h5> {getAssetID.Barcode}</h5>
                </TableCell>
              </TableCol>
              <TableCol>
                <TableCell>
                  <h5>ItemName:</h5>
                </TableCell>
                <TableCell align="right">
                  <h5> {getAssetID.ItemName}</h5>
                </TableCell>
              </TableCol>
              <TableCol>
                <TableCell>
                  <h5>Descripation:</h5>
                </TableCell>
                <TableCell align="right">
                  <h5> {getAssetID.Descripation}</h5>
                </TableCell>
              </TableCol>
              <TableCol>
                <TableCell>
                  <h5>Type:</h5>
                </TableCell>
                <TableCell align="right">
                  <h5> {getAssetID.Type}</h5>
                </TableCell>
              </TableCol>
              <TableCol>
                <TableCell>
                  <h5>Mode:</h5>
                </TableCell>
                <TableCell align="right">
                  <h5> {getAssetID.Mode}</h5>
                </TableCell>
              </TableCol>
              <TableCol>
                <TableCell>
                  <h5>Vendor:</h5>
                </TableCell>
                <TableCell align="right">
                  <h5> {getAssetID.Vendor}</h5>
                </TableCell>
              </TableCol>
              <TableCol>
                <TableCell>
                  <h5>Receipt:</h5>
                </TableCell>
                <TableCell align="right">
                  <h5> {getAssetID.Receipt}</h5>
                </TableCell>
              </TableCol>
              <TableCol>
                <TableCell>
                  <h5>Price:</h5>
                </TableCell>
                <TableCell align="right">
                  <h5> {getAssetID.Price}</h5>
                </TableCell>
              </TableCol>
              <TableCol>
                <TableCell>
                  <h5>CostCode:</h5>
                </TableCell>
                <TableCell align="right">
                  <h5> {getAssetID.CostCode}</h5>
                </TableCell>
              </TableCol>
              <TableCol>
                <TableCell>
                  <h5>Project Name:</h5>
                </TableCell>
                <TableCell align="right">
                  <h5> {getAssetID.ProjectName}</h5>
                </TableCell>
              </TableCol>
              <TableCol>
                <TableCell>
                  <h5>Owned By:</h5>
                </TableCell>
                <TableCell align="right">
                  <h5> {getAssetID.OwnedBy}</h5>
                </TableCell>
              </TableCol>
              <TableCol>
                <TableCell>
                  <h5>Owner Ship Document:</h5>
                </TableCell>
                <TableCell align="right">
                  <h5><button onClick={() => openInNewTab(`${mediaUrl}/${getAssetID.OwnershipDocument}`)}>Document View</button></h5>
                  <h5></h5>
                </TableCell>
              </TableCol>
              <TableCol>
                <TableCell>
                  <h5>Date Of Purchase:</h5>
                </TableCell>
                <TableCell align="right">
                  <h5> {getAssetID.DateOfPurchase}</h5>
                </TableCell>
              </TableCol>
            </TableHead>
          </CardContent>
          <CardActions>
            <NavLink to={`/tableassetedit/${getAssetID._id}`}>
              <Button size="small" class="btn btn-info p-2 m-2">
                Edit
              </Button>
            </NavLink>

            <Button
              size="small"
              class="btn btn-danger p-2 m-2"
              onClick={() => assetdelet(getAssetID._id)}
            >
              Delete
            </Button>
            <div></div>
          </CardActions>
        </Card>
      </div>

      <Comment  />
    </>
  );
};

export default TableAssetDetails;
