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


const ActivityLogs = () => {
    const dummyData = [
        {
            name: "Sandeep Kanth",
            activitytype: "Activity Type Name",
            details: "Details can be displayed here",
            timestamp: "9:33 AM",
            activityID: "DBT_e86de136",
        },
        {
            name: "Sandeep Kanth",
            activitytype: "Activity Type Name",
            details: "Details can be displayed here",
            timestamp: "9:33 AM",
            activityID: "DBT_e86de136",
        },
        {
            name: "Sandeep Kanth",
            activitytype: "Activity Type Name",
            details: "Details can be displayed here",
            timestamp: "9:33 AM",
            activityID: "DBT_e86de136",
        },
        {
            name: "Sandeep Kanth",
            activitytype: "Activity Type Name",
            details: "Details can be displayed here",
            timestamp: "9:33 AM",
            activityID: "DBT_e86de136",
        },
        {
            name: "Sandeep Kanth",
            activitytype: "Activity Type Name",
            details: "Details can be displayed here",
            timestamp: "9:33 AM",
            activityID: "DBT_e86de136",
        },
        {
            name: "Sandeep Kanth",
            activitytype: "Activity Type Name",
            details: "Details can be displayed here",
            timestamp: "9:33 AM",
            activityID: "DBT_e86de136",
        },
        {
            name: "Sandeep Kanth",
            activitytype: "Activity Type Name",
            details: "Details can be displayed here",
            timestamp: "9:33 AM",
            activityID: "DBT_e86de136",
        },
        {
            name: "Sandeep Kanth",
            activitytype: "Activity Type Name",
            details: "Details can be displayed here",
            timestamp: "9:33 AM",
            activityID: "DBT_e86de136",
        },
        {
            name: "Sandeep Kanth",
            activitytype: "Activity Type Name",
            details: "Details can be displayed here",
            timestamp: "9:33 AM",
            activityID: "DBT_e86de136",
        },
        {
            name: "Sandeep Kanth",
            activitytype: "Activity Type Name",
            details: "Details can be displayed here",
            timestamp: "9:33 AM",
            activityID: "DBT_e86de136",
        },
    ];

    const navigate = useNavigate();

    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Activity Logs</h6>
                    <p>
                        <GoArrowLeft
                            size={25}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(-1)}
                        />
                        Student area /<span> Activity Logs</span>
                    </p>
                </div>
                <div className='handwrittennotes-list'>
                    <div className='handwrittennotes-list-header'>
                        <Link to={'/dashboard/skills/add-skill'} className='link'>
                            <div className='handwrittennotes-add'>
                                <FaPlus />
                                <h6>Add NEW Activity log</h6>
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
                                    <th>Activity Type</th>
                                    <th>Details</th>
                                    <th>Time Stamp</th>
                                    <th>Activity ID</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dummyData.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.name}</td>
                                        <td>{data.activitytype}</td>
                                        <td>{data.details}</td>
                                        <td>{data.timestamp}</td>
                                        <td>{data.activityID}</td>
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

export default HOC(ActivityLogs)