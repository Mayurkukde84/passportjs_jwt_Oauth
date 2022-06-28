import React, { useState, useEffect, useContext } from "react";
import "./comment.css";
import { useParams, useHistory } from "react-router";
import { AuthContext } from "../Context/AuthContext";
const Comment = () => {
  const history = useHistory("");
  const { id } = useParams(" ");
  const [commentData, setCommentData] = useState(null);
  const { user } = useContext(AuthContext);
  const user2 = user.username;
  console.log(user2);
  const [inpComments, setComments] = useState({
    Comments: " ",
    UserComments: user2,
  });

  useEffect(() => {
    fetchCommentData();
  }, []);

  function setComment(e) {
    const { name, value } = e.target;
    setComments((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  }

  function addComments(e) {
    e.preventDefault();
    const { Comments, UserComments } = inpComments;
    fetch(`http://localhost:5000/tableasset/${id}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Comments,
        UserComments,
      }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          throw new Error(res.statusText | "Oops! Something went wrong");
        }
        return data;
      })
      .then((data) => {
        history.go(`/tableassetdetails/${id}`);
        // @TODO - add new comment to commentData
      })
      .catch((err) => console.log(err.message));
  }

  function fetchCommentData() {
    fetch(`/tableasset/${id}/comment/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          throw new Error(res.statusText | "Oops! Something went wrong");
        }
        return data;
      })
      .then(setCommentData)
      .catch((err) => console.log(err.message));
  }

  return (
    <div className="container">
      <div className="col form-inline p-1 w-50 m-2">
        <label for="exampleInputEmail1">
          <h3>Comments</h3>
        </label>
        <textarea
          type="text"
          class="form-control"
          required="required"
          name="Comments"
          placeholder="Enter a ID"
          value={inpComments.Comments}
          onChange={setComment}
        />
      </div>
      <div className="col form-inline  w-50 m-3">
        <input
          type="hidden"
          class="form-control"
          required="required"
          name="UserComments"
          placeholder="Enter a ID"
          value={inpComments.UserName}
          onChange={setComment}
        />
      </div>

      <button onClick={addComments} className="btn btn-primary ">
        Submit
      </button>
      <div className="comment-user">
        <div className="user">
          {/* {commentData?.UserComments.map((user) => {
            return (
              <div class="user-box">
                <p>{user} : </p>
              </div>
            );
          })}
        </div>
        <div className="comment">
          {commentData?.Comments.map((comment) => {
            return (
              <div className="comment-box">
                <p>{comment}</p>
              </div>
            );
          })} */}

          <div className="comments">
            {commentData?.Comments.map((comment, index) => {
              return (
                <>
                <div className="comment-content">{comment}</div>
                 <div className="user"><span>{commentData.UserComments[index]}</span></div> 
                  
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
