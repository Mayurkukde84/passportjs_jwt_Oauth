import React,{useState,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useParams } from 'react-router';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { NavLink,useHistory } from 'react-router-dom';
const TableAssetDetails = () => {
  const history = useHistory("")
    const [getAssetID,setAssetID] = useState([ ])
    const {id } = useParams (" ")
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

      const assetdelet = async (id) =>{
    
        const res2 = await fetch(`http://localhost:5000/getassetdelet/${id}`,{
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const deletdata = await res2.json();
        
    
        if (res2.status === 422 || !deletdata){
          
          history.go("/tableasset")
         
        }else{
          
          getassetuser(deletdata);
          history.go("/tableasset")
         
          
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
          Item Name :  {getAssetID.ItemName}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Descripation:  {getAssetID.Descripation}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Type: {getAssetID.Type}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Mode: {getAssetID.Mode}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          vendor:{getAssetID.Vendor}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Receipt:{getAssetID.Receipt}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Price:{getAssetID.Receipt}
        </Typography>
       
        <Typography gutterBottom variant="h5" component="div">
          CostCode:{getAssetID.CostCode}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          ProjectName:{getAssetID.ProjectName}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          OwnedBy:{getAssetID.OwnedBy}
        </Typography>
       
        <Typography gutterBottom variant="h5" component="div">
            Owner shipDoument:{getAssetID.OwnershipDocument}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Date Of Purchases:{getAssetID.DateOfPurchase}
        </Typography>
       
      </CardContent>
      <CardActions><NavLink to={`/tableassetedit/${getAssetID._id}`}>

      <Button size="small">Edit</Button>
      </NavLink> 
        
        <Button size="small" onClick={()=>assetdelet(getAssetID._id)} >Delete</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default TableAssetDetails