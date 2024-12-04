/** @format */

import AboutExam from "../pages/Dashboard/AboutExam.jsx";
import AddHandwrittenNotes from "../pages/Dashboard/AddHandwrittenNotes.jsx";
import AddSkill from "../pages/Dashboard/AddSkill.jsx";
import CommunityPage from "../pages/Dashboard/CommunityPage.jsx";
import CoursePageContent from "../pages/Dashboard/CoursePageContent.jsx";
import CurrentAffairs from "../pages/Dashboard/CurrentAffairs.jsx";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import HandwrittenNotes from "../pages/Dashboard/HandwrittenNotes.jsx";
import HomePageContent from "../pages/Dashboard/HomePageContent.jsx";
import SkillsPage from "../pages/Dashboard/SkillsPage.jsx";
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
    {
        route: "/dashboard/handwritten-notes/add-handwritten-notes",
        component: <AddHandwrittenNotes />,
    },
    {
        route: "/dashboard/community",
        component: <CommunityPage />,
    },
    {
        route: "/dashboard/skills",
        component: <SkillsPage />,
    },
    {
        route: "/dashboard/skills/add-skill",
        component: <AddSkill />,
    },
    {
        route: "/dashboard/current-affairs",
        component: <CurrentAffairs />,
    },
];

export default allRoutes;