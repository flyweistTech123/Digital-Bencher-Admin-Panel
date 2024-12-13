import React, { useState } from 'react'
import HOC from '../../components/HOC/HOC'


import { useNavigate } from 'react-router-dom';
import { AiFillPlusCircle } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { SlCloudUpload } from "react-icons/sl";

import { GoArrowLeft } from "react-icons/go";




const PracticeQuestions = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)

    const toggle = () => {
        setShow(!show)
    }


    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Practice Questions</h6>
                    <p>
                        <GoArrowLeft
                            size={25}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(-1)}
                        />
                        Quiz app /<span> Practice Questions</span>
                    </p>
                </div>
                <div className='studentprofile-container'>
                    <div className='studyplanner-container'>
                        <div className='addhandwritten-inputs'>
                            {!show &&
                             <>
                                <div className='addhandwritten-input-two-div'>
                                    <div className='testseries-inputs'>
                                        <div className='testseries-input'>
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
                                        <div className='testseries-input'>
                                            <h6>How many tests are there in this bundle<span>*</span></h6>
                                            <div className='addhandwritten-inputs-div'>
                                                <div className="input-container">
                                                    <select name="" id="">
                                                        <option value=""></option>
                                                    </select>
                                                    <label htmlFor="">Select Count</label>
                                                </div>
                                                <div className='addhandwritten-inputs-icons'>
                                                    {/* <AiFillPlusCircle />
                                            <MdOutlineRemoveRedEye />
                                            <AiFillEdit /> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='addhandwritten-input'>
                                        <h6>Tile Image</h6>
                                        <div className='addcourse-upload-file'>
                                            <SlCloudUpload />
                                        </div>
                                    </div>
                                </div>
                                <div className='addhandwritten-input-two-div'>
                                    <div className='addhandwritten-input'>
                                        <h6>Cost of the Bundle<span>*</span></h6>
                                        <div className='addhandwritten-inputs-div'>
                                            <div className="input-container">
                                                <input type="text" />
                                                <label htmlFor="">Enter the cost</label>
                                            </div>
                                            <div className='addhandwritten-inputs-icons'>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='addhandwritten-input'>
                                        <h6>Total Duration of the Bundle</h6>
                                        <div className='addhandwritten-inputs-div'>
                                            <div className="input-container">
                                                <input type="text" />
                                                <label htmlFor="">Enter duration (hrs)</label>
                                            </div>
                                            <div className='addhandwritten-inputs-icons'>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='addhandwritten-input-two-div'>
                                    <div className='addhandwritten-input'>
                                        <h6>Locale<span>*</span></h6>
                                        <div className='addhandwritten-inputs-div'>
                                            <div className="input-container">
                                                <input type="text" />
                                                <label htmlFor="">Enter Language here</label>
                                            </div>
                                            <div className='addhandwritten-inputs-icons'>

                                            </div>
                                        </div>
                                    </div>
                                  
                                </div>
                                <div className='addhandwritten-input-two-div'>
                                    <div className='addhandwritten-input'>
                                        <h6>Bundle Name</h6>
                                        <div className='addhandwritten-inputs-div'>
                                            <div className="input-container">
                                                <input type="text" />
                                                <label htmlFor="">Enter Name here</label>
                                            </div>
                                            <div className='addhandwritten-inputs-icons'>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='addhandwritten-input'>
                                        <h6>Bundle Description<span>*</span></h6>
                                        <div className='addhandwritten-inputs-div'>
                                            <div className="input-container">
                                                <input type="text" />
                                                <label htmlFor="">Enter bundle description</label>
                                            </div>
                                            <div className='addhandwritten-inputs-icons'>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                            }
                            {show &&
                                <>
                                    <div className='addhandwritten-input-two-div'>
                                        <div className='testseries-inputs'>
                                            <div className='testseries-input'>
                                                <h6>Select type of Test<span>*</span></h6>
                                                <div className='testseries-inputs-div'>
                                                    <div className='testseries-inputs-radio'>
                                                        <input type="radio" />
                                                        <p>Mock Test</p>
                                                    </div>
                                                    <div className='testseries-inputs-radio'>
                                                        <input type="radio" />
                                                        <p>Subject Test</p>
                                                    </div>
                                                    <div className='testseries-inputs-radio'>
                                                        <input type="radio" />
                                                        <p>Chapter Test</p>
                                                    </div>
                                                    <div className='testseries-inputs-radio'>
                                                        <input type="radio" />
                                                        <p>Partial Test</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='testseries-input'>
                                                <h6>Locale<span>*</span></h6>
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
                                        <div className='addhandwritten-input'>
                                            <h6>Instruction File</h6>
                                            <div className='addcourse-upload-file'>
                                                <SlCloudUpload />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='addhandwritten-input-two-div'>
                                        <div className='testseries-inputs'>
                                            <div className='testseries-input'>
                                                <h6>Cost of the Test</h6>
                                                <div className='testseries-inputs-div'>
                                                    <div className='testseries-inputs-radio'>
                                                        <input type="radio" />
                                                        <p>Paid Test</p>
                                                    </div>
                                                    <div className='testseries-inputs-radio'>
                                                        <input type="radio" />
                                                        <p>Free Test</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='addhandwritten-input'>
                                            <h6>Upload Test Series</h6>
                                            <div className='addcourse-upload-file'>
                                                <SlCloudUpload />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                    <div className='addhandwritennotes-submit'>
                        <div className='handwritten-button'>
                            <button onClick={toggle}>Save & Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(PracticeQuestions)