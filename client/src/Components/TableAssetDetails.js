import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { NavLink } from 'react-router-dom';
const TableAssetDetails = () => {
  return (
    <div className='center p-5 mt-3'>
    <Card sx={{ maxWidth: 345 }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          vendor table details
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Item Name :  
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Descripation: 
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Type:
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Mode: 
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          vendor:
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Receipt
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Price
        </Typography>
       
        <Typography gutterBottom variant="h5" component="div">
          Cost Code:
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Project Name:
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          OwnedBy:
        </Typography>
       
        <Typography gutterBottom variant="h5" component="div">
            Owner shipDoument:
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Date Of Purchases:
        </Typography>
       
      </CardContent>
      <CardActions><NavLink to={"/tableassetedit"}>
      <Button size="small">Edit</Button>
      </NavLink> 
       
        <Button size="small" >Delete</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default TableAssetDetails