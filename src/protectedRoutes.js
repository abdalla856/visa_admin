import { Navigate, Outlet } from "react-router-dom";

const useData = () => {
  let signedIn = false;
  if (JSON.parse(localStorage.getItem("userData"))) {
    signedIn = true;
  }
  return signedIn;
};

const ProtectedRoutes = () => {
   const signedIn  = useData();
   
   // signedIn- outlet >> routes 
   // 
   return signedIn ? <Outlet /> : <Navigate to='/' />
}


export default ProtectedRoutes;