import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Sidebar.css';


import { FiBookOpen } from "react-icons/fi";
import { CgNotes } from "react-icons/cg";
import { BsChatLeftDots } from "react-icons/bs";
import { BiNetworkChart } from "react-icons/bi";
import { FaRegListAlt, FaRegCalendar } from "react-icons/fa";
import { RiDashboardFill, RiVideoLine, RiLogoutCircleLine } from "react-icons/ri";
import { PiVideoFill, PiExamBold, PiStudentBold } from "react-icons/pi";
import { MdOutlineQuiz, MdGroups2 } from "react-icons/md";
import { FaRegMoneyBill1, FaRegStar, FaUserTie } from "react-icons/fa6";

import logoImg from "../../assest/imglogo.png";


const Sidebar = () => {
    const navigate = useNavigate();

    const sidebarItems = [
        {
            name: "Dashboard",
            icon: <RiDashboardFill />,
            link: "/dashboard",
        },
        {
            name: "Groups",
            icon: <MdGroups2 />,
            link: "/userslists",
        },
        {
            name: "Students",
            icon: <PiStudentBold />,
            link: "/students",
        },
        {
            name: "Employees",
            icon: <FaUserTie />,
            link: "/employees",
        },
        {
            name: "Educator",
            icon: <FaUserTie />,
            link: "/educator",
        },
        {
            name: "Concept Mapping",
            icon: <BiNetworkChart />,
            link: "/wallet-management",
        },
        {
            name: "Goal Exams",
            icon: <PiExamBold />,
            link: "/goalexams",
        },
        {
            name: "Subjects",
            icon: <FaRegListAlt />,
            link: "/subjects",
        },
        {
            name: "Chapters",
            icon: <FaRegCalendar />,
            link: "/chapters",
        },
        {
            name: "Topics",
            icon: <FiBookOpen />,
            link: "/topics",
        },
        {
            name: "Vods",
            icon: <RiVideoLine />,
            link: "/vods",
        },
        {
            name: "Course Type",
            icon: <CgNotes />,
            link: "/notifications",
        },
        {
            name: "Payment",
            icon: <FaRegMoneyBill1 />,
            link: "/policy-setting",
        },
        {
            name: "Quiz app",
            icon: <MdOutlineQuiz />,
            link: "/live-chat",
        },
        {
            name: "Student area",
            icon: <BsChatLeftDots />,
            link: "/help-support",
        },
        {
            name: "Study Planner",
            icon: <CgNotes />,
            link: "/subadmin",
        },
        {
            name: "Video Player",
            icon: <PiVideoFill />,
            link: "/subadmin",
        },
        {
            name: "Ratings",
            icon: <FaRegStar />,
            link: "/subadmin",
        },
    ];


    const logout = () => {
        navigate("/");
    };

    return (
        <div className="sidebarcontainer">
            <div className="side-logo">
                <img src={logoImg} alt="Digital Benchers Logo" className="logo-img" />
                <h6 className="logo-title">Digital Benchers</h6>
            </div>
            <div className='sideitems'>
                {sidebarItems.map((item) => (
                    <NavLink
                        key={item.link}
                        to={item.link}
                        className={({ isActive }) =>
                            isActive ? 'sideitemactive' : 'sideitem'
                        }
                    >
                        {item.icon}
                        <p>{item.name}</p>
                    </NavLink>
                ))}
            </div>
            <div className="sidelogoutbtn" onClick={logout}>
                <RiLogoutCircleLine />
                <p>Logout</p>
            </div>
        </div>
    );
};

export default Sidebar;