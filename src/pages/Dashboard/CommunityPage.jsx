import React from 'react'
import HOC from '../../components/HOC/HOC'

import img from '../../assest/img10.jpg'

import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { IoImageOutline } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { RxShare1 } from "react-icons/rx";
import { IoEyeOutline } from "react-icons/io5";

import { BiPin } from "react-icons/bi";


const CommunityPage = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Community Page Content</h6>
                    <p>
                        <GoArrowLeft
                            size={25}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(-1)}
                        />
                        Dashboard /<span> Community </span>
                    </p>
                </div>
                <div className='homepagecontent'>
                    <div className='studyplanner-container'>
                        <div className='homepagecontent-left-header'>
                            <h6>Hero Image</h6>
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
                                <button>Upload New Image</button>
                            </div>
                        </div>

                    </div>
                    <div className='community-container'>
                        <div className='community-header'>
                            <h6>Posts</h6>
                            <div className='handwritten-button'>
                                <button>Create Post</button>
                            </div>
                        </div>
                        <div className='community-main'>
                            <div className='community-main-div'>
                                <div className='community-main-div-profile'>
                                    <div className='community-profile'>
                                        <div className='community-profile-main'>
                                            <div className='community-profile-image'>
                                                <img src={img} alt="" />
                                            </div>
                                            <div className='community-profile-content'>
                                                <h6>User Name</h6>
                                                <p>4 Min ago</p>
                                            </div>
                                        </div>
                                        <div className='community-profile-edit'>
                                            <FaEdit />
                                            <span>Edit</span>
                                        </div>
                                    </div>
                                    <div className='community-content'>
                                        <p>4 Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo fringilla blandit fermentum cras augue. Platea fermentum lectus netus nec ullamcorper a. Natoque consectetur non mi etiam maximus sodales feugiat viverra. ago 4 Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo fringilla blandit fermentum cras augue. Platea fermentum lectus netus nec ullamcorper a. Natoque consectetur non mi etiam maximus sodales feugiat viverra. ago</p>
                                    </div>
                                </div>
                                <div className='community-bottom-container'>
                                    <div className='community-bottom-like'>
                                        <div className='community-bottom-likes'>
                                            <AiOutlineLike />
                                            <p>27</p>
                                        </div>
                                        <div className='community-bottom-likes'>
                                            <BiComment />
                                            <p>3</p>
                                        </div>
                                        <div className='community-bottom-likes'>
                                            <RxShare1 />
                                            <p>Share</p>
                                        </div>
                                    </div>
                                    <div className='community-bottom-pins'>
                                        <div className='community-bottom-likes'>
                                            <IoEyeOutline />
                                            <p>4k</p>
                                        </div>
                                        <div className='community-bottom-likes'>
                                            <BiPin />
                                            <p>Save</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='community-main-Admin'>
                                <div className='community-Admin-header'>
                                    <h6>Admin</h6>
                                </div>
                                <div className='community-Admin-textarea'>
                                    <textarea name="" id="" placeholder='Give reply to this comment here...'></textarea>
                                </div>
                                <div className='sendbutton'>
                                    <div className='handwritten-button'>
                                        <button>Send Reply</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='savebutton'>
                            <div className='handwritten-button'>
                                <button>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(CommunityPage)