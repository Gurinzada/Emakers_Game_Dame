import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import PrivateRoute from "./components/PrivateRouter";


const Router = createBrowserRouter([
    {
        path:"/",
        element: <RegisterPage/>
    },{
        path:"/home/:UserID",
        element: <PrivateRoute><HomePage/></PrivateRoute>
    }
])


export default Router