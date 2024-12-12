import React from 'react'
import HOC from '../../components/HOC/HOC'


import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { AiFillPlusCircle } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";






const AddChapter = () => {
    const navigate = useNavigate()


    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Chapters</h6>
                    <p>
                        <GoArrowLeft
                            size={25}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(-1)}
                        />
                        Chapters /<span> Add Chapter</span>
                    </p>
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
                            </div>
                            <div className='addhandwritten-input-two-div'>
                                <div className='addhandwritten-input'>
                                    <h6>Subject<span>*</span></h6>
                                    <div className='addhandwritten-inputs-div'>
                                        <div className="input-container">
                                            <select name="" id="">
                                                <option value=""></option>
                                            </select>
                                            <label htmlFor="">Select Subject</label>
                                        </div>
                                        <div className='addhandwritten-inputs-icons'>
                                            {/* <AiFillPlusCircle />
                                            <MdOutlineRemoveRedEye />
                                            <AiFillEdit /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='addhandwritten-input'>
                                    <h6>Sub Subjects (Optional)</h6>
                                    <div className='addhandwritten-inputs-div'>
                                        <div className="input-container">
                                            <input type="text" />
                                            <label htmlFor="">Enter sub subject</label>
                                        </div>
                                        <div className='addhandwritten-inputs-icons'>
                                            <AiFillPlusCircle />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='addhandwritten-input-two-div'>
                                <div className='addhandwritten-input'>
                                    <h6>Chapter</h6>
                                    <div className='addhandwritten-inputs-div'>
                                        <div className="input-container">
                                            <input type="text" />
                                            <label htmlFor="">Enter Chapter</label>
                                        </div>
                                        <div className='addhandwritten-inputs-icons'>
                                            {/* <AiFillPlusCircle />
                                            <MdOutlineRemoveRedEye />
                                            <AiFillEdit /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='addhandwritten-input'>
                                    <h6>Updated by</h6>
                                    <div className='addhandwritten-inputs-div'>
                                        <div className="input-container">
                                            <select name="" id="">
                                                <option value=""></option>
                                            </select>
                                            <label htmlFor="">Select</label>
                                        </div>
                                        <div className='addhandwritten-inputs-icons'>
                                            <AiFillPlusCircle />
                                            <MdOutlineRemoveRedEye />
                                            <AiFillEdit />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='addhandwritten-input-two-div'>
                                <div className='addhandwritten-input'>
                                    <h6>Locale</h6>
                                    <div className='addhandwritten-inputs-div'>
                                        <div className="input-container">
                                            <input type="text" />
                                            <label htmlFor="">Enter Language here</label>
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
                            <button onClick={() => navigate('/subjects')}>Save</button>
                        </div>
                        <div className='handwritten-button-addnote'>
                            <button onClick={() => navigate('/subjects')}>Save and add another</button>
                        </div>
                        <div className='handwritten-button-addnote'>
                            <button onClick={() => navigate('/subjects')}>Save and continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(AddChapter)