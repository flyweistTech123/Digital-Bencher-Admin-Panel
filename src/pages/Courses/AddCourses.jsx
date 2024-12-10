import React from 'react'
import HOC from '../../components/HOC/HOC'

import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { IoImageOutline } from "react-icons/io5";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { SlCloudUpload } from "react-icons/sl";




const AddCourses = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Courses</h6>
                    <p>
                        <GoArrowLeft
                            size={25}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(-1)}
                        />
                        Dashboard / Courses Page / Course/<span> Add Course</span>
                    </p>
                </div>
                <div className='homepagecontent'>
                    <div className='studyplanner-container'>
                        <div className='homepagecontent-left-header'>
                            <h6>Tile Image</h6>
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
                                <button>Upload Image</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='handwrittennotes-list'>
                    <div className='studyplanner-container'>
                        <div className='homepagecontent-left-header'>
                            <h6>Basic Info</h6>
                        </div>
                        <div className='addhandwrittennotes-main'>
                            <div className='addhandwrittennotes-input'>
                                <h6>Name of the Bundle</h6>
                                <div className="input-container">
                                    <input type="text" id="email" required />
                                    <label htmlFor="">Enter name here</label>
                                </div>
                            </div>
                            <div className='addhandwrittennotes-input'>
                                <h6>Include Course Count</h6>
                                <div className="input-container">
                                    <input type="text" id="email" required />
                                    <label htmlFor="">Enter no.of courses</label>
                                </div>
                            </div>
                            <div className='addhandwrittennotes-input'>
                                <h6>Duration</h6>
                                <div className="input-container">
                                    <input type="text" id="email" required />
                                    <label htmlFor="">Enter duration ( hrs )</label>
                                </div>
                            </div>
                            <div className='addhandwrittennotes-input'>
                                <h6>Subjects</h6>
                                <div className="input-container">
                                    <input type="text" id="email" required />
                                    <label htmlFor="">Enter no.of subjects</label>
                                </div>
                            </div>
                            <div className='addhandwrittennotes-input'>
                                <h6>Price</h6>
                                <div className="input-container">
                                    <input type="text" id="email" required />
                                    <label htmlFor="">Enter price</label>
                                </div>
                            </div>
                            <div className='addhandwrittennotes-input'>
                                <h6>Locale</h6>
                                <div className="input-container">
                                    <input type="text" id="email" required />
                                    <label htmlFor="">Enter locale</label>
                                </div>
                            </div>
                        </div>
                        <div className='addcourse-container'>
                            <div className='addcourse-container-left'>
                                <div className='addhandwrittennotes-input'>
                                    <h6>Course Type</h6>
                                    <div className="input-container">
                                        <select name="" id="">
                                            <option value="">Select course type</option>
                                        </select>
                                        <label htmlFor="">Select course type</label>
                                    </div>
                                </div>
                                <div className='addhandwrittennotes-input'>
                                    <h6>Thresholds Marks</h6>
                                    <div className="input-container">
                                        <input type="text" id="email" required />
                                        <label htmlFor="">Enter thresholds marks</label>
                                    </div>
                                </div>
                            </div>
                            <div className='addcourse-container-right'>
                                <div className='addhandwrittennotes-textarea'>
                                    <h6>Course Highlights</h6>
                                    <div className="textarea-container">
                                        <textarea required />
                                        <label htmlFor="">Enter Course Highlight here</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='handwritten-button-container'>
                            <div className='handwritten-button'>
                                <button>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='handwrittennotes-list'>
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
                                    <h6>Subject<span>*</span></h6>
                                    <div className='addhandwritten-inputs-div'>
                                        <div className="input-container">
                                            <select name="" id="">
                                                <option value=""></option>
                                            </select>
                                            <label htmlFor="">Select Subject</label>
                                        </div>
                                        <div className='addhandwritten-inputs-icons'>
                                            <AiFillPlusCircle />
                                            <MdOutlineRemoveRedEye />
                                            <AiFillEdit />
                                        </div>
                                    </div>
                                </div>
                                <div className='addhandwritten-input'>
                                    <h6>Course Type</h6>
                                    <div className='addhandwritten-inputs-div'>
                                        <div className="input-container">
                                            <select name="" id="">
                                                <option value=""></option>
                                            </select>
                                            <label htmlFor="">Select course type</label>
                                        </div>
                                        <div className='addhandwritten-inputs-icons'>
                                            {/* <AiFillPlusCircle /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='addhandwritten-input-two-div'>
                                <div className='addhandwritten-input'>
                                    <h6>Vods Link</h6>
                                    <div className='addhandwritten-inputs-div'>
                                        <div className="input-container">
                                            <select name="" id="">
                                                <option value=""></option>
                                            </select>
                                            <label htmlFor="">Select link here</label>
                                        </div>
                                        <div className='addhandwritten-inputs-icons'>
                                            {/* <AiFillPlusCircle />
                                            <MdOutlineRemoveRedEye />
                                            <AiFillEdit /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='addhandwritten-input'>
                                    <h6>Handwritten Notes</h6>
                                    <div className='addhandwritten-inputs-div'>
                                        <div className="input-container">
                                            <select name="" id="">
                                                <option value=""></option>
                                            </select>
                                            <label htmlFor="">Select tagged notes here</label>
                                        </div>
                                        <div className='addhandwritten-inputs-icons'>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='addhandwritten-input-two-div'>
                                <div className='addhandwritten-input'>
                                    <h6>Educator Name</h6>
                                    <div className='addhandwritten-inputs-div'>
                                        <div className="input-container">
                                            <input type="text" />
                                            <label htmlFor="">Select educator name here</label>
                                        </div>
                                        <div className='addhandwritten-inputs-icons'>
                                            {/* <AiFillPlusCircle />
                                            <MdOutlineRemoveRedEye />
                                            <AiFillEdit /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='addhandwritten-input'>
                                    <h6>Educator Notes</h6>
                                    <div className='addhandwritten-inputs-div'>
                                        <div className="input-container">
                                            <select name="" id="">
                                                <option value=""></option>
                                            </select>
                                            <label htmlFor="">Select educator notes ( pdf )</label>
                                        </div>
                                        <div className='addhandwritten-inputs-icons'>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='addhandwritten-input-two-div'>
                                <div className='addhandwritten-input'>
                                    <h6>Select type of Test<span>*</span></h6>
                                    <div className='addcourse-radios-btns'>
                                        <div className='addcourse-radios'>
                                            <input type="radio" />
                                            <p>Mock Test</p>
                                        </div>
                                        <div className='addcourse-radios'>
                                            <input type="radio" />
                                            <p>Subject Test</p>
                                        </div>
                                        <div className='addcourse-radios'>
                                            <input type="radio" />
                                            <p>Chapter Test</p>
                                        </div>
                                        <div className='addcourse-radios'>
                                            <input type="radio" />
                                            <p>Partial Test</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='addhandwritten-input'>
                                    <h6>Cost of the Test</h6>
                                    <div className='addcourse-radios-btns'>
                                        <div className='addcourse-radios'>
                                            <input type="radio" />
                                            <p>Paid Test</p>
                                        </div>
                                        <div className='addcourse-radios'>
                                            <input type="radio" />
                                            <p>Free Test</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='addhandwritten-input-two-div'>
                                <div className='addhandwritten-input'>
                                    <h6>Instruction File</h6>
                                    <div className='addcourse-upload-file'>
                                        <SlCloudUpload />
                                    </div>
                                </div>
                                <div className='addhandwritten-input'>
                                    <h6>Final Test</h6>
                                    <div className='addcourse-upload-file'>
                                        <SlCloudUpload />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='addhandwritennotes-submit'>
                    <div className='handwritten-button'>
                        <button onClick={() => navigate('/dashboard/handwritten-notes')}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(AddCourses)