export default (state = {}, action) => {
  const { postTitle, postBody, timeStamp, postScore, id } = action;
  switch (action.type) {
    case "ADD_POST":
      return Object.assign({}, state, {
        [id]: {
          postTitle: postTitle,
          postBody: postBody,
          timeStamp: timeStamp,
          postScore: postScore,
          id: id
        }
      });
    default:
      return state;
  }
}