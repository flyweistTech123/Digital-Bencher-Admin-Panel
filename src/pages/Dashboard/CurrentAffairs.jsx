import React from 'react'
import HOC from '../../components/HOC/HOC'

import { GoArrowLeft } from "react-icons/go";
import { Link, useNavigate } from 'react-router-dom';
import { IoImageOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import Pagination from '../../components/Pagination/Pagination';
import { IoNewspaperSharp } from "react-icons/io5";


const CurrentAffairs = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Current Affairs Page Content</h6>
                    <p>
                        <GoArrowLeft
                            size={25}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(-1)}
                        />
                        Dashboard /<span> Current Affairs</span>
                    </p>
                </div>
                <div className='homepagecontent'>
                    <div className='studyplanner-container'>
                        <div className='homepagecontent-left-header'>
                            <h6>Hero Image</h6>
                        </div>
                        <div className='studyplanner-image'>
                            <IoImageOutline />
                        </div>
                        <div className='handwritten-notes'>
                            <p>Note* ( Image size should be less than 20mb )</p>
                            <p>Image format should be PNG, JPEG or SVG*</p>
                        </div>
                        <div className='handwritten-button-container'>
                            <div className='handwritten-button'>
                                <button>Upload New Image</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='handwrittennotes-list'>
                    <div className='dashboardmain'>
                        <Link to={'/dashboard/course-page'} className='link'>
                            <div className='coursepageContent-div'>
                                <IoNewspaperSharp />
                                <h6>Daily News</h6>
                            </div>
                        </Link>
                        <Link to={'/dashboard/course-page'} className='link'>
                            <div className='coursepageContent-div'>
                                <IoNewspaperSharp />
                                <h6>Editorial Analysis</h6>
                            </div>
                        </Link>
                        <Link to={'/dashboard/course-page'} className='link'>
                            <div className='coursepageContent-div'>
                                <IoNewspaperSharp />
                                <h6>Daily Quiz</h6>
                            </div>
                        </Link>

                        <Link to={'/dashboard/course-page'} className='link'>
                            <div className='coursepageContent-div'>
                                <IoNewspaperSharp />
                                <h6>Target Current Affairs</h6>
                            </div>
                        </Link>
                        <Link to={'/dashboard/course-page'} className='link'>
                            <div className='coursepageContent-div'>
                                <IoNewspaperSharp />
                                <h6>Youtube Videos</h6>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HOC(CurrentAffairs)