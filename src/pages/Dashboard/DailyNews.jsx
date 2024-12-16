import React, { useState } from 'react'
import HOC from '../../components/HOC/HOC'
import { PriviewNewsModal } from '../../components/Modals/Modals';

import { GoArrowLeft } from "react-icons/go";
import { FaCircle } from "react-icons/fa";
import { IoImageOutline } from "react-icons/io5";



import { Link, useNavigate } from 'react-router-dom';

import img from '../../assest/image.png'
import img1 from '../../assest/img1.png'
import img2 from '../../assest/img2.png'
import img3 from '../../assest/img3.png'
import img4 from '../../assest/img4.png'
import img5 from '../../assest/img5.png'
import img6 from '../../assest/img6.png'
import img7 from '../../assest/img7.png'
import img8 from '../../assest/img8.png'
import img9 from '../../assest/img9.png'

const DailyNews = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)

    return (
        <>
            <PriviewNewsModal
                show={show}
                onHide={() => setShow(false)}
            />
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Daily News</h6>
                    <p>
                        <GoArrowLeft
                            size={25}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(-1)}
                        />
                        Dashboard / Current Affairs /<span> Daily News</span>
                    </p>
                </div>
                <div className='homepagecontent'>
                    <div className='studyplanner-container'>
                        <div className='homepagecontent-left-header'>
                            <h6>Create Daily News</h6>
                        </div>
                        <div className='studyplanner-center-header'>
                            <h6>Select Goal Exam</h6>
                        </div>
                        <div className='studyplanner-exams'>
                            <div className='studyplanner-exam'>
                                <img src={img} alt="" />
                                <h6>IBPS Clerk</h6>
                                <FaCircle className='examstudy' />
                            </div>
                            <div className='studyplanner-exam'>
                                <img src={img1} alt="" />
                                <h6>JAIB Exam</h6>
                                <FaCircle className='examstudy' />
                            </div>
                            <div className='studyplanner-exam'>
                                <img src={img2} alt="" />
                                <h6>IBPS PO</h6>
                                <FaCircle className='examstudy' />
                            </div>
                            <div className='studyplanner-exam'>
                                <img src={img3} alt="" />
                                <h6>SBI PO</h6>
                                <FaCircle className='examstudy' />
                            </div>
                            <div className='studyplanner-exam'>
                                <img src={img4} alt="" />
                                <h6>SSC CHSL</h6>
                                <FaCircle className='examstudy' />
                            </div>
                            <div className='studyplanner-exam'>
                                <img src={img5} alt="" />
                                <h6>IB ACIO</h6>
                                <FaCircle className='examstudy' />
                            </div>
                            <div className='studyplanner-exam'>
                                <img src={img4} alt="" />
                                <h6>SSC Steno</h6>
                                <FaCircle className='examstudy' />
                            </div>
                            <div className='studyplanner-exam'>
                                <img src={img4} alt="" />
                                <h6>SSC MTS</h6>
                                <FaCircle className='examstudy' />
                            </div>
                            <div className='studyplanner-exam'>
                                <img src={img6} alt="" />
                                <h6>CTET</h6>
                                <FaCircle className='examstudy' />
                            </div>
                            <div className='studyplanner-exam'>
                                <img src={img7} alt="" />
                                <h6>UPTET</h6>
                                <FaCircle className='examstudy' />
                            </div>
                            <div className='studyplanner-exam'>
                                <img src={img8} alt="" />
                                <h6>CLAT</h6>
                                <FaCircle className='examstudy' />
                            </div>
                            <div className='studyplanner-exam'>
                                <img src={img9} alt="" />
                                <h6>GATE</h6>
                                <FaCircle className='examstudy' />
                            </div>
                        </div>
                        <div className='dailynews-container'>
                            <div className='dailynews-date'>
                                <label htmlFor="">Date</label>
                                <div className='dailynews-date-div'>
                                    <input type="date" />
                                </div>
                            </div>
                            <div className='dailynews-btn'>
                                <div className='handwritten-button'>
                                    <button>Bulk Upload PDF for Today</button>
                                </div>
                            </div>
                            <div className='dailynews-table'>
                                <div className='dailynews-table-div'>
                                    <label htmlFor="">1st News</label>
                                    <div className='homepagecontent-left-table'>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Thumbnail</th>
                                                    <th style={{ textAlign: 'left' }}>Heading</th>
                                                    <th style={{ textAlign: 'left' }}>Sub Heading</th>
                                                    <th style={{ textAlign: 'left' }}>Content</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className='addimage'>
                                                            <IoImageOutline />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className='totalorders'>
                                                            <span>Enter heading here</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className='totalorders'>
                                                            <span>Enter sub heading here</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className='totalorders'>
                                                            <span>write your content here </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className='dailynews-btn1'>
                                        <div className='handwritten-button'>
                                            <button>Upload Image</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='dailynews-table-div'>
                                    <label htmlFor="">2nd News</label>
                                    <div className='homepagecontent-left-table'>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Thumbnail</th>
                                                    <th style={{ textAlign: 'left' }}>Heading</th>
                                                    <th style={{ textAlign: 'left' }}>Sub Heading</th>
                                                    <th style={{ textAlign: 'left' }}>Content</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className='addimage'>
                                                            <IoImageOutline />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className='totalorders'>
                                                            <span>Enter heading here</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className='totalorders'>
                                                            <span>Enter sub heading here</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className='totalorders'>
                                                            <span>write your content here </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className='dailynews-btn1'>
                                        <div className='handwritten-button'>
                                            <button>Upload Image</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='dailynews-table-div'>
                                    <label htmlFor="">3rd News</label>
                                    <div className='homepagecontent-left-table'>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Thumbnail</th>
                                                    <th style={{ textAlign: 'left' }}>Heading</th>
                                                    <th style={{ textAlign: 'left' }}>Sub Heading</th>
                                                    <th style={{ textAlign: 'left' }}>Content</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className='addimage'>
                                                            <IoImageOutline />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className='totalorders'>
                                                            <span>Enter heading here</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className='totalorders'>
                                                            <span>Enter sub heading here</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className='totalorders'>
                                                            <span>write your content here </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className='dailynews-btn1'>
                                        <div className='handwritten-button'>
                                            <button>Upload Image</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='addhandwritennotes-submit'>
                        <div className='handwritten-button'>
                            <button onClick={()=>setShow(true)}>Save & Preview</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(DailyNews)