import React from 'react'
import HOC from '../../components/HOC/HOC'


import { useNavigate } from 'react-router-dom';
import { AiFillPlusCircle } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";






const CourseType = () => {
    const navigate = useNavigate()


    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Course Type</h6>
                </div>
                <div className='studentprofile-container'>
                    <div className='studyplanner-container'>
                        <div className='addhandwritten-inputs'>
                            <div className='addhandwritten-input-two-div'>
                                <div className='addhandwritten-input'>
                                    <h6>Goal Exam<span>*</span></h6>
                                    <div className='addhandwritten-inputs-div'>
                                        <div className="input-container">
                                            <select name="" id="">
                                                <option value=""></option>
                                            </select>
                                            <label htmlFor="">Select Goal Exam</label>
                                        </div>
                                        <div className='addhandwritten-inputs-icons'>
                                            <AiFillPlusCircle />
                                            <MdOutlineRemoveRedEye />
                                            <AiFillEdit />
                                        </div>
                                    </div>
                                </div>
                                <div className='addhandwritten-input'>
                                    <h6>Course Type<span>*</span></h6>
                                    <div className='addhandwritten-inputs-div'>
                                        <div className="input-container">
                                            <input type="text" />
                                            <label htmlFor="">Enter course type</label>
                                        </div>
                                        <div className='addhandwritten-inputs-icons'>
                                            {/* <AiFillPlusCircle />
                                            <MdOutlineRemoveRedEye />
                                            <AiFillEdit /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='addhandwritennotes-submit'>
                        <div className='handwritten-button'>
                            <button onClick={() => navigate('/subjects')}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(CourseType)