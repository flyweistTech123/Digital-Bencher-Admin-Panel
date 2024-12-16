/** @format */

import AboutUs from "../pages/About Us/AboutUs.jsx";
import Careers from "../pages/Careers/Careers.jsx";
import AddChapter from "../pages/Chapters/AddChapter.jsx";
import Chapters from "../pages/Chapters/Chapters.jsx";
import AddConceptMapping from "../pages/Concept Mapping/AddConceptMapping.jsx";
import ConceptMapping from "../pages/Concept Mapping/ConceptMapping.jsx";
import CourseType from "../pages/Course Type/CourseType.jsx";
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
import AddGoalExam from "../pages/Goal Exams/AddGoalExam.jsx";
import GoalExams from "../pages/Goal Exams/GoalExams.jsx";
import AddGroup from "../pages/Groups/AddGroup.jsx";
import Groups from "../pages/Groups/Groups.jsx";
import ForgotPassword from "../pages/Login/ForgotPassword.jsx";
import Login from "../pages/Login/Login.jsx";
import OTP from "../pages/Login/OTP.jsx";
import Setpassword from "../pages/Login/Setpassword.jsx";
import Profile from "../pages/MyProfile/Profile.jsx";
import Payments from "../pages/Payments/Payments.jsx";
import PrivacyPolicy from "../pages/Privacy Policy/PrivacyPolicy.jsx";
import PracticeQuestions from "../pages/Quiz app/PracticeQuestions.jsx";
import PYQsvideos from "../pages/Quiz app/PYQsvideos.jsx";
import Quizapp from "../pages/Quiz app/Quizapp.jsx";
import TestSeries from "../pages/Quiz app/TestSeries.jsx";
import Ratings from "../pages/Ratings/Ratings.jsx";
import ActivityLogs from "../pages/Student area/ActivityLogs.jsx";
import AddPolls from "../pages/Student area/AddPolls.jsx";
import AddPurchasedItems from "../pages/Student area/AddPurchasedItems.jsx";
import AddRedemptions from "../pages/Student area/AddRedemptions.jsx";
import AddUserCarts from "../pages/Student area/AddUserCarts.jsx";
import AddUserWishlist from "../pages/Student area/AddUserWishlist.jsx";
import PollOptions from "../pages/Student area/PollOptions.jsx";
import Polls from "../pages/Student area/Polls.jsx";
import PurchasedItems from "../pages/Student area/PurchasedItems.jsx";
import Redemptions from "../pages/Student area/Redemptions.jsx";
import Studentarea from "../pages/Student area/Studentarea.jsx";
import UserCarts from "../pages/Student area/UserCarts.jsx";
import UserWishlist from "../pages/Student area/UserWishlist.jsx";
import StudentProfile from "../pages/Students/StudentProfile.jsx";
import Students from "../pages/Students/Students.jsx";
import AddStudyPlannerCourses from "../pages/Study Planner/AddStudyPlannerCourses.jsx";
import StudentProgress from "../pages/Study Planner/StudentProgress.jsx";
import StudentStudyPlans from "../pages/Study Planner/StudentStudyPlans.jsx";
import StudyPlanner from "../pages/Study Planner/StudyPlanner.jsx";
import StudyPlannerCourses from "../pages/Study Planner/StudyPlannerCourses.jsx";
import AddSubject from "../pages/Subjects/AddSubject.jsx";
import Subjects from "../pages/Subjects/Subjects.jsx";
import TermsandConditions from "../pages/Terms & Conditions/TermsandConditions.jsx";
import AddTopic from "../pages/Topics/AddTopic.jsx";
import Topics from "../pages/Topics/Topics.jsx";
import AddVideoComments from "../pages/Video Player/AddVideoComments.jsx";
import AddVideoHistory from "../pages/Video Player/AddVideoHistory.jsx";
import VideoComments from "../pages/Video Player/VideoComments.jsx";
import VideoHistory from "../pages/Video Player/VideoHistory.jsx";
import VideoPlayer from "../pages/Video Player/VideoPlayer.jsx";
import AddVod from "../pages/Vods/AddVod.jsx";
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
    {
        route: "/groups",
        component: <Groups />,
    },
    {
        route: "/groups/add-group",
        component: <AddGroup />,
    },
    {
        route: "/students/student-profile",
        component: <StudentProfile />,
    },
    {
        route: "/goalexams/add-goalexam",
        component: <AddGoalExam />,
    },
    {
        route: "/subjects/add-subject",
        component: <AddSubject />,
    },
    {
        route: "/chapters/add-chapter",
        component: <AddChapter />,
    },
    {
        route: "/topics/add-topic",
        component: <AddTopic />,
    },
    {
        route: "/vods/add-vod",
        component: <AddVod />,
    },
    {
        route: "/course-type",
        component: <CourseType />,
    },
    {
        route: "/payments",
        component: <Payments />,
    },
    {
        route: "/quizapp/test-series",
        component: <TestSeries />,
    },
    {
        route: "/quizapp/practice-questions",
        component: <PracticeQuestions />,
    },
    {
        route: "/quizapp/pyqs-videos",
        component: <PYQsvideos />,
    },
    {
        route: "/student-area/activity-logs",
        component: <ActivityLogs />,
    },
    {
        route: "/student-area/poll-options",
        component: <PollOptions />,
    },
    {
        route: "/student-area/polls",
        component: <Polls />,
    },
    {
        route: "/student-area/purchased-items",
        component: <PurchasedItems />,
    },
    {
        route: "/student-area/redemptions",
        component: <Redemptions />,
    },
    {
        route: "/student-area/user-carts",
        component: <UserCarts />,
    },
    {
        route: "/student-area/user-wishlist",
        component: <UserWishlist />,
    },
    {
        route: "/student-area/polls/add-polls",
        component: <AddPolls />,
    },
    {
        route: "/student-area/purchased-items/add-purchaseditems",
        component: <AddPurchasedItems />,
    },
    {
        route: "/student-area/redemptions/add-redemptions",
        component: <AddRedemptions />,
    },
    {
        route: "/student-area/user-carts/add-user-carts",
        component: <AddUserCarts />,
    },
    {
        route: "/student-area/user-wishlist/add-/user-wishlist",
        component: <AddUserWishlist />,
    },
    {
        route: "/study-planner/student-progress",
        component: <StudentProgress />,
    },
    {
        route: "/study-planner/student-studyplans",
        component: <StudentStudyPlans />,
    },
    {
        route: "/study-planner/study-plannercourses",
        component: <StudyPlannerCourses />,
    },
    {
        route: "/study-planner/study-plannercourses/add-study-plannercourses",
        component: <AddStudyPlannerCourses />,
    },
    {
        route: "/video-player/video-comments",
        component: <VideoComments />,
    },
    {
        route: "/video-player/video-history",
        component: <VideoHistory />,
    },
    {
        route: "/video-player/video-history/add-video-history",
        component: <AddVideoHistory />,
    },
    {
        route: "/video-player/video-comments/add-video-comments",
        component: <AddVideoComments />,
    },
    {
        route: "/concept-mapping",
        component: <ConceptMapping />,
    },
    {
        route: "/concept-mapping/add-concept-mapping",
        component: <AddConceptMapping />,
    },
    {
        route: "/profile",
        component: <Profile />,
    },
];

export default allRoutes;