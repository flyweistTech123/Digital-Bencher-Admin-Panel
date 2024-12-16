import React from 'react'
import HOC from '../../components/HOC/HOC'



import { Link, useNavigate } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { GoArrowLeft } from "react-icons/go";
import { IoMdStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

import Pagination from '../../components/Pagination/Pagination';


const Courses = () => {
    const navigate = useNavigate()

    const dummyData = [
        {
            coursename: "UI/UX Design",
            level: "CEFR Level -1 ",
            duration: "22 hrs",
            includecourse: "Includes 69 Courses",
            rating: 4,
        },
        {
            coursename: "UI/UX Design",
            level: "CEFR Level -1 ",
            duration: "22 hrs",
            includecourse: "Includes 69 Courses",
            rating: 4,
        },
        {
            coursename: "UI/UX Design",
            level: "CEFR Level -1 ",
            duration: "22 hrs",
            includecourse: "Includes 69 Courses",
            rating: 4,
        },
        {
            coursename: "UI/UX Design",
            level: "CEFR Level -1 ",
            duration: "22 hrs",
            includecourse: "Includes 69 Courses",
            rating: 4,
        },
        {
            coursename: "UI/UX Design",
            level: "CEFR Level -1 ",
            duration: "22 hrs",
            includecourse: "Includes 69 Courses",
            rating: 4,
        },
        {
            coursename: "UI/UX Design",
            level: "CEFR Level -1 ",
            duration: "22 hrs",
            includecourse: "Includes 69 Courses",
            rating: 4,
        },
        {
            coursename: "UI/UX Design",
            level: "CEFR Level -1 ",
            duration: "22 hrs",
            includecourse: "Includes 69 Courses",
            rating: 4,
        },
        {
            coursename: "UI/UX Design",
            level: "CEFR Level -1 ",
            duration: "22 hrs",
            includecourse: "Includes 69 Courses",
            rating: 4,
        },
        {
            coursename: "UI/UX Design",
            level: "CEFR Level -1 ",
            duration: "22 hrs",
            includecourse: "Includes 69 Courses",
            rating: 4,
        },
        {
            coursename: "UI/UX Design",
            level: "CEFR Level -1 ",
            duration: "22 hrs",
            includecourse: "Includes 69 Courses",
            rating: 4,
        },
    ];

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(i < rating ? <IoMdStar key={i} /> : <IoIosStarOutline key={i} />);
        }
        return <div className="table-star">{stars}</div>;
    };

    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Course Page Content</h6>
                    <p>
                        <GoArrowLeft
                            size={25}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(-1)}
                        />
                        Dashboard / Courses Page/<span> Course</span>
                    </p>
                </div>
                <div className='handwrittennotes-list'>
                    <div className='handwrittennotes-list-header'>
                        <Link to={'/dashboard/course-page/courses/add-course'} className='link'>
                            <div className='handwrittennotes-add'>
                                <FaPlus />
                                <h6>Add NEW Course</h6>
                            </div>
                        </Link>
                        <div className='handwrittennotes-search'>
                            <IoSearch color='#ADB5BD' />
                            <input type="search" placeholder='Search...' />
                        </div>
                        <div className='handwrittennotes-export'>
                            <span>Export CSV</span>
                        </div>
                    </div>
                    <div className='handwrittennotes-list-table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Course Name</th>
                                    <th>Level</th>
                                    <th>Duration ( Hrs )</th>
                                    <th>Include Course</th>
                                    <th>Rating</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dummyData.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.coursename}</td>
                                        <td>{data.level}</td>
                                        <td>{data.duration}</td>
                                        <td>{data.includecourse}</td>
                                        <td>{renderStars(data.rating)}</td>
                                        <td>
                                            <div className="handwrittennotes-table-icons">
                                                <div className="handwrittennotes-icon">
                                                    <MdArrowOutward />
                                                </div>
                                                <div className="handwrittennotes-icon">
                                                    <FiEdit3 />
                                                </div>
                                                <div className="handwrittennotes-icon">
                                                    <AiOutlineDelete />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Pagination />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(Courses)