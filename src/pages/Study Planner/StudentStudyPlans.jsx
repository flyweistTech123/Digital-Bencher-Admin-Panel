import React from 'react'
import HOC from '../../components/HOC/HOC'

import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import Pagination from '../../components/Pagination/Pagination';


const StudentStudyPlans = () => {
    const dummyData = [
        {
            name: "Sandeep Kanth",
            week: "Week 1",
            coursedetails: "Details can be displayed here",
            progress: "Progress Percentage",
            studentId: "DBT_e86de136",
        },
        {
            name: "Sandeep Kanth",
            week: "Week 1",
            coursedetails: "Details can be displayed here",
            progress: "Progress Percentage",
            studentId: "DBT_e86de136",
        },
        {
            name: "Sandeep Kanth",
            week: "Week 1",
            coursedetails: "Details can be displayed here",
            progress: "Progress Percentage",
            studentId: "DBT_e86de136",
        },
        {
            name: "Sandeep Kanth",
            week: "Week 1",
            coursedetails: "Details can be displayed here",
            progress: "Progress Percentage",
            studentId: "DBT_e86de136",
        },
        {
            name: "Sandeep Kanth",
            week: "Week 1",
            coursedetails: "Details can be displayed here",
            progress: "Progress Percentage",
            studentId: "DBT_e86de136",
        },
        {
            name: "Sandeep Kanth",
            week: "Week 1",
            coursedetails: "Details can be displayed here",
            progress: "Progress Percentage",
            studentId: "DBT_e86de136",
        },
        {
            name: "Sandeep Kanth",
            week: "Week 1",
            coursedetails: "Details can be displayed here",
            progress: "Progress Percentage",
            studentId: "DBT_e86de136",
        },
        {
            name: "Sandeep Kanth",
            week: "Week 1",
            coursedetails: "Details can be displayed here",
            progress: "Progress Percentage",
            studentId: "DBT_e86de136",
        },
        {
            name: "Sandeep Kanth",
            week: "Week 1",
            coursedetails: "Details can be displayed here",
            progress: "Progress Percentage",
            studentId: "DBT_e86de136",
        },
        {
            name: "Sandeep Kanth",
            week: "Week 1",
            coursedetails: "Details can be displayed here",
            progress: "Progress Percentage",
            studentId: "DBT_e86de136",
        },
    ];

    const navigate = useNavigate();

    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Student Study Plans</h6>
                    <p>
                        <GoArrowLeft
                            size={25}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(-1)}
                        />
                        Study Planner /<span> Student Study Plans</span>
                    </p>
                </div>
                <div className='handwrittennotes-list'>
                    <div className='handwrittennotes-list-header'>
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
                                    <th>Week</th>
                                    <th>Course Details</th>
                                    <th>Progress</th>
                                    <th>Student Id</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dummyData.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.name}</td>
                                        <td>{data.week}</td>
                                        <td>{data.coursedetails}</td>
                                        <td>{data.progress}</td>
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

export default HOC(StudentStudyPlans)