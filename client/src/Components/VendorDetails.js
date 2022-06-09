import  React,{useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router';
import { NavLink,useHistory } from 'react-router-dom';
import { use } from 'passport';
export default function VendorDetails() {
  const history = useHistory("")
    const [getvendor,setVendor] = useState([ ])
    const {id } = useParams (" ")
    console.log(id)
    console.log(getvendor._id)
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

      const vendordelet = async (id) =>{
    
        const res2 = await fetch(`http://localhost:5000/getvendordelet/${id}`,{
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const deletdata = await res2.json();
        console.log(deletdata);
    
        if (res2.status === 422 || !deletdata){
          console.log("error")
          history.go("/tablevendor")
        }else{
          console.log("user deleted");
          getvendoruser(deletdata);
          history.push("/tablevendor")
          
        }
      }
        
  return (
      <div className='center p-5 mt-3'>
    <Card sx={{ maxWidth: 345 }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          vendor table details
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          id: {getvendor._id}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          VendorID: {getvendor.VendorID}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          VendorName: {getvendor.VendorName}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          GSTNumber: {getvendor.GSTNumber}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          BankAccountDetails:{getvendor.BankAccountDetails}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          PhoneNumber:{getvendor.PhoneNumber}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Address:{getvendor.Address}
        </Typography>
       
      </CardContent>
      <CardActions><NavLink to={`/getvendoredit/${getvendor._id}`}>
      <Button size="small">Edit</Button>
      </NavLink> 
       
        <Button size="small" onClick={()=>vendordelet(getvendor._id)}>Delete</Button>
      </CardActions>
    </Card>
    </div>
  );
}
