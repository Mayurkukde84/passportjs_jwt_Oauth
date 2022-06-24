import React,{ useState,useEffect} from 'react';

import { Button } from '@mui/material';
import { useParams } from "react-router";

const Comment = () => {
  const { id } = useParams(' ');
  const [commentData, setCommentData] = useState(null);
  const [inpComments, setComments] = useState({
      Comments: ' ',
  });

  useEffect(() => {
      fetchCommentData();
  }, []);

  function setComment(e) {
      const { name, value } = e.target;
      setComments(preval => {
          return {
              ...preval,
              [name]: value,
          };
      });
  }

  function addComments(e) {
      e.preventDefault();
      const { Comments } = inpComments;
      fetch(`http://localhost:5000/tableasset/${id}/comment`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
          },
          body: JSON.stringify({
              Comments,
          }),
      })
          .then(async res => {
              const data = await res.json();
              if (!res.ok) {
                  throw new Error(
                      res.statusText | 'Oops! Something went wrong'
                  );
              }
              return data;
          })
          .then(data => {
              // @TODO - add new comment to commentData
          })
          .catch(err => console.log(err.message));
  }

  function fetchCommentData() {
      fetch(`/tableasset/${id}/comment/${id}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      })
          .then(async res => {
              const data = await res.json();
              if (!res.ok) {
                  throw new Error(
                      res.statusText | 'Oops! Something went wrong'
                  );
              }
              return data;
          })
          .then(setCommentData)
          .catch(err => console.log(err.message));
  }

  return (
      <>
          <h4>Here is {commentData?.ProjectName} Employee Details</h4>
          <div className='col form-inline p-2'>
              <label for='exampleInputEmail1'>Comments</label>
              <input
                  type='text'
                  class='form-control'
                  required='required'
                  name='Comments'
                  placeholder='Enter a ID'
                  value={inpComments.Comments}
                  onChange={setComment}
              />
          </div>

          <Button onClick={addComments}>Submit</Button>
          {commentData?.Comments.map(comment => {
              return (
                  <div>
                      <p>{comment}</p>{' '}
                  </div>
              );
          })}
      </>
  );
};

export default Comment;