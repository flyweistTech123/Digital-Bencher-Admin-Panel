import React from 'react'
import HOC from '../../components/HOC/HOC'
import { MdAddBox } from "react-icons/md";

import { GoArrowLeft } from "react-icons/go";
import { Link, useNavigate } from 'react-router-dom';
import { IoImageOutline } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdGolfCourse } from "react-icons/md";


const CoursePageContent = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Course Page Content</h6>
                    <p>
                        <GoArrowLeft
                            size={25}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(-1)}
                        />
                        Dashboard /<span> Courses Page</span>
                    </p>
                </div>
                <div className='homepagecontent'>
                    <div className='homepagecontent-bottom'>
                        <div className='homepagecontent-left'>
                            <div className='homepagecontent-left-header'>
                                <h6>Displayed Courses</h6>
                                <MdAddBox />
                            </div>
                            <div className='homepagecontent-left-table'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Thumbnail</th>
                                            <th style={{ textAlign: 'left', paddingLeft: "10px" }}>Title</th>
                                            <th>Description</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className='addimage'>
                                                    <IoImageOutline />
                                                </div>
                                            </td>
                                            <td>
                                                <div className='coursepagecontent-box'>
                                                    <span>Foundation Course</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='coursepagecontent-box'>
                                                    <span>suitable for learners having at least 6-8 months of prep ...</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='actiontable'>
                                                    <IoMdEye />
                                                    <RiDeleteBin6Line />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='addimage'>
                                                    <IoImageOutline />
                                                </div>
                                            </td>
                                            <td>
                                                <div className='coursepagecontent-box'>
                                                    <span>Foundation Course</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='coursepagecontent-box'>
                                                    <span>suitable for learners having at least 6-8 months of prep ...</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='actiontable'>
                                                    <IoMdEye />
                                                    <RiDeleteBin6Line />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <Link to={'/dashboard/course-page/courses'} className='link'>
                        <div className='coursepageContent-div'>
                            <MdGolfCourse />
                            <h6>Courses</h6>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default HOC(CoursePageContent)