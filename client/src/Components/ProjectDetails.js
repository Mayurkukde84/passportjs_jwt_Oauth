import React, { useState,useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import TableHead from "@mui/material/TableHead";
import TableCol from "@mui/material/TableRow";
import { useParams } from "react-router";
import { NavLink,useHistory } from "react-router-dom";

const ProjectDetails = () => {
    const history = useHistory(" ");
  const { id } = useParams(" ");
  const [getProjects, setProject] = useState([]);

  const getproject = async () => {
    const res = await fetch(`http://localhost:5000/getproject/${id}`, {
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
        setProject(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getproject()
  }, []);

  const getprojectdata = async (e) =>{
    const res = await fetch("http://localhost:5000/getproject", {
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
        setProject(data);
        console.log("get data");
      }
    
  }
  const projectedelet = async (id) => {
    const res2 = await fetch(`http://localhost:5000/getprojectdelet/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deletdata = await res2.json();
    console.log(deletdata);

    if (res2.status === 422 || !deletdata) {
      console.log("error");
      history.go("/tableproject");
    } else {
      console.log("user deleted");
      getprojectdata(deletdata);
      history.push("/tableproject");
    }
  };

  return (
    <>
      <div className="center mt-3">
        <h4
          className="mt-2"
          style={{ color: "#6E5DCF", "font-family": "Poppins" }}
        >
          Here is{" "}
          <span
            className="text-uppercase"
            style={{ color: "#c27DFC", "font-family": "Roboto" }}
          >
            ProjectName
          </span>
          Project Details
        </h4>
      </div>
      <div className="center p-4 mt-1 d-flex">
        <Card sx={{ maxWidth: 500 }}>
          <CardContent>
            <TableHead>
              <TableCol>
                <TableCell>
                  <h5>ProjectName:</h5>
                </TableCell>
                <TableCell align="right">
                  <h5>{getProjects.ProjectName}</h5>
                </TableCell>
              </TableCol>
              <TableCol>
                <TableCell>
                  <h5>CostCode:</h5>
                </TableCell>
                <TableCell align="right">
                  <h5>{getProjects.CostCode}</h5>
                </TableCell>
              </TableCol>
              <TableCol>
                <TableCell>
                  <h5>Details:</h5>
                </TableCell>
                <TableCell align="right">
                  <h5>{getProjects.Details}</h5>
                </TableCell>
              </TableCol>
              <TableCol>
                <TableCell>
                  <h5>Owner:</h5>
                </TableCell>
                <TableCell align="right">
                  <h5>{getProjects.Owner}</h5>
                </TableCell>
              </TableCol>
            </TableHead>
          </CardContent>
          <CardActions>
          <NavLink to={`/tableprojecteedit/${getProjects._id}`}>
            <Button size="small" class="btn btn-info p-2 m-2">Edit</Button>
          </NavLink>

          <Button size="small" class="btn btn-danger p-2 m-2" onClick={()=>projectedelet(getProjects._id)} >
            Delete
          </Button>
        </CardActions>
        </Card>
      </div>
    </>
  );
};

export default ProjectDetails;
