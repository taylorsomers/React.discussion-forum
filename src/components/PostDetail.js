import React from "react";
import PropTypes from "prop-types";

function PostDetail(props){
  const { post } = props;

return (
<React.Fragment>
  <h1>Post Detail</h1>
  <h3>post: {post.postTitle}</h3>
  <h3>post: {post.postBody}</h3>
  <h3>post: {post.timeStamp}</h3>
  <h3>post: {post.postScore}</h3>

  <button onClick={ props.onClickingIncrement }>upvote</button>
  <button onClick={ props.onClickingDecrement }>downvote</button>
  
  </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingIncrement: PropTypes.func,
  onClickingDecrement: PropTypes.func
}

export default PostDetail;