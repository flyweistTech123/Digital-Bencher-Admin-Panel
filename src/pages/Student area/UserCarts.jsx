import React from 'react'
import HOC from '../../components/HOC/HOC'



import { Link, useNavigate } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { GoArrowLeft } from "react-icons/go";
import Pagination from '../../components/Pagination/Pagination';


const UserCarts = () => {
    const dummyData = [
        {
            student: "Sandeep Jay",
            studyplanner : "Study Planner Name",
            skill: "Skill Name",
            course: "Course Name",
            cartID: "DBT_e86de136",
        },
        {
            student: "Sandeep Jay",
            studyplanner : "Study Planner Name",
            skill: "Skill Name",
            course: "Course Name",
            cartID: "DBT_e86de136",
        },
        {
            student: "Sandeep Jay",
            studyplanner : "Study Planner Name",
            skill: "Skill Name",
            course: "Course Name",
            cartID: "DBT_e86de136",
        },
        {
            student: "Sandeep Jay",
            studyplanner : "Study Planner Name",
            skill: "Skill Name",
            course: "Course Name",
            cartID: "DBT_e86de136",
        },
        {
            student: "Sandeep Jay",
            studyplanner : "Study Planner Name",
            skill: "Skill Name",
            course: "Course Name",
            cartID: "DBT_e86de136",
        },
        {
            student: "Sandeep Jay",
            studyplanner : "Study Planner Name",
            skill: "Skill Name",
            course: "Course Name",
            cartID: "DBT_e86de136",
        },
        {
            student: "Sandeep Jay",
            studyplanner : "Study Planner Name",
            skill: "Skill Name",
            course: "Course Name",
            cartID: "DBT_e86de136",
        },
        {
            student: "Sandeep Jay",
            studyplanner : "Study Planner Name",
            skill: "Skill Name",
            course: "Course Name",
            cartID: "DBT_e86de136",
        },
        {
            student: "Sandeep Jay",
            studyplanner : "Study Planner Name",
            skill: "Skill Name",
            course: "Course Name",
            cartID: "DBT_e86de136",
        },
        {
            student: "Sandeep Jay",
            studyplanner : "Study Planner Name",
            skill: "Skill Name",
            course: "Course Name",
            cartID: "DBT_e86de136",
        },
    ];

    const navigate = useNavigate();

    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>User Carts</h6>
                    <p>
                        <GoArrowLeft
                            size={25}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(-1)}
                        />
                        Student area /<span>  User Carts</span>
                    </p>
                </div>
                <div className='handwrittennotes-list'>
                    <div className='handwrittennotes-list-header'>
                        <Link to={'/student-area/user-carts/add-user-carts'} className='link'>
                            <div className='handwrittennotes-add'>
                                <FaPlus />
                                <h6>Add NEW User carts</h6>
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
                                    <th>User</th>
                                    <th>Study Planner</th>
                                    <th>Skill</th>
                                    <th>Course</th>
                                    <th>Cart ID</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dummyData.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.student}</td>
                                        <td>{data.studyplanner}</td>
                                        <td>{data.skill}</td>
                                        <td>{data.course}</td>
                                        <td>{data.cartID}</td>
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

export default HOC(UserCarts)