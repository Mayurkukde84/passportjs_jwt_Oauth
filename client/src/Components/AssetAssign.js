import React,{useContext,useState,useEffect} from "react";
import Popup from "reactjs-popup";
import { GrFormView } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";

import { AuthContext } from '../Context/AuthContext'
import { initialize } from "passport";
const AssetAssign = () => {

 const [getMember,setMember] = useState([]);


  const {user} = useContext(AuthContext);
  console.log(user)


  const user2 = user.username
  const[getAssignData,setAssignData] = useState([]);
  const [inpAssign,setInpAssign] = useState({
    UserName:user2,
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

  const addinpassign = async (e) =>{
    e.preventDefault();
    
    const{
      UserName,
      Member,
      TaskAssign,
      Descripation
    } = inpAssign;

    const res = await fetch ("http://localhost:5000/tableassign",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserName,
        Member,
        TaskAssign,
        Descripation
      }),
    })

    const data = await res.json();

    if(res.status === 422 || !data){
      alert("error")
    }else{
      alert("data added")
    }

  }

  const addgetAssign = async(e)=>{
    const res = await fetch("http://localhost:5000/getassign",{
      method:"GET",
      headers:{
        "Content-Type": "application/json",
      }
    });
    const data1 = await res.json()
   

    if(res.status === 422 || !data1){
      alert("error")
    }else{
      
      setAssignData(data1)
    }


  };
  useEffect(() => {
    addgetAssign();
  },[]);

  useEffect(()=>{
    const member = async ()=>{
      const res = await fetch("http://localhost:5000/getmember");
      const getres = await res.json();
      console.log(getres)
      setMember(await getres)
    }
    member();
  },[]);
  


  

  return (
    <>
      <div className="addbutton">
        <Popup trigger={<button>+ADD</button>} position="bottom center">
          <div className="container">
            <form className="bg-light p-2 ">
              <div className="row p-2 ">
                <div className="col form-inline p-2">
                  <label for="exampleInputEmail1">Member</label>
                  <select name="Member" className="form-control p-2" value={inpAssign.Member} onChange={setAssign}>
                    <option>--Select Member--</option>
                   
                    {
                      getMember.map((m, index)=>{
                        return(
                          <option key={index} name="Member">{m.Member}</option>

                        )
                       
                      })
                    }
                 
                  
                  </select>
                 
                  <input
                    type="hidden"
                    class="form-control"
                    required="required"
                    name="UserName"
                    placeholder="Enter a name"
                    
                    value={inpAssign.UserName}
                    onChange={setAssign}
                  />
                </div>
                <div className="col form-inline p-2">
                  <label for="exampleInputEmail1">Assign</label>
                  <input
                    type="text"
                    class="form-control"
                    required="required"
                    name="TaskAssign"
                    placeholder="Enter a name"
                    value={inpAssign.TaskAssign}
                    onChange={setAssign}
                  />
                </div>
                <div className="col form-inline p-2">
                  <label for="exampleInputEmail1">Descripation</label>
                  <input
                    type="text"
                    class="form-control"
                    required="required"
                    name="Descripation"
                    placeholder="Enter a ID"
                    value={inpAssign.Descripation}
                    onChange={setAssign}
                  />
                </div>
              </div>

              <button type="submit" class="btn btn-primary" onClick={addinpassign}>
                Submit
              </button>
            </form>
          </div>
        </Popup>
      </div>

      <div className="border border-success p-2 m-2">
        <table class="table table-light table-striped">
          <thead>
            <tr className="text-center">
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Member</th>
              <th scope="col">Assign</th>
              <th scope="col">Descripation</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {
            getAssignData.map((assign,id)=>{
              return(
                <>

           
          
            <tr className="text-center">
              <th>{id + 1}</th>
              <td>{assign.UserName}</td>
              <td>{assign.Member}</td>
              <td>{assign.TaskAssign}</td>
              <td>{assign.Descripation}</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-success">
                  <GrFormView />
                </button>

                <button className="btn btn-primary">
                  <FiEdit />
                </button>

                <button className="btn btn-danger">
                  <AiFillDelete />
                </button>
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

export default AssetAssign;
