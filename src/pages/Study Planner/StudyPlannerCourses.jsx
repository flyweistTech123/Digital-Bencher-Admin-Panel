import React from 'react'
import HOC from '../../components/HOC/HOC'

import { GoArrowLeft } from "react-icons/go";
import { Link, useNavigate } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import Pagination from '../../components/Pagination/Pagination';


const StudyPlannerCourses = () => {
    const dummyData = [
        {
            name: "Sandeep Kanth",
            goalexam: "SSC Exam",
            coursedetails: "Details can be displayed here",
            daysleftforexam: "69",
            studentId: "DBT_e86de136",
        },
        {
            name: "Sandeep Kanth",
            goalexam: "SSC Exam",
            coursedetails: "Details can be displayed here",
            daysleftforexam: "69",
            studentId: "DBT_e86de136",
        },
        {
            name: "Sandeep Kanth",
            goalexam: "SSC Exam",
            coursedetails: "Details can be displayed here",
            daysleftforexam: "69",
            studentId: "DBT_e86de136",
        },
        {
            name: "Sandeep Kanth",
            goalexam: "SSC Exam",
            coursedetails: "Details can be displayed here",
            daysleftforexam: "69",
            studentId: "DBT_e86de136",
        },
        {
            name: "Sandeep Kanth",
            goalexam: "SSC Exam",
            coursedetails: "Details can be displayed here",
            daysleftforexam: "69",
            studentId: "DBT_e86de136",
        },
        {
            name: "Sandeep Kanth",
            goalexam: "SSC Exam",
            coursedetails: "Details can be displayed here",
            daysleftforexam: "69",
            studentId: "DBT_e86de136",
        },
        {
            name: "Sandeep Kanth",
            goalexam: "SSC Exam",
            coursedetails: "Details can be displayed here",
            daysleftforexam: "69",
            studentId: "DBT_e86de136",
        },
        {
            name: "Sandeep Kanth",
            goalexam: "SSC Exam",
            coursedetails: "Details can be displayed here",
            daysleftforexam: "69",
            studentId: "DBT_e86de136",
        },
        {
            name: "Sandeep Kanth",
            goalexam: "SSC Exam",
            coursedetails: "Details can be displayed here",
            daysleftforexam: "69",
            studentId: "DBT_e86de136",
        },
        {
            name: "Sandeep Kanth",
            goalexam: "SSC Exam",
            coursedetails: "Details can be displayed here",
            daysleftforexam: "69",
            studentId: "DBT_e86de136",
        },
    ];

    const navigate = useNavigate();

    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Study Planner Courses</h6>
                    <p>
                        <GoArrowLeft
                            size={25}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(-1)}
                        />
                        Study Planner /<span> Study Planner Courses</span>
                    </p>
                </div>
                <div className='handwrittennotes-list'>
                    <div className='handwrittennotes-list-header'>
                        <Link to={'/study-planner/study-plannercourses/add-study-plannercourses'} className='link'>
                            <div className='handwrittennotes-add'>
                                <FaPlus />
                                <h6>Add NEW Study Planner courses</h6>
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
                                    <th>Student</th>
                                    <th>Course Details</th>
                                    <th>Goal Exam</th>
                                    <th>Days left for Exam</th>
                                    <th>Student Id</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dummyData.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.name}</td>
                                        <td>{data.coursedetails}</td>
                                        <td>{data.goalexam}</td>
                                        <td>{data.daysleftforexam}</td>
                                        <td>{data.studentId}</td>
                                        <td>
                                            <div className="handwrittennotes-table-icons">
                                                <div className="handwrittennotes-icon" onClick={() => navigate('/students/student-profile')}>
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

export default HOC(StudyPlannerCourses)