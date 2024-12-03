/** @format */

import AboutExam from "../pages/Dashboard/AboutExam.jsx";
import CoursePageContent from "../pages/Dashboard/CoursePageContent.jsx";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import HandwrittenNotes from "../pages/Dashboard/HandwrittenNotes.jsx";
import HomePageContent from "../pages/Dashboard/HomePageContent.jsx";
import StudyPlannerAI from "../pages/Dashboard/StudyPlannerAI.jsx";
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
    {
        route: "/dashboard",
        component: <Dashboard />,
    },
    {
        route: "/dashboard/homepage-content",
        component: <HomePageContent />,
    },
    {
        route: "/dashboard/studyplanner-AI",
        component: <StudyPlannerAI />,
    },
    {
        route: "/dashboard/about-exam",
        component: <AboutExam />,
    },
    {
        route: "/dashboard/course-page",
        component: <CoursePageContent />,
    },
    {
        route: "/dashboard/handwritten-notes",
        component: <HandwrittenNotes />,
    },
];

export default allRoutes;