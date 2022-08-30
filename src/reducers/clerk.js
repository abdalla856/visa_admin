export default (clerk = [], action) => {
    switch (action.type) {
      case "LOGIN":
        return { ...clerk, userinfo: action.payload };
      case "FETCH_C":
        return action.payload;
      
      default:
        return clerk;
    }
  };
  