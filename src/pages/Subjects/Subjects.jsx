import React from 'react'
import HOC from '../../components/HOC/HOC'



import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import Pagination from '../../components/Pagination/Pagination';


const Subjects = () => {
    const dummyData = [
        {
            goalExam: "SSC Exams - SSC CGL Tier -1",
            subjectname: "Science",
            subsubject: "Physics, Chemistry",
            chapters: "Chapter 1",
            subjectid: "#SUBJ1224",
        },
        {
            goalExam: "SSC Exams - SSC CGL Tier -1",
            subjectname: "Science",
            subsubject: "Physics, Chemistry",
            chapters: "Chapter 1",
            subjectid: "#SUBJ1224",
        },
        {
            goalExam: "SSC Exams - SSC CGL Tier -1",
            subjectname: "Science",
            subsubject: "Physics, Chemistry",
            chapters: "Chapter 1",
            subjectid: "#SUBJ1224",
        },
        {
            goalExam: "SSC Exams - SSC CGL Tier -1",
            subjectname: "Science",
            subsubject: "Physics, Chemistry",
            chapters: "Chapter 1",
            subjectid: "#SUBJ1224",
        },
        {
            goalExam: "SSC Exams - SSC CGL Tier -1",
            subjectname: "Science",
            subsubject: "Physics, Chemistry",
            chapters: "Chapter 1",
            subjectid: "#SUBJ1224",
        },
        {
            goalExam: "SSC Exams - SSC CGL Tier -1",
            subjectname: "Science",
            subsubject: "Physics, Chemistry",
            chapters: "Chapter 1",
            subjectid: "#SUBJ1224",
        },
        {
            goalExam: "SSC Exams - SSC CGL Tier -1",
            subjectname: "Science",
            subsubject: "Physics, Chemistry",
            chapters: "Chapter 1",
            subjectid: "#SUBJ1224",
        },
        {
            goalExam: "SSC Exams - SSC CGL Tier -1",
            subjectname: "Science",
            subsubject: "Physics, Chemistry",
            chapters: "Chapter 1",
            subjectid: "#SUBJ1224",
        },
        {
            goalExam: "SSC Exams - SSC CGL Tier -1",
            subjectname: "Science",
            subsubject: "Physics, Chemistry",
            chapters: "Chapter 1",
            subjectid: "#SUBJ1224",
        },
        {
            goalExam: "SSC Exams - SSC CGL Tier -1",
            subjectname: "Science",
            subsubject: "Physics, Chemistry",
            chapters: "Chapter 1",
            subjectid: "#SUBJ1224",
        },
    ];

    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Subjects</h6>
                </div>
                <div className='handwrittennotes-list'>
                    <div className='handwrittennotes-list-header'>
                        <Link to={'/dashboard/skills/add-skill'} className='link'>
                            <div className='handwrittennotes-add'>
                                <FaPlus />
                                <h6>Add NEW subject</h6>
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
                                    <th>Goal Exam</th>
                                    <th>Subject Name</th>
                                    <th>Sub Subject</th>
                                    <th>Chapters</th>
                                    <th>Subject ID</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dummyData.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.goalExam}</td>
                                        <td>{data.subjectname}</td>
                                        <td>{data.subsubject}</td>
                                        <td>{data.chapters}</td>
                                        <td>{data.subjectid}</td>
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

export default HOC(Subjects)