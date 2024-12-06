import React from 'react'
import HOC from '../../components/HOC/HOC'




import { IoSearch } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import Pagination from '../../components/Pagination/Pagination';


const Ratings = () => {
    const dummyData = [
        {
            username: "Chandra Kanth",
            goalexam: "Goal Exam Name",
            subject: "Subject Name",
            chapters: "Chapter 1",
            ratings: "★★★★☆",
        },
        {
            username: "Chandra Kanth",
            goalexam: "Goal Exam Name",
            subject: "Subject Name",
            chapters: "Chapter 1",
            ratings: "★★★★☆",
        },
        {
            username: "Chandra Kanth",
            goalexam: "Goal Exam Name",
            subject: "Subject Name",
            chapters: "Chapter 1",
            ratings: "★★★★☆",
        },
        {
            username: "Chandra Kanth",
            goalexam: "Goal Exam Name",
            subject: "Subject Name",
            chapters: "Chapter 1",
            ratings: "★★★★☆",
        },
        {
            username: "Chandra Kanth",
            goalexam: "Goal Exam Name",
            subject: "Subject Name",
            chapters: "Chapter 1",
            ratings: "★★★★☆",
        },
        {
            username: "Chandra Kanth",
            goalexam: "Goal Exam Name",
            subject: "Subject Name",
            chapters: "Chapter 1",
            ratings: "★★★★☆",
        },
        {
            username: "Chandra Kanth",
            goalexam: "Goal Exam Name",
            subject: "Subject Name",
            chapters: "Chapter 1",
            ratings: "★★★★☆",
        },
        {
            username: "Chandra Kanth",
            goalexam: "Goal Exam Name",
            subject: "Subject Name",
            chapters: "Chapter 1",
            ratings: "★★★★☆",
        },
        {
            username: "Chandra Kanth",
            goalexam: "Goal Exam Name",
            subject: "Subject Name",
            chapters: "Chapter 1",
            ratings: "★★★★☆",
        },
        {
            username: "Chandra Kanth",
            goalexam: "Goal Exam Name",
            subject: "Subject Name",
            chapters: "Chapter 1",
            ratings: "★★★★☆",
        },
    ];

    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Ratings</h6>
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
                                    <th>User Name</th>
                                    <th>Goal Exam</th>
                                    <th>Subject</th>
                                    <th>Chapter</th>
                                    <th>Ratings</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dummyData.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.username}</td>
                                        <td>{data.goalexam}</td>
                                        <td>{data.subject}</td>
                                        <td>{data.chapters}</td>
                                        <td>{data.ratings}</td>
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

export default HOC(Ratings)