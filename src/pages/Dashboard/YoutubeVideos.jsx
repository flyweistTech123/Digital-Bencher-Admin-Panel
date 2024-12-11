import React from 'react'
import HOC from '../../components/HOC/HOC'

import { GoArrowLeft } from "react-icons/go";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { TbUpload } from "react-icons/tb";
import { IoImageOutline } from "react-icons/io5";




import { useNavigate } from 'react-router-dom';


const YoutubeVideos = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Youtube Videos</h6>
                    <p>
                        <GoArrowLeft
                            size={25}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(-1)}
                        />
                        Dashboard / Current Affairs /<span>  Youtube Videos</span>
                    </p>
                </div>
                <div className='homepagecontent'>
                    <div className='studyplanner-container'>
                        <div className='youtubevideos-container'>
                            <div className='youtubevideos-div'>
                                <label htmlFor="">Video 1</label>
                                <div className='youtubevideos-div-div'>
                                    <div className='youtubevideos-div-left'>
                                        <h6>Thumbnail</h6>
                                        <div className='addimage'>
                                            <IoImageOutline />
                                        </div>
                                        <div>
                                            <div className='handwritten-button'>
                                                <button onClick={() => navigate('/dashboard/current-affairs')}>Upload Files</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='youtubevideos-div-right'>
                                        <div className='youtubevideos-right-div'>
                                            <h6 htmlFor="">Description</h6>
                                            <div className='youtubevideos-main-div-div'>
                                                <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper enim lectus lectus at. Vitae purus magna </p>
                                            </div>
                                        </div>
                                        <div className='youtubevideos-div-bottom'>
                                            <div className='youtubevideos-div-bottom-div'>
                                                <h6>Creator Name</h6>
                                                <div className='youtubevideos-main-div-div'>
                                                    <p>Lorem ipsum dolor </p>
                                                </div>
                                            </div>
                                            <div className='youtubevideos-div-bottom-div'>
                                                <h6>Publish Date</h6>
                                                <div className='youtubevideos-main-div-div'>
                                                    <p>23-10-2024</p>
                                                </div>
                                            </div>
                                            <div className='youtubevideos-div-bottom-div'>
                                                <h6>Video File</h6>
                                                <div className='youtubevideos-main-div-div'>
                                                    <p>https://www.youtube.com/watch?v=VIDEO_ID</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='youtubevideos-div'>
                                <label htmlFor="">Video 2</label>
                                <div className='youtubevideos-div-div'>
                                    <div className='youtubevideos-div-left'>
                                        <h6>Thumbnail</h6>
                                        <div className='addimage'>
                                            <IoImageOutline />
                                        </div>
                                        <div>
                                            <div className='handwritten-button'>
                                                <button onClick={() => navigate('/dashboard/current-affairs')}>Upload Files</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='youtubevideos-div-right'>
                                        <div className='youtubevideos-right-div'>
                                            <h6 htmlFor="">Description</h6>
                                            <div className='youtubevideos-main-div-div'>
                                                <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper enim lectus lectus at. Vitae purus magna </p>
                                            </div>
                                        </div>
                                        <div className='youtubevideos-div-bottom'>
                                            <div className='youtubevideos-div-bottom-div'>
                                                <h6>Creator Name</h6>
                                                <div className='youtubevideos-main-div-div'>
                                                    <p>Lorem ipsum dolor </p>
                                                </div>
                                            </div>
                                            <div className='youtubevideos-div-bottom-div'>
                                                <h6>Publish Date</h6>
                                                <div className='youtubevideos-main-div-div'>
                                                    <p>23-10-2024</p>
                                                </div>
                                            </div>
                                            <div className='youtubevideos-div-bottom-div'>
                                                <h6>Video File</h6>
                                                <div className='youtubevideos-main-div-div'>
                                                    <p>https://www.youtube.com/watch?v=VIDEO_ID</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='youtubevideos-div'>
                                <label htmlFor="">Video 3</label>
                                <div className='youtubevideos-div-div'>
                                    <div className='youtubevideos-div-left'>
                                        <h6>Thumbnail</h6>
                                        <div className='addimage'>
                                            <IoImageOutline />
                                        </div>
                                        <div>
                                            <div className='handwritten-button'>
                                                <button onClick={() => navigate('/dashboard/current-affairs')}>Upload Files</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='youtubevideos-div-right'>
                                        <div className='youtubevideos-right-div'>
                                            <h6 htmlFor="">Description</h6>
                                            <div className='youtubevideos-main-div-div'>
                                                <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper enim lectus lectus at. Vitae purus magna </p>
                                            </div>
                                        </div>
                                        <div className='youtubevideos-div-bottom'>
                                            <div className='youtubevideos-div-bottom-div'>
                                                <h6>Creator Name</h6>
                                                <div className='youtubevideos-main-div-div'>
                                                    <p>Lorem ipsum dolor </p>
                                                </div>
                                            </div>
                                            <div className='youtubevideos-div-bottom-div'>
                                                <h6>Publish Date</h6>
                                                <div className='youtubevideos-main-div-div'>
                                                    <p>23-10-2024</p>
                                                </div>
                                            </div>
                                            <div className='youtubevideos-div-bottom-div'>
                                                <h6>Video File</h6>
                                                <div className='youtubevideos-main-div-div'>
                                                    <p>https://www.youtube.com/watch?v=VIDEO_ID</p>
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

export default HOC(YoutubeVideos)