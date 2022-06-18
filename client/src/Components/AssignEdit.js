import React,{useState,useEffect} from 'react'
import { useParams,useHistory } from "react-router";
const AssignEdite = () => {
  const {id} = useParams(" ")
 const history = useHistory("")
  const [inpAssign,setInpAssign] = useState({
    
    Member:" ",
    TaskAssign:" ",
    Descripation:" "
  });

  const setAssign = (e) =>{
    const {name,value} = e.target;
    console.log(value)
    setInpAssign((preval)=>{
      return{
        ...preval,
        [name]:value,
      }
    })

  }

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
      
      setInpAssign(data1)
      
    }
  
  
  };
  useEffect(() => {
    addgetAssign();
  },[]);


  const updateassign = async(e) =>{
    e.preventDefault();
    const{
        
      
      Member,
      TaskAssign,
      Descripation,
      } =inpAssign;
    const res2 = await fetch(`http://localhost:5000/getassignedit/${id}`,{
        method:"PATCH",
        headers: {
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
           
          
          Member,
          TaskAssign,
          Descripation,
        })
    })
    const data2 = await res2.json();
    console.log(data2)
   

    if(res2.status === 422 || !data2){
        alert("fill the data")
       
    }else{
        alert("data added")
        setInpAssign(data2)
       
        history.push("/assetassign")
        
        
    }
}
  return (
    <>
       <div>
        <div className="container">
          <form className="bg-light p-2 ">
            
            <div className="row">
              <div className="col form-inline ">
                <label for="exampleInputEmail1">TaskAssign</label>
                <input
                  type="text"
                  class="form-control"
                  required="required"
                  name="TaskAssign"
                  placeholder="Enter a Department"
                  value={inpAssign.TaskAssign}
                  onChange={setAssign}
                />
              </div>
              <div className="col form-inline">
                <label for="exampleInputEmail1">Descripation</label>
                <input
                  type="text"
                  class="form-control"
                  required="required"
                  name="Descripation"
                  placeholder="Enter a phone number"
                  value={inpAssign.Descripation}
                  onChange={setAssign}
                />
              </div>
            </div>
         

            <button
              type="submit"
              class="btn btn-primary mt-3"
              onClick={updateassign}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AssignEdite