export default (student = [], action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...student, userinfo: action.payload };
    case "FETCH_ALL":
      return action.payload;
    case "FETCHUSER":
      return   action.payload ;
      case "NEW":
        return [...student, action.payload];
    default:
      return student;
  }
};
