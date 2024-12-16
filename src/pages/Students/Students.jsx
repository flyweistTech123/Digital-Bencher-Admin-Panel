import React from 'react'
import HOC from '../../components/HOC/HOC'



import { Link, useNavigate } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import Pagination from '../../components/Pagination/Pagination';


const Students = () => {
    const dummyData = [
        {
            name: "Sandeep Kanth",
            phone: "+91 9949693650",
            exam: "Bank Exam",
            date: "23-10-2024, 9:30 am",
            studentId: "#STU123",
        },
        {
            name: "Rahul Mehta",
            phone: "+91 9876543210",
            exam: "SSC Exam",
            date: "24-10-2024, 10:00 am",
            studentId: "#STU124",
        },
        {
            name: "Priya Sharma",
            phone: "+91 9123456789",
            exam: "Engineering Entrance",
            date: "25-10-2024, 11:00 am",
            studentId: "#STU125",
        },
        {
            name: "Ankit Singh",
            phone: "+91 9001234567",
            exam: "Medical Entrance",
            date: "26-10-2024, 8:30 am",
            studentId: "#STU126",
        },
        {
            name: "Neha Jain",
            phone: "+91 9556677880",
            exam: "Law Entrance",
            date: "27-10-2024, 9:15 am",
            studentId: "#STU127",
        },
        {
            name: "Karan Kapoor",
            phone: "+91 9988776655",
            exam: "UPSC Exam",
            date: "28-10-2024, 9:45 am",
            studentId: "#STU128",
        },
        {
            name: "Sneha Roy",
            phone: "+91 9112233445",
            exam: "Teaching Exam",
            date: "29-10-2024, 10:30 am",
            studentId: "#STU129",
        },
        {
            name: "Ravi Kumar",
            phone: "+91 9123344556",
            exam: "Bank Exam",
            date: "30-10-2024, 11:15 am",
            studentId: "#STU130",
        },
        {
            name: "Shweta Gupta",
            phone: "+91 9876123456",
            exam: "SSC Exam",
            date: "31-10-2024, 8:45 am",
            studentId: "#STU131",
        },
        {
            name: "Amit Verma",
            phone: "+91 9234567890",
            exam: "Engineering Entrance",
            date: "01-11-2024, 9:00 am",
            studentId: "#STU132",
        },
    ];

    const navigate = useNavigate();

    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Students</h6>
                </div>
                <div className='handwrittennotes-list'>
                    <div className='handwrittennotes-list-header'>
                        <Link to={'/concept-mapping/add-concept-mapping'} className='link'>
                            <div className='handwrittennotes-add'>
                                <FaPlus />
                                <h6>Add NEW Student</h6>
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
                                    <th>Student Name</th>
                                    <th>Mobile Number</th>
                                    <th>Primary Goal</th>
                                    <th>Last Login</th>
                                    <th>Student Id</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dummyData.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.name}</td>
                                        <td>{data.phone}</td>
                                        <td>{data.exam}</td>
                                        <td>{data.date}</td>
                                        <td>{data.studentId}</td>
                                        <td>
                                            <div className="handwrittennotes-table-icons">
                                                <div className="handwrittennotes-icon" onClick={()=>navigate('/students/student-profile')}>
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

export default HOC(Students)