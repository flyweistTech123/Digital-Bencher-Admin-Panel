/** @format */

import ForgotPassword from "../pages/Login/ForgotPassword.jsx";
import Login from "../pages/Login/Login.jsx";
import OTP from "../pages/Login/OTP.jsx";
import Setpassword from "../pages/Login/Setpassword.jsx";



const allRoutes = [
    {
        route: "/",
        component: <Login />,
    },
    {
        route: "/forgot-password",
        component: <ForgotPassword />,
    },
    {
        route: "/forgot-password/otp",
        component: <OTP />,
    },
    {
        route: "/forgot-password/otp/set-password",
        component: <Setpassword />,
    },
];

export default allRoutes;