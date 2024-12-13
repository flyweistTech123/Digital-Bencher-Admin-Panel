import React, { useState } from 'react'
import HOC from '../../components/HOC/HOC'


import { useNavigate } from 'react-router-dom';
import { AiFillPlusCircle } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { GoArrowLeft } from "react-icons/go";




const AddRedemptions = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)

    const toggle = () => {
        setShow(!show)
    }


    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Redemptions</h6>
                    <p>
                        <GoArrowLeft
                            size={25}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(-1)}
                        />
                        Student area / Redemptions /<span> Add Redemptions</span>
                    </p>
                </div>
                <div className='studentprofile-container'>
                    <div className='studyplanner-container'>
                        <div className='addhandwritten-inputs'>
                            <div className='addhandwritten-input-two-div'>
                                <div className='addhandwritten-input'>
                                    <h6>Student<span>*</span></h6>
                                    <div className='addhandwritten-inputs-div'>
                                        <div className="input-container">
                                            <select name="" id=""></select>
                                            <label htmlFor="">Select Student</label>
                                        </div>
                                        <div className='addhandwritten-inputs-icons'>
                                            <AiFillPlusCircle />
                                            <MdOutlineRemoveRedEye />
                                            <AiFillEdit />
                                        </div>
                                    </div>
                                </div>
                                <div className='addhandwritten-input'>
                                    <h6>Reward<span>*</span></h6>
                                    <div className='addhandwritten-inputs-div'>
                                        <div className="input-container">
                                            <select name="" id=""></select>
                                            <label htmlFor="">Select  Reward</label>
                                        </div>
                                        <div className='addhandwritten-inputs-icons'>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='addhandwrittennotes-input'>
                                <h6>Redeemed Type<span>*</span></h6>
                                <div className="input-container">
                                    <input type="text" id="email" required />
                                    <label htmlFor="">Enter redeemed type</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='addhandwritennotes-submit'>
                        <div className='handwritten-button'>
                            <button onClick={() => navigate('/student-area/redemptions')}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(AddRedemptions)