import React from 'react'
import HOC from '../../components/HOC/HOC'

import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { IoImageOutline } from "react-icons/io5";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";




const AddHandwrittenNotes = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Handwritten Notes</h6>
                    <p>
                        <GoArrowLeft
                            size={25}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(-1)}
                        />
                        Dashboard / Handwritten Notes /<span> Add Handwritten Notes</span>
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
                                <h6>Pages Count</h6>
                                <div className="input-container">
                                    <input type="text" id="email" required />
                                    <label htmlFor="">Enter no.of pages</label>
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
                                <h6>Topics Count</h6>
                                <div className="input-container">
                                    <input type="text" id="email" required />
                                    <label htmlFor="">Enter no.of topics</label>
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
                                            <select name="" id="">
                                                <option value=""></option>
                                            </select>
                                            <label htmlFor="">Select Chapter</label>
                                        </div>
                                        <div className='addhandwritten-inputs-icons'>
                                            {/* <AiFillPlusCircle />
                                            <MdOutlineRemoveRedEye />
                                            <AiFillEdit /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='addhandwritten-input'>
                                    <h6>Topic Name</h6>
                                    <div className='addhandwritten-inputs-div'>
                                        <div className="input-container">
                                            <select name="" id="">
                                                <option value=""></option>
                                            </select>
                                            <label htmlFor="">Enter Topic Name</label>
                                        </div>
                                        <div className='addhandwritten-inputs-icons'>
                                            {/* <AiFillPlusCircle /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='addhandwritten-input-two-div'>
                                <div className='addhandwritten-input'>
                                    <h6>Handwritten Notes Name</h6>
                                    <div className='addhandwritten-inputs-div'>
                                        <div className="input-container">
                                            <input type="text" />
                                            <label htmlFor="">Enter Name here</label>
                                        </div>
                                        <div className='addhandwritten-inputs-icons'>
                                            {/* <AiFillPlusCircle />
                                            <MdOutlineRemoveRedEye />
                                            <AiFillEdit /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='addhandwritten-input'>
                                    <h6>Duration of the Video</h6>
                                    <div className='addhandwritten-inputs-div'>
                                        <div className="input-container">
                                            <input type="text" name="" id="" />
                                            <label htmlFor="">Enter duration (hrs)</label>
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
                                    <h6>Upload handwritten notes (Pdf)</h6>
                                    <div className='addhandwritten-inputs-div'>
                                        <div className="input-container">
                                            <input type="text" />
                                            <label htmlFor="">Upload notes here(Drag & Drop)</label>
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
                </div>
                <div className='addhandwritennotes-submit'>
                    <div className='handwritten-button'>
                        <button onClick={()=>navigate('/dashboard/handwritten-notes')}>Submit</button>
                    </div>
                    <div className='handwritten-button-addnote'>
                        <button onClick={()=>navigate('/vods')}>Add Notes</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(AddHandwrittenNotes)