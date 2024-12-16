import React from 'react'
import HOC from '../../components/HOC/HOC'



import { Link, useNavigate } from 'react-router-dom';

import img from '../../assest/profile.png'

const Profile = () => {


    const navigate = useNavigate();

    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>My Profile</h6>
                </div>
                <div className='profile-container'>
                    <div className='profile-image'>
                        <div className='profile-image-img'>
                            <img src={img} alt="" />
                        </div>
                        <p>Edit Photo</p>
                    </div>
                    <div className='profile-main'>
                        <div className='profile-main-input'>
                            <label htmlFor="">First Name</label>
                            <input type="text" />
                        </div>
                        <div className='profile-main-input'>
                            <label htmlFor="">Last Name</label>
                            <input type="text" />
                        </div>
                        <div className='profile-main-input'>
                            <label htmlFor="">Your email</label>
                            <input type="text" />
                        </div>
                        <div className='profile-main-input'>
                            <label htmlFor="">Phone Number</label>
                            <input type="text" />
                        </div>
                        <div className='profile-main-input'>
                            <label htmlFor="">Is active</label>
                            <select name="" id="">
                                <option value="">Yes</option>
                                <option value="">No</option>
                            </select>
                        </div>
                        <div className='profile-main-input'>
                            <label htmlFor="">Is staff</label>
                            <select name="" id="">
                                <option value="">Yes</option>
                                <option value="">No</option>
                            </select>
                        </div>
                        <div className='profile-main-input'>
                            <label htmlFor="">Is superuser</label>
                            <select name="" id="">
                                <option value="">Yes</option>
                                <option value="">No</option>
                            </select>
                        </div>
                        <div className='profile-main-input'>
                            <label htmlFor="">Is student</label>
                            <select name="" id="">
                                <option value="">Yes</option>
                                <option value="">No</option>
                            </select>
                        </div>
                        <div className='profile-main-input'>
                            <label htmlFor="">Is employee</label>
                            <select name="" id="">
                                <option value="">Yes</option>
                                <option value="">No</option>
                            </select>
                        </div>
                    </div>
                    <div className='profile-btn'>
                        <button>Update changes</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(Profile)