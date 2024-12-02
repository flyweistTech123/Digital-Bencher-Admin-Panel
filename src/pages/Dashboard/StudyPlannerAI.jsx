import React from 'react'
import HOC from '../../components/HOC/HOC'


import { MdAddBox } from "react-icons/md";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { IoImageOutline } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";

import img from '../../assest/image.png'
import img1 from '../../assest/img1.png'
import img2 from '../../assest/img2.png'
import img3 from '../../assest/img3.png'
import img4 from '../../assest/img4.png'
import img5 from '../../assest/img5.png'
import img6 from '../../assest/img6.png'
import img7 from '../../assest/img7.png'
import img8 from '../../assest/img8.png'
import img9 from '../../assest/img9.png'

const StudyPlannerAI = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Study Planner AI Page Content</h6>
                    <p>
                        <GoArrowLeft
                            size={25}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(-1)}
                        />
                        Dashboard /<span> Study Planner AI</span>
                    </p>
                </div>
                <div className='homepagecontent'>
                    <div className='studyplanner-container'>
                        <div className='homepagecontent-left-header'>
                            <h6>Hero Image</h6>
                            <FaEdit />
                        </div>
                        <div className='studyplanner-image'>
                            <IoImageOutline />
                        </div>
                        <div className='studyplanner-center-header'>
                            <h6>Popular Exams</h6>
                            <MdAddBox />
                        </div>
                        <div className='studyplanner-exams'>
                            <div className='studyplanner-exam'>
                                <img src={img} alt="" />
                                <h6>IBPS Clerk</h6>
                            </div>
                            <div className='studyplanner-exam'>
                                <img src={img1} alt="" />
                                <h6>JAIB Exam</h6>
                            </div>
                            <div className='studyplanner-exam'>
                                <img src={img2} alt="" />
                                <h6>IBPS PO</h6>
                            </div>
                            <div className='studyplanner-exam'>
                                <img src={img3} alt="" />
                                <h6>SBI PO</h6>
                            </div>
                            <div className='studyplanner-exam'>
                                <img src={img4} alt="" />
                                <h6>SSC CHSL</h6>
                            </div>
                            <div className='studyplanner-exam'>
                                <img src={img5} alt="" />
                                <h6>IB ACIO</h6>
                            </div>
                            <div className='studyplanner-exam'>
                                <img src={img4} alt="" />
                                <h6>SSC Steno</h6>
                            </div>
                            <div className='studyplanner-exam'>
                                <img src={img4} alt="" />
                                <h6>SSC MTS</h6>
                            </div>
                            <div className='studyplanner-exam'>
                                <img src={img6} alt="" />
                                <h6>CTET</h6>
                            </div>
                            <div className='studyplanner-exam'>
                                <img src={img7} alt="" />
                                <h6>UPTET</h6>
                            </div>
                            <div className='studyplanner-exam'>
                                <img src={img8} alt="" />
                                <h6>CLAT</h6>
                            </div>
                            <div className='studyplanner-exam'>
                                <img src={img9} alt="" />
                                <h6>GATE</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(StudyPlannerAI)