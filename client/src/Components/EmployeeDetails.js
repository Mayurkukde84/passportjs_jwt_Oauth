import React,{useState,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink, useParams,useHistory } from 'react-router-dom';


const EmployeeDetails = () => {
  const history = useHistory("")
  const {id} = useParams("");
  const [getEmployee,setEmployeeData]  = useState([])
  console.log(id)
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
  const employeedelet = async (id) =>{
    
    const res2 = await fetch(`http://localhost:5000/getemployeedelet/${id}`,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deletdata = await res2.json();
    console.log(deletdata);

    if (res2.status === 422 || !deletdata){
      console.log("error")
      history.go("/tableemployee")
    }else{
      console.log("user deleted");
      getemployeeuser(deletdata);
      history.push("/tableemployee")
      
    }
  }


  return (
    <div className='center p-5 mt-3'>
    <Card sx={{ maxWidth: 345 }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          employee table details
        </Typography>
        
        <Typography gutterBottom variant="h5" component="div">
          Name :{getEmployee.Name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          EmployeeID: {getEmployee.EmployeeID}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Department: {getEmployee.Department}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          PhoneNumber:{getEmployee.PhoneNumber}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Address:{getEmployee.Address}
        </Typography>
      
       
        
       
      </CardContent>
      <CardActions>
      <NavLink to={`/tableemployeeedit/${getEmployee._id}`}>
             <Button size="small">Edit</Button>
      </NavLink>
      
      
        
        <Button size="small" onClick={()=>employeedelet(getEmployee._id)}>Delete</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default EmployeeDetails