import React from 'react'
import HOC from '../../components/HOC/HOC'

import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { IoImageOutline } from "react-icons/io5";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { AiTwotoneEdit } from "react-icons/ai";



const AddSkill = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Skills</h6>
                    <p>
                        <GoArrowLeft
                            size={25}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(-1)}
                        />
                        Dashboard / Skills /<span> Add Ski</span>
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
                            <div className='addhandwrittennotes-input'>
                                <h6>Locale</h6>
                                <div className="input-container">
                                    <input type="text" id="email" required />
                                    <label htmlFor="">Select test bundle here</label>
                                </div>
                            </div>
                            <div className='addhandwrittennotes-input'>
                                <h6>Locale</h6>
                                <div className="input-container">
                                    <input type="text" id="email" required />
                                    <label htmlFor="">Enter locale</label>
                                </div>
                            </div>
                            <div className='addhandwrittennotes-input'>
                                <h6>Locale</h6>
                                <div className="input-container">
                                    <input type="text" id="email" required />
                                    <label htmlFor="">Enter locale</label>
                                </div>
                            </div>
                            <div className='addhandwrittennotes-input'>
                                <h6>Locale</h6>
                                <div className="input-container">
                                    <input type="text" id="email" required />
                                    <label htmlFor="">Enter locale</label>
                                </div>
                            </div>
                            <div className='addhandwrittennotes-input'>
                                <h6>Locale</h6>
                                <div className="input-container">
                                    <input type="text" id="email" required />
                                    <label htmlFor="">Enter locale</label>
                                </div>
                            </div>
                            <div className='addhandwrittennotes-input'>
                                <h6>Locale</h6>
                                <div className="input-container">
                                    <input type="text" id="email" required />
                                    <label htmlFor="">Enter locale</label>
                                </div>
                            </div>
                            <div className='addhandwrittennotes-input'>
                                <h6>Locale</h6>
                                <div className="input-container">
                                    <input type="text" id="email" required />
                                    <label htmlFor="">Enter locale</label>
                                </div>
                            </div>
                            <div className='addhandwrittennotes-input'>
                                <h6>Locale</h6>
                                <div className="input-container">
                                    <input type="text" id="email" required />
                                    <label htmlFor="">Enter locale</label>
                                </div>
                            </div>

                            <div className='addhandwrittennotes-input'>
                                <h6>Locale</h6>
                                <div className="input-container">
                                    <input type="text" id="email" required />
                                    <label htmlFor="">Enter locale</label>
                                </div>
                            </div>
                            <div className='addhandwrittennotes-input'>
                                <h6>Locale</h6>
                                <div className="input-container">
                                    <input type="text" id="email" required />
                                    <label htmlFor="">Enter locale</label>
                                </div>
                            </div>
                            <div className='addhandwrittennotes-input'>
                                <h6>Locale</h6>
                                <div className="input-container">
                                    <input type="text" id="email" required />
                                    <label htmlFor="">Enter locale</label>
                                </div>
                            </div>
                            <div className='addhandwrittennotes-input'>
                                <h6>Locale</h6>
                                <div className="input-container">
                                    <input type="text" id="email" required />
                                    <label htmlFor="">Enter locale</label>
                                </div>
                            </div>
                            <div className='addhandwrittennotes-input'>
                                <h6>Locale</h6>
                                <div className="input-container">
                                    <input type="text" id="email" required />
                                    <label htmlFor="">Enter locale</label>
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
                    <div className='studyplanner-container' style={{ marginTop: "20px" }}>
                        <div className='addhandwrittennotes-goal-main'>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(AddSkill)