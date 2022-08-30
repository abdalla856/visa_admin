import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./view/dashboard/dashboard";
import StudentTable from "./view/students/students_table/table";
import AddStudent from "./view/students/add_new/add_new";
import { useAuth } from "./shared/hooks/auth-hook";
import { authCotext } from "./shared/context/auth-context";

import UpdateStudent from "./view/students/update_students/update_student";
import ClerkTable from "./view/clerks/clerks_table/table";
import Login from "./view/Login/Login";
import AddClerk from "./view/clerks/add_new/add_new";
import UpdateClerk from "./view/clerks/update_clerks/update_clerks";
import ProfilePage from "./view/students/student_info/ProfilePage";
import AppTable from "./view/Applications/apps_table/table";
import ProtectedRoutes from "./protectedRoutes";
function App() {
  const { login, logout, userId } = useAuth();
  let tokenUser = false;
  let typeUser = "";
  if (JSON.parse(localStorage.getItem("userData"))) {
    const { token, type } = JSON.parse(localStorage.getItem("userData"));
    tokenUser = token;
    typeUser = type;
  }

  // let routes;


  return (
    <authCotext.Provider
      value={{
        isLoggedIn: !!tokenUser || !!userId,
        userId: userId,
        token: tokenUser,
        login: login,
        logout: logout,
      }}
    >
      <main>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<StudentTable />} />
        <Route path="/add_student" element={<AddStudent />} />
        <Route path="/add_clerk" element={<AddClerk />} />
        <Route path="/update_student/:id" element={<UpdateStudent />} />
        <Route path="/update_clerk/:id" element={<UpdateClerk />} />
        <Route path="/clerks" element={<ClerkTable />} />
        <Route path="/st_info/:id" element={<ProfilePage />} />
        <Route path="/apps" element={<AppTable />} />
        <Route path="*" element={<Dashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>;

      </main>
 </authCotext.Provider> 
  )
}

export default App;
