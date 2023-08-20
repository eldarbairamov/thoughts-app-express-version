import { createBrowserRouter, Navigate } from "react-router-dom";
import { LoginPage } from "../page/Login-Page/Login-Page.tsx";
import { Error } from "../component/Error/Error.tsx";
import { RegistrationPage } from "../page/Registration-Page/Registration-Page.tsx";

export const UnauthorizedRouter = createBrowserRouter([
   {
      path: '/',
      element: <Navigate to={'login'}/>,
      errorElement: <Error/>
   },
   {
      path: 'login',
      element: <LoginPage/>,
      errorElement: <Error/>
   },
   {
      path: 'registration',
      element: <RegistrationPage/>,
      errorElement: <Error/>
   },
   {
      path: '*',
      element: <Navigate to={'/'}/>
   }
])