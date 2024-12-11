import React from 'react'
import HOC from '../../components/HOC/HOC'

import { GoArrowLeft } from "react-icons/go";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";




import { useNavigate } from 'react-router-dom';


const EditorialAnalysis = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Editorial Analysis</h6>
                    <p>
                        <GoArrowLeft
                            size={25}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(-1)}
                        />
                        Dashboard / Current Affairs /<span> Editorial Analysis</span>
                    </p>
                </div>
                <div className='homepagecontent'>
                    <div className='studyplanner-container'>
                        <div className='homepagecontent-left-header'>
                            <h6>Create Editorial Analysis</h6>
                        </div>

                        <div className='editorial-container'>
                            <div className='editorial-inputes'>
                                <div className='editorial-inpute'>
                                    <label htmlFor="">Goal Exam</label>
                                    <div className='editorial-inpute-div'>
                                        <select name="" id="">
                                            <option value="">Select Goal Exam</option>
                                        </select>
                                        <div className='editorial-inputs-icons'>
                                            <AiFillPlusCircle />
                                            <MdOutlineRemoveRedEye />
                                            <AiFillEdit />
                                        </div>
                                    </div>
                                </div>
                                <div className='editorial-inpute'>
                                    <label htmlFor="">Date</label>
                                    <div className='editorial-inpute-div'>
                                        <input type="date" />
                                        <div className='editorial-inputs-icons'>
                                            {/* <AiFillPlusCircle />
                                            <MdOutlineRemoveRedEye />
                                            <AiFillEdit /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='editorial-editorials'>
                                <div className='editorial-label'>
                                    <label htmlFor="">1st Editorial</label>
                                    <div className='editorial-main'>
                                        <label htmlFor="">Heading Text</label>
                                        <div className='editorial-main-div'>
                                            <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper enim lectus lectus at. Vitae purus magna </p>
                                        </div>
                                    </div>
                                    <div className='editorial-main'>
                                        <label htmlFor="">Content</label>
                                        <div className='editorial-btns'>
                                            <div className='editorial-main-div'>
                                                <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper enim lectus lectus at. Vitae purus magna </p>
                                            </div>
                                            <div className='editorial-btn'>
                                                <div className='handwritten-button'>
                                                    <button>Upload Content</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='editorial-label'>
                                    <label htmlFor="">2nd Editorial</label>
                                    <div className='editorial-main'>
                                        <label htmlFor="">Heading Text</label>
                                        <div className='editorial-main-div'>
                                            <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper enim lectus lectus at. Vitae purus magna </p>
                                        </div>
                                    </div>
                                    <div className='editorial-main'>
                                        <label htmlFor="">Content</label>
                                        <div className='editorial-btns'>
                                            <div className='editorial-main-div'>
                                                <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper enim lectus lectus at. Vitae purus magna </p>
                                            </div>
                                            <div className='editorial-btn'>
                                                <div className='handwritten-button'>
                                                    <button>Upload Content</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='editorial-label'>
                                    <label htmlFor="">3rd Editorial</label>
                                    <div className='editorial-main'>
                                        <label htmlFor="">Heading Text</label>
                                        <div className='editorial-main-div'>
                                            <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper enim lectus lectus at. Vitae purus magna </p>
                                        </div>
                                    </div>
                                    <div className='editorial-main'>
                                        <label htmlFor="">Content</label>
                                        <div className='editorial-btns'>
                                            <div className='editorial-main-div'>
                                                <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper enim lectus lectus at. Vitae purus magna </p>
                                            </div>
                                            <div className='editorial-btn'>
                                                <div className='handwritten-button'>
                                                    <button>Upload Content</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='addhandwritennotes-submit'>
                        <div className='handwritten-button'>
                            <button onClick={() => navigate('/dashboard/current-affairs')}>Publish</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(EditorialAnalysis)