import React from 'react'
import HOC from '../../components/HOC/HOC'



import { Link, useNavigate } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import Pagination from '../../components/Pagination/Pagination';


const ConceptMapping = () => {
    const dummyData = [
        {
            goalexam: "SSC Exams - SSC CGL Tier -1",
            subject: "Science",
            subsubject: "Physics, Chemistry",
            chapter: "Chapter 1",
            topic: "Topic Name",
        },
        {
            goalexam: "SSC Exams - SSC CGL Tier -1",
            subject: "Science",
            subsubject: "Physics, Chemistry",
            chapter: "Chapter 1",
            topic: "Topic Name",
        },
        {
            goalexam: "SSC Exams - SSC CGL Tier -1",
            subject: "Science",
            subsubject: "Physics, Chemistry",
            chapter: "Chapter 1",
            topic: "Topic Name",
        },
        {
            goalexam: "SSC Exams - SSC CGL Tier -1",
            subject: "Science",
            subsubject: "Physics, Chemistry",
            chapter: "Chapter 1",
            topic: "Topic Name",
        },
        {
            goalexam: "SSC Exams - SSC CGL Tier -1",
            subject: "Science",
            subsubject: "Physics, Chemistry",
            chapter: "Chapter 1",
            topic: "Topic Name",
        },
        {
            goalexam: "SSC Exams - SSC CGL Tier -1",
            subject: "Science",
            subsubject: "Physics, Chemistry",
            chapter: "Chapter 1",
            topic: "Topic Name",
        },
        {
            goalexam: "SSC Exams - SSC CGL Tier -1",
            subject: "Science",
            subsubject: "Physics, Chemistry",
            chapter: "Chapter 1",
            topic: "Topic Name",
        },
        {
            goalexam: "SSC Exams - SSC CGL Tier -1",
            subject: "Science",
            subsubject: "Physics, Chemistry",
            chapter: "Chapter 1",
            topic: "Topic Name",
        },
        {
            goalexam: "SSC Exams - SSC CGL Tier -1",
            subject: "Science",
            subsubject: "Physics, Chemistry",
            chapter: "Chapter 1",
            topic: "Topic Name",
        },
        {
            goalexam: "SSC Exams - SSC CGL Tier -1",
            subject: "Science",
            subsubject: "Physics, Chemistry",
            chapter: "Chapter 1",
            topic: "Topic Name",
        },
    ];

    const navigate = useNavigate();

    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Concept Mapping</h6>
                </div>
                <div className='handwrittennotes-list'>
                    <div className='handwrittennotes-list-header'>
                        <Link to={'/concept-mapping/add-concept-mapping'} className='link'>
                            <div className='handwrittennotes-add'>
                                <FaPlus />
                                <h6>Add NEW Concept mapping</h6>
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
                                    <th>Subject</th>
                                    <th>Sub Subject</th>
                                    <th>Chapter</th>
                                    <th>Topic</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dummyData.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.goalexam}</td>
                                        <td>{data.subject}</td>
                                        <td>{data.subsubject}</td>
                                        <td>{data.chapter}</td>
                                        <td>{data.topic}</td>
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

export default HOC(ConceptMapping)