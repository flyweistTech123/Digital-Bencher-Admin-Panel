import React from 'react'
import HOC from '../../components/HOC/HOC'



import { Link, useNavigate } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import Pagination from '../../components/Pagination/Pagination';


const Topics = () => {
    const dummyData = [
        {
            goalExam: "SSC Exams - SSC CGL Tier -1",
            subjectname: "Science",
            topicname: "Topic 1",
            chapters: "Chapter 1",
            topicid: "DBT_e86de136",
        },
        {
            goalExam: "SSC Exams - SSC CGL Tier -1",
            subjectname: "Science",
            topicname: "Topic 1",
            chapters: "Chapter 1",
            topicid: "DBT_e86de136",
        },
        {
            goalExam: "SSC Exams - SSC CGL Tier -1",
            subjectname: "Science",
            topicname: "Topic 1",
            chapters: "Chapter 1",
            topicid: "DBT_e86de136",
        },
        {
            goalExam: "SSC Exams - SSC CGL Tier -1",
            subjectname: "Science",
            topicname: "Topic 1",
            chapters: "Chapter 1",
            topicid: "DBT_e86de136",
        },
        {
            goalExam: "SSC Exams - SSC CGL Tier -1",
            subjectname: "Science",
            topicname: "Topic 1",
            chapters: "Chapter 1",
            topicid: "DBT_e86de136",
        },
        {
            goalExam: "SSC Exams - SSC CGL Tier -1",
            subjectname: "Science",
            topicname: "Topic 1",
            chapters: "Chapter 1",
            topicid: "DBT_e86de136",
        },
        {
            goalExam: "SSC Exams - SSC CGL Tier -1",
            subjectname: "Science",
            topicname: "Topic 1",
            chapters: "Chapter 1",
            topicid: "DBT_e86de136",
        },
        {
            goalExam: "SSC Exams - SSC CGL Tier -1",
            subjectname: "Science",
            topicname: "Topic 1",
            chapters: "Chapter 1",
            topicid: "DBT_e86de136",
        },
        {
            goalExam: "SSC Exams - SSC CGL Tier -1",
            subjectname: "Science",
            topicname: "Topic 1",
            chapters: "Chapter 1",
            topicid: "DBT_e86de136",
        },
        {
            goalExam: "SSC Exams - SSC CGL Tier -1",
            subjectname: "Science",
            topicname: "Topic 1",
            chapters: "Chapter 1",
            topicid: "DBT_e86de136",
        },
    ];

    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Topics</h6>
                </div>
                <div className='handwrittennotes-list'>
                    <div className='handwrittennotes-list-header'>
                        <Link to={'/topics/add-topic'} className='link'>
                            <div className='handwrittennotes-add'>
                                <FaPlus />
                                <h6>Add NEW Topic</h6>
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
                                    <th>Topic Name</th>
                                    <th>Chapters</th>
                                    <th>Topic ID</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dummyData.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.goalExam}</td>
                                        <td>{data.subjectname}</td>
                                        <td>{data.topicname}</td>
                                        <td>{data.chapters}</td>
                                        <td>{data.topicid}</td>
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

export default HOC(Topics)