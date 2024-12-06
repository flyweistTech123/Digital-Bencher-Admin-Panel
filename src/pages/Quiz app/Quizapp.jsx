import React from 'react'
import HOC from '../../components/HOC/HOC'
import { PiNotepadFill } from "react-icons/pi";
import { FaFilePen } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaNewspaper } from "react-icons/fa6";
import { IoIosPlayCircle } from "react-icons/io";


const Quizapp = () => {
    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Quiz app</h6>
                </div>
                <div className='dashboardmain'>
                    <Link to={'/dashboard/homepage-content'} className='link'>
                        <div className='dashboardcontent'>
                            <FaNewspaper />
                            <h6>Test Series</h6>
                        </div>
                    </Link>
                    <Link to={'/dashboard/studyplanner-AI'} className='link'>
                        <div className='dashboardcontent'>
                            <PiNotepadFill />
                            <h6>Practice Questions</h6>
                        </div>
                    </Link>
                    <Link to={'/dashboard/about-exam'} className='link'>
                        <div className='dashboardcontent'>
                            <IoIosPlayCircle />
                            <h6>PYQ’s with video</h6>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default HOC(Quizapp)