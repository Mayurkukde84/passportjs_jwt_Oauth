import React,{ useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import { Button } from '@mui/material';
import { useParams } from "react-router";

const Comment = () => {
  // console.log(post)
  const {id} = useParams(" ")

  const [inpComments,setComments] = useState({
    Comments:" ",
  })

  const setComment = (e) =>{
    const {name,value} = e.target;
    console.log(value)
    setComments((preval)=>{
      return{
        ...preval,
        [name]:value,
      }
    })

  }

  const addcomments = async (e) => {
    e.preventDefault();

    const { Comments } = inpComments;

    const res = await fetch(`http://localhost:5000//tableasset/${id}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({
       Comments,
      }),
    });
    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      alert("error");
      console.log("error");
    } else {
      alert("data added");
      console.log("data aaded");
      
    }
  };






  return (
    <>
     <div className="col form-inline p-2">
                    <label for="exampleInputEmail1">ID</label>
                    <input
                      type="text"
                      class="form-control"
                      required="required"
                      name="Comments"
                      placeholder="Enter a ID"
                      value={inpComments.Comments}
                      onChange={setComment}
                    />
                  </div>
     
   
  
    <Button onClick={addcomments}>Submit</Button>


    </>
  
  )
}

export default Comment
