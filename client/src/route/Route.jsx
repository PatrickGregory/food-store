import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Login from "../auth/Login";
import Register from "../auth/Register";
import ProtectedRoute from '../auth/ProtectedRoute';
import VerifyOtp from "../auth/verifyOtp";


const foodRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <ProtectedRoute><Home/></ProtectedRoute>,
            },
            {
                path: "/login",
                element: <Login/>,
            },
            {
                path: "/register",
                element: <Register/>,
            },
            {
                path: "/verifyOtp",
                element: <VerifyOtp/>,
            },
        ]
    },
]);

export default foodRouter;