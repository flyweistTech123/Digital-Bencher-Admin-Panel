import React from 'react'
import HOC from '../../components/HOC/HOC'



import { Link, useNavigate } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import Pagination from '../../components/Pagination/Pagination';


const Educator = () => {
    const dummyData = [
        {
            name: "Sandeep Kanth",
            goalexam:'SSC Exams - SSC CGL Tier-1',
            costperhour: "Rs. 450/-",
            numberofHrs: "24 Hrs",
            date: "23-10-2024, 9:30 am",
            studentId: "#STU123",
        },
        {
            name: "Sandeep Kanth",
            goalexam:'SSC Exams - SSC CGL Tier-1',
            costperhour: "Rs. 450/-",
            numberofHrs: "24 Hrs",
            date: "23-10-2024, 9:30 am",
            studentId: "#STU123",
        },
        {
            name: "Sandeep Kanth",
            goalexam:'SSC Exams - SSC CGL Tier-1',
            costperhour: "Rs. 450/-",
            numberofHrs: "24 Hrs",
            date: "23-10-2024, 9:30 am",
            studentId: "#STU123",
        },
        {
            name: "Sandeep Kanth",
            goalexam:'SSC Exams - SSC CGL Tier-1',
            costperhour: "Rs. 450/-",
            numberofHrs: "24 Hrs",
            date: "23-10-2024, 9:30 am",
            studentId: "#STU123",
        },
        {
            name: "Sandeep Kanth",
            goalexam:'SSC Exams - SSC CGL Tier-1',
            costperhour: "Rs. 450/-",
            numberofHrs: "24 Hrs",
            date: "23-10-2024, 9:30 am",
            studentId: "#STU123",
        },
        {
            name: "Sandeep Kanth",
            goalexam:'SSC Exams - SSC CGL Tier-1',
            costperhour: "Rs. 450/-",
            numberofHrs: "24 Hrs",
            date: "23-10-2024, 9:30 am",
            studentId: "#STU123",
        },
        {
            name: "Sandeep Kanth",
            goalexam:'SSC Exams - SSC CGL Tier-1',
            costperhour: "Rs. 450/-",
            numberofHrs: "24 Hrs",
            date: "23-10-2024, 9:30 am",
            studentId: "#STU123",
        },
        {
            name: "Sandeep Kanth",
            goalexam:'SSC Exams - SSC CGL Tier-1',
            costperhour: "Rs. 450/-",
            numberofHrs: "24 Hrs",
            date: "23-10-2024, 9:30 am",
            studentId: "#STU123",
        },
        {
            name: "Sandeep Kanth",
            goalexam:'SSC Exams - SSC CGL Tier-1',
            costperhour: "Rs. 450/-",
            numberofHrs: "24 Hrs",
            date: "23-10-2024, 9:30 am",
            studentId: "#STU123",
        },
        {
            name: "Sandeep Kanth",
            goalexam:'SSC Exams - SSC CGL Tier-1',
            costperhour: "Rs. 450/-",
            numberofHrs: "24 Hrs",
            date: "23-10-2024, 9:30 am",
            studentId: "#STU123",
        },
    ];

    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Educator</h6>
                </div>
                <div className='handwrittennotes-list'>
                    <div className='handwrittennotes-list-header'>
                        <Link to={'/dashboard/skills/add-skill'} className='link'>
                            <div className='handwrittennotes-add'>
                                <FaPlus />
                                <h6>Add NEW Educator</h6>
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
                                    <th>Subject</th>
                                    <th>Goal Exam</th>
                                    <th>Cost per Hour</th>
                                    <th>Number of Hrs</th>
                                    <th>Educator Id</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dummyData.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.name}</td>
                                        <td>{data.goalexam}</td>
                                        <td>{data.costperhour}</td>
                                        <td>{data.numberofHrs}</td>
                                        <td>{data.studentId}</td>
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

export default HOC(Educator)