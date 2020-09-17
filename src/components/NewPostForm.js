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

return (
    <React.Fragment>
      <form onSubmit={handleNewPostFormSubmission}>
        <input
          type="text"
          name="postTitle"
          placeholder="Post Title"
        />

        {/* <input
          type="text"
          name="postScore"
          placeholder="Post score"
        /> */}
        
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