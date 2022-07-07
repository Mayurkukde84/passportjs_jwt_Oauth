import React, { useState,useEffect } from "react";
import Popup from "reactjs-popup";
import { useHistory,NavLink } from "react-router-dom";
import { GrFormView } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
const Project = () => {
    const history = useHistory("");
    const [getProject,setgetProject]= useState([])
  const [inpProject, setProject] = useState({
    ProjectName: " ",
    CostCode: " ",
    
    Details: " ",
    Owner: " ",
  });

  const setField = (e) => {
    const { name, value } = e.target;
    console.log(value);
    console.log(name);
    setProject((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addinproject = async (e) => {
    e.preventDefault();

    const { ProjectName,CostCode,Details,Owner} = inpProject;

    const res = await fetch("http://localhost:5000/tableproject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ProjectName,
        CostCode,
        
        Details,
        Owner
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      alert("error");
    } else {
      alert("data added");
      history.go("/tableproject");
    }
  };

  const addgetproject = async (e) => {
    const res = await fetch("http://localhost:5000/getproject", {
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
      setgetProject(data1);
    }
  };

  useEffect(() => {
    addgetproject();
  }, []);

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
      projectedelet(deletdata);
      history.push("/tableproject");
    }
  };

  return (
    <>
      <div className="center mt-3">
        <h4
          className="mt-2"
          style={{ color: "#c27DFC", "font-family": "Poppins" }}
        >
          Project List
        </h4>
      </div>
      <div className="addbutton">
        <Popup
          trigger={
            <button style={{ color: "white", background: "#5E4DAB" }}>
              +ADD
            </button>
          }
          position="bottom center"
        >
          <div className="container">
            <form className="bg-light p-2 border border-warning">
              <div className="row p-2">
                <div className="col form-inline p-2">
                  <label for="exampleInputEmail1">Project Name</label>
                  <input
                    type="text"
                    class="form-control"
                    required="required"
                    name="ProjectName"
                    placeholder="Enter a project name"
                    onChange={setField}
                    value={inpProject.ProjectName}
                  />
                </div>
                <div className="col form-inline p-2">
                  <label for="exampleInputEmail1">Cost Code</label>
                  <input
                    type="text"
                    class="form-control"
                    required="required"
                    name="CostCode"
                    placeholder="Enter a cost code"
                    onChange={setField}
                    value={inpProject.CostCode}
                  />
                </div>
              </div>

              <div className="row p-2">
                
                <div className="col form-inline p-2">
                  <label for="exampleInputEmail1">Details</label>
                  <input
                    type="text"
                    class="form-control"
                    required="required"
                    name="Details"
                    placeholder="Enter a name details"
                    onChange={setField}
                    value={inpProject.Details}
                  />
                </div>
                <div className="col form-inline p-2">
                <label for="exampleInputEmail1">Owners</label>
                <input
                  type="text"
                  class="form-control"
                  required="required"
                  name="Owner"
                  placeholder="Enter a name owners"
                  onChange={setField}
                  value={inpProject.Owner}
                />
              </div>
              </div>

             
              <button className="btn btn-primary" type="submit" onClick={addinproject}>Submit</button>
            </form>
          </div>
        </Popup>
      </div>
      <div className="border border-success p-2 m-2 table-responsive">
      <table class="table table-light table-striped ">
        <thead>
            <tr className="text-center">
                <th scope="col">Sr.No.</th>
                <th scope="col">Project Name</th>
                <th scope="col">Cost Code</th>
         
                <th scope="col">Details</th>
                <th scope="col">Owner</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
        {
            getProject.map((pro,id)=>{
                return(
                    <>
                    <tr className="text-center">
                    <td>{id + 1}</td>
                    <td>{pro.ProjectName}</td>
                    <td>{pro.CostCode}</td>
                   
                    <td>{pro.Details}</td>
                    <td>{pro.Owner}</td>
                    <td className="d-flex justify-content-between">
                      <NavLink to={`/tableprojectdetails/${pro._id}`}>
                        <button className="btn btn-white border border-dark mt-2">
                          <GrFormView />
                        </button>
                      </NavLink>
                      <NavLink to={`/tableprojecteedit/${pro._id}`}>
                        <button className="btn btn-white border btn btn-primary mt-2">
                          <FiEdit />
                        </button>
                      </NavLink>
                      <span>
                        <button
                          className="btn btn-white border btn btn-danger m-2 "
                          onClick={()=> projectedelet(pro._id)}
                        
                        >
                          <AiFillDelete />
                        </button>
                      </span>
                    </td>

                    </tr>
                   
                        
                </>
                )
            })
        }
          
        </tbody>
      </table>

      </div>
    </>
  );
};

export default Project;
