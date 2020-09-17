import React from "react";
import PropTypes from "prop-types";

function PostDetail(props){
  const { post } = props;

  return (
    <React.Fragment>
      <h1>Post Detail</h1>
      <h3>title: {post.postTitle}</h3>
      <h3>post: {post.postBody}</h3>
      <h3>time: {post.timeStamp}</h3>
      <h3>post-score: {post.postScore}</h3>
      <h3>id: {post.id}</h3>

      <button onClick={ () => props.onClickingIncrement({
        postTitle: post.postTitle,
        postBody: post.postBody,
        timeStamp: post.timeStamp,
        postScore: post.postScore,
        id: post.id
      }) }>upvote</button>
      <button onClick={ () => props.onClickingDecrement({
        postTitle: post.postTitle,
        postBody: post.postBody,
        timeStamp: post.timeStamp,
        postScore: post.postScore,
        id: post.id
      }) }>downvote</button>

      {/* Never forget. */}
    
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingIncrement: PropTypes.func,
  onClickingDecrement: PropTypes.func
}

export default PostDetail;