import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';


function NewPostForm(props){

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      postTitle: event.target.postTitle.value,
      postBody: event.target.postBody.value,
      timeStamp: Date(),
      postScore: 0,
      id: v4()
    });
  }

let [month, date, year]    = ( new Date() ).toLocaleDateString().split("/")
console.log(month, date, year);

let [hour, minute, second] = ( new Date() ).toLocaleTimeString().slice(0,7).split(":")
console.log(hour, minute, second); 
return (
    <React.Fragment>
      <form onSubmit={handleNewPostFormSubmission}>
        <input
          type="text"
          name="postTitle"
          placeholder="Post Title"
        />
        <textarea
          name="postBody"
          placeholder="Enter Text Here"
        />
        <button type="submit">Submit Post</button>
      </form>
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
}

export default NewPostForm;