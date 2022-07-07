import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const ProjectEdite = () => {
  const { id } = useParams(" ");
  const history = useHistory("");
  const [inpProject, setProject] = useState({
    ProjectName: " ",
    CostCode: " ",

    Details: " ",
    Owner: " ",
  });

  const setField = (e) => {
    const { name, value } = e.target;
   
    setProject((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addgetproject = async (e) => {
    const res = await fetch(`http://localhost:5000/getproject/${id}`, {
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
      setProject(data1);
      console.log("data aaded");
  
    }
  };

  useEffect(() => {
    addgetproject();
  }, []);

  const updateprojects = async(e) =>{
    e.preventDefault();
    const{
        
      ProjectName,CostCode,Details,Owner
      } =inpProject;
    const res2 = await fetch(`http://localhost:5000/getprojectedit/${id}`,{
        method:"PATCH",
        headers: {
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
           
            ProjectName,CostCode,Details,Owner
        })
    })
    const data2 = await res2.json();
    console.log(data2)

    if(res2.status === 422 || !data2){
        alert("fill the data")
       
    }else{
        alert("data added")
        setProject(data2)
        history.push("/tableproject")
        
        
    }
    
}


  return (
    <>
      <div className="container">
        <form className="bg-light p-2">
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

          <button className="btn btn-primary" type="submit"
          onClick={updateprojects}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ProjectEdite;
