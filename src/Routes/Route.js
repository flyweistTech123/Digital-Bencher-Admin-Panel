/** @format */

import AboutUs from "../pages/About Us/AboutUs.jsx";
import Careers from "../pages/Careers/Careers.jsx";
import Chapters from "../pages/Chapters/Chapters.jsx";
import AddCourses from "../pages/Courses/AddCourses.jsx";
import Courses from "../pages/Courses/Courses.jsx";
import AboutExam from "../pages/Dashboard/AboutExam.jsx";
import AddHandwrittenNotes from "../pages/Dashboard/AddHandwrittenNotes.jsx";
import AddSkill from "../pages/Dashboard/AddSkill.jsx";
import CommunityPage from "../pages/Dashboard/CommunityPage.jsx";
import CoursePageContent from "../pages/Dashboard/CoursePageContent.jsx";
import CurrentAffairs from "../pages/Dashboard/CurrentAffairs.jsx";
import DailyNews from "../pages/Dashboard/DailyNews.jsx";
import DailyQuiz from "../pages/Dashboard/DailyQuiz.jsx";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import EditorialAnalysis from "../pages/Dashboard/EditorialAnalysis.jsx";
import HandwrittenNotes from "../pages/Dashboard/HandwrittenNotes.jsx";
import HomePageContent from "../pages/Dashboard/HomePageContent.jsx";
import LandingPage from "../pages/Dashboard/LandingPage.jsx";
import SkillsPage from "../pages/Dashboard/SkillsPage.jsx";
import StudyPlannerAI from "../pages/Dashboard/StudyPlannerAI.jsx";
import TargetCurrentAffairs from "../pages/Dashboard/TargetCurrentAffairs.jsx";
import YoutubeVideos from "../pages/Dashboard/YoutubeVideos.jsx";
import Educator from "../pages/Educator/Educator.jsx";
import Employees from "../pages/Employees/Employees.jsx";
import GoalExams from "../pages/Goal Exams/GoalExams.jsx";
import ForgotPassword from "../pages/Login/ForgotPassword.jsx";
import Login from "../pages/Login/Login.jsx";
import OTP from "../pages/Login/OTP.jsx";
import Setpassword from "../pages/Login/Setpassword.jsx";
import PrivacyPolicy from "../pages/Privacy Policy/PrivacyPolicy.jsx";
import Quizapp from "../pages/Quiz app/Quizapp.jsx";
import Ratings from "../pages/Ratings/Ratings.jsx";
import Studentarea from "../pages/Student area/Studentarea.jsx";
import Students from "../pages/Students/Students.jsx";
import StudyPlanner from "../pages/Study Planner/StudyPlanner.jsx";
import Subjects from "../pages/Subjects/Subjects.jsx";
import TermsandConditions from "../pages/Terms & Conditions/TermsandConditions.jsx";
import Topics from "../pages/Topics/Topics.jsx";
import VideoPlayer from "../pages/Video Player/VideoPlayer.jsx";
import Vods from "../pages/Vods/Vods.jsx";



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
    {
        route: "/students",
        component: <Students />,
    },
    {
        route: "/employees",
        component: <Employees />,
    },
    {
        route: "/goalexams",
        component: <GoalExams />,
    },
    {
        route: "/educator",
        component: <Educator />,
    },
    {
        route: "/subjects",
        component: <Subjects />,
    },
    {
        route: "/chapters",
        component: <Chapters />,
    },
    {
        route: "/topics",
        component: <Topics />,
    },
    {
        route: "/vods",
        component: <Vods />,
    },
    {
        route: "/ratings",
        component: <Ratings />,
    },
    {
        route: "/quizapp",
        component: <Quizapp />,
    },
    {
        route: "/student-area",
        component: <Studentarea />,
    },
    {
        route: "/study-planner",
        component: <StudyPlanner />,
    },
    {
        route: "/video-player",
        component: <VideoPlayer />,
    },
    {
        route: "/dashboard/course-page/courses",
        component: <Courses />,
    },
    {
        route: "/dashboard/course-page/courses/add-course",
        component: <AddCourses />,
    },
    {
        route: "/dashboard/current-affairs/daily-news",
        component: <DailyNews />,
    },
    {
        route: "/dashboard/current-affairs/editorial-analysis",
        component: <EditorialAnalysis />,
    },
    {
        route: "/dashboard/current-affairs/daily-quiz",
        component: <DailyQuiz />,
    },
    {
        route: "/dashboard/current-affairs/target-current-affairs",
        component: <TargetCurrentAffairs />,
    },
    {
        route: "/dashboard/current-affairs/youtube-videos",
        component: <YoutubeVideos />,
    },
    {
        route: "/dashboard/landing-page",
        component: <LandingPage />,
    },
    {
        route: "/dashboard/landing-page/aboutus",
        component: <AboutUs />,
    },
    {
        route: "/dashboard/landing-page/termsandconditions",
        component: <TermsandConditions />,
    },
    {
        route: "/dashboard/landing-page/privacy-policy",
        component: <PrivacyPolicy />,
    },
    {
        route: "/dashboard/landing-page/careers",
        component: <Careers />,
    },
];

export default allRoutes;