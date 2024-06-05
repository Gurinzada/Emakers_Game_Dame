import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import PrivateRoute from "./components/PrivateRouter";
import LoginPage from "./pages/LoginPage";


const Router = createBrowserRouter([
    {
        path:"/",
        element: <RegisterPage/>
    },{
        path:"/home/:UserID",
        element: <PrivateRoute><HomePage/></PrivateRoute>
    },{
        path: "/login",
        element:<LoginPage/>
    }
])


export default Router