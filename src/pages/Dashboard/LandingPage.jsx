import React from 'react'
import HOC from '../../components/HOC/HOC'
import { MdAddBox } from "react-icons/md";

import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { IoImageOutline } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";


const LandingPage = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Landing Page Content</h6>
                    <p>
                        <GoArrowLeft
                            size={25}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(-1)}
                        />
                        Dashboard /<span> Landing Page</span>
                    </p>
                </div>
                <div className='homepagecontent'>
                    <div className='homepagecontent-top'>
                        <div className='homepagecontent-left'>
                            <div className='homepagecontent-left-header'>
                                <h6>Advertisements</h6>
                                <MdAddBox />
                            </div>
                            <div className='homepagecontent-left-table'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Ad Images</th>
                                            <th>Display Order</th>
                                            <th>Ad Section</th>
                                            <th>Action</th>
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
                                                    <span>01</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='totalorders'>
                                                    <span>AD 1</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='actiontable'>
                                                    <IoMdEye />
                                                    <RiDeleteBin6Line />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='addimage'>
                                                    <IoImageOutline />
                                                </div>
                                            </td>
                                            <td>
                                                <div className='totalorders'>
                                                    <span>01</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='totalorders'>
                                                    <span>AD 1</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='actiontable'>
                                                    <IoMdEye />
                                                    <RiDeleteBin6Line />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='addimage'>
                                                    <IoImageOutline />
                                                </div>
                                            </td>
                                            <td>
                                                <div className='totalorders'>
                                                    <span>01</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='totalorders'>
                                                    <span>AD 1</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='actiontable'>
                                                    <IoMdEye />
                                                    <RiDeleteBin6Line />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='homepagecontent-left'>
                            <div className='homepagecontent-left-header'>
                                <h6>Study Plan Section</h6>
                                <MdAddBox />
                            </div>
                            <div className='homepagecontent-left-table'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Upload</th>
                                            <th>Action</th>
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
                                                    <span>Upload New image</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='actiontable'>
                                                    <IoMdEye />
                                                    <RiDeleteBin6Line />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='addimage'>
                                                    <IoImageOutline />
                                                </div>
                                            </td>
                                            <td>
                                                <div className='totalorders'>
                                                    <span>Upload New image</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='actiontable'>
                                                    <IoMdEye />
                                                    <RiDeleteBin6Line />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='addimage'>
                                                    <IoImageOutline />
                                                </div>
                                            </td>
                                            <td>
                                                <div className='totalorders'>
                                                    <span>Upload New image</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='actiontable'>
                                                    <IoMdEye />
                                                    <RiDeleteBin6Line />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='homepagecontent-bottom'>
                        <div className='studyplanner-container'>
                            <div className='homepagecontent-left-header'>
                                <h6>Handwritten Notes Section</h6>
                                <MdAddBox />
                            </div>
                            <div className='landingpage-container'>
                                <div className='landingpage-left'>
                                    <h5>Image</h5>
                                    <div className='addimage'>
                                        <IoImageOutline />
                                    </div>
                                    <div className='landingpage-left-btn'>
                                        <h6>Upload New image</h6>
                                    </div>
                                </div>
                                <div className='landingpage-center'>
                                    <div className='landingpage-center-div'>
                                        <h5>Heading Text</h5>
                                        <div className='youtubevideos-main-div-div'>
                                            <p>Unlock Exclusive Handwritten notes by Toppers</p>
                                        </div>
                                    </div>
                                    <div className='landingpage-center-div'>
                                        <h5>Body Text</h5>
                                        <div className='youtubevideos-main-div-div'>
                                            <p>Access topic wise notes to master key concepts and boost your exam prep</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='landingpage-right'>
                                    <h5>Action</h5>
                                    <RiDeleteBin6Line />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='homepagecontent-bottom'>
                        <div className='studyplanner-container'>
                            <div className='homepagecontent-left-header'>
                                <h6>Footer Section</h6>
                                <MdAddBox />
                            </div>
                            <div className='landingpage-container'>
                                <div className='landingpage-left'>
                                    <h5>Logo</h5>
                                    <div className='addimage'>
                                        <IoImageOutline />
                                    </div>
                                    <div className='landingpage-left-btn'>
                                        <h6>Upload New image</h6>
                                    </div>
                                </div>
                                <div className='landingpage-center'>
                                    <div className='landingpage-center-div'>
                                        <h5>Logo Text Description</h5>
                                        <div className='youtubevideos-main-div-div'>
                                            <p>Digital Benchers is democratising education,<br /> making it accessible to all. Join the revolution,<br /> learn on India's largest learning platform.</p>
                                        </div>
                                    </div>

                                </div>
                                <div className='landingpage-right'>
                                    <h5>Action</h5>
                                    <RiDeleteBin6Line />
                                </div>
                            </div>
                            <div className='landingpage-data'>
                                <div className='landingpage-data-div'>
                                    <p>Sub heading text</p>
                                    <div className='landingpage-data-div-main'>
                                        <span>Reach Out to us</span>
                                    </div>
                                </div>
                                <div className='landingpage-data-div'>
                                    <p>Call</p>
                                    <div className='landingpage-data-div-main'>
                                        <span>098765433221</span>
                                    </div>
                                </div>
                                <div className='landingpage-data-div'>
                                    <p>Email</p>
                                    <div className='landingpage-data-div-main'>
                                        <span>Digitalbenchers@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className='landingpage-Links'>
                                <div className='homepagecontent-left-header'>
                                    <h6>Links</h6>
                                </div>
                                <div className='landingpage-company-section'>
                                    <div className='landingpage-company-heading'>
                                        <p>Company Section</p>
                                        <MdAddBox />
                                    </div>
                                    <div className='landingpage-company-inputes'>
                                        <div className='landingpage-data-div-main' onClick={()=>navigate('/dashboard/landing-page/aboutus')}>
                                            <span>About Us</span>
                                        </div>
                                        <div className='landingpage-data-div-main' onClick={()=>navigate('/dashboard/landing-page/careers')}>
                                            <span>Careers</span>
                                        </div>
                                        <div className='landingpage-data-div-main' onClick={()=>navigate('/dashboard/landing-page/privacy-policy')}>
                                            <span>Privacy Policy</span>
                                        </div>
                                        <div className='landingpage-data-div-main' onClick={()=>navigate('/dashboard/landing-page/termsandconditions')}>
                                            <span>Terms & Conditions</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='landingpage-company-section'>
                                    <div className='landingpage-company-heading'>
                                        <p>Popular Goals Section</p>
                                        <MdAddBox />
                                    </div>
                                    <div className='landingpage-company-inputes'>
                                        <div className='landingpage-data-div-main'>
                                            <span>IIT JEE</span>
                                        </div>
                                        <div className='landingpage-data-div-main'>
                                            <span>UPSC</span>
                                        </div>
                                        <div className='landingpage-data-div-main'>
                                            <span>SSC</span>
                                        </div>
                                        <div className='landingpage-data-div-main'>
                                            <span>SDIR UGC NET</span>
                                        </div>
                                        <div className='landingpage-data-div-main'>
                                            <span>NEET UG</span>
                                        </div>
                                    </div>

                                </div>
                                <div className='landingpage-company-section'>
                                    <div className='landingpage-company-heading'>
                                        <p>Help & Support Section</p>
                                        <MdAddBox />
                                    </div>
                                    <div className='landingpage-company-inputes'>
                                        <div className='landingpage-data-div-main'>
                                            <span>User Guidelines</span>
                                        </div>
                                        <div className='landingpage-data-div-main'>
                                            <span>Site Map</span>
                                        </div>
                                        <div className='landingpage-data-div-main'>
                                            <span>Refund Policy</span>
                                        </div>
                                        <div className='landingpage-data-div-main'>
                                            <span>Takedown Policy</span>
                                        </div>
                                        <div className='landingpage-data-div-main'>
                                            <span>Grievance Redressal</span>
                                        </div>
                                    </div>

                                </div>
                                <div className='landingpage-company-section'>
                                    <div className='landingpage-company-heading'>
                                        <p>Digital benchers Section</p>
                                        <MdAddBox />
                                    </div>
                                    <div className='landingpage-company-inputes'>
                                        <div className='landingpage-data-div-main'>
                                            <span>Study Planner</span>
                                        </div>
                                        <div className='landingpage-data-div-main'>
                                            <span>Courses</span>
                                        </div>
                                        <div className='landingpage-data-div-main'>
                                            <span>Test Series</span>
                                        </div>
                                        <div className='landingpage-data-div-main'>
                                            <span>Handwritten Notes by toppers</span>
                                        </div>
                                        <div className='landingpage-data-div-main'>
                                            <span>PYQ’s</span>
                                        </div>
                                        <div className='landingpage-data-div-main'>
                                            <span>Community</span>
                                        </div>
                                        <div className='landingpage-data-div-main'>
                                            <span>Capsule Course</span>
                                        </div>
                                        <div className='landingpage-data-div-main'>
                                            <span>Skills</span>
                                        </div>
                                    </div>

                                </div>
                                <div className='landingpage-data'>
                                    <div className='landingpage-data-div'>
                                        <p>Help & Support Section Link</p>
                                        <div className='landingpage-data-div-main'>
                                            <span>Login Page Link</span>
                                        </div>
                                    </div>
                                    <div className='landingpage-data-div'>
                                        <p>Digital benchers Section Link</p>
                                        <div className='landingpage-data-div-main'>
                                            <span>Login Page Link</span>
                                        </div>
                                    </div>
                                    <div className='landingpage-data-div'>
                                        <p>Popular Goals Section Link</p>
                                        <div className='landingpage-data-div-main'>
                                            <span>Login Page Link</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='addhandwritennotes-submit'>
                    <div className='handwritten-button'>
                        <button onClick={() => navigate('/dashboard/current-affairs')}>Update Changes</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(LandingPage)