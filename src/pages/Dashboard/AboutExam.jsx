import React, { useState } from 'react'
import HOC from '../../components/HOC/HOC'

import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { IoImageOutline } from "react-icons/io5";
import { RiUploadCloud2Fill } from "react-icons/ri";




const AboutExam = () => {
    const navigate = useNavigate()

    const [editmode, setEditMode] = useState(false)

    const toggle = () => {
        setEditMode(!editmode)
    }
    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>About Exam Page Content</h6>
                    <p>
                        <GoArrowLeft
                            size={25}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(-1)}
                        />
                        Dashboard /<span> About Exam</span>
                    </p>
                </div>
                <div className='homepagecontent'>
                    <div className='studyplanner-container'>
                        <div className='homepagecontent-left-header'>
                            <h6>Hero Image</h6>
                            {!editmode &&
                                <FaEdit onClick={toggle} />
                            }
                        </div>
                        <div className='studyplanner-image'>

                            {editmode ? (
                                <>
                                    <RiUploadCloud2Fill />
                                    <h6>Upload new image here</h6>
                                    <p>Note: (Image size should be less than 20MB)</p>
                                </>
                            ) : (
                                <IoImageOutline />
                            )}

                        </div>
                        <div className='aboutexam-container'>
                            <p>Heading Text</p>
                            <div className='aboutexam-container-box'>
                                <span>UPSC CDS</span>
                            </div>
                            <div className='aboutexam-container-main'>
                                <div className='aboutexam-divs'>
                                    <h6>About the Exam</h6>
                                    {editmode ?
                                        <h5>The Union Public Service Commission (UPSC) Combined Defence Services (CDS) examination is a gateway to officer-rank positions in the Indian Army, Indian Navy, and Indian Air Force. CDS 1 2025 is the upcoming exam for aspiring defense personnel.</h5>
                                        :
                                        <p>The Union Public Service Commission (UPSC) Combined Defence Services (CDS) examination is a gateway to officer-rank positions in the Indian Army, Indian Navy, and Indian Air Force. CDS 1 2025 is the upcoming exam for aspiring defense personnel.</p>
                                    }
                                </div>
                                <div className='aboutexam-divs'>
                                    <h6>Eligibility Criteria</h6>
                                    {editmode ?
                                        <h5>Candidates must be unmarried and between the ages of 21 and 30 years (as on 1st January 2025).</h5>
                                        :
                                        <p>Candidates must be unmarried and between the ages of 21 and 30 years (as on 1st January 2025).</p>
                                    }
                                </div>
                                <div className='aboutexam-divs'>
                                    <h6>Important Dates: 2024-25</h6>
                                    {editmode ?
                                        <h5>The CDS 1 exam for 2025 is scheduled for April 13, 2025. Meanwhile, the notification for CDS 2 2025 will be published on May 28, 2025, with the application deadline set for June 17, 2025</h5>
                                        :
                                        <p>The CDS 1 exam for 2025 is scheduled for April 13, 2025. Meanwhile, the notification for CDS 2 2025 will be published on May 28, 2025, with the application deadline set for June 17, 2025</p>
                                    }
                                </div>
                                <div className='aboutexam-divs'>
                                    <h6>Syllabus</h6>
                                    {editmode ?
                                        <h5>The UPSC CDS 1 2025 syllabus covers a wide range of topics across three main subjects: English, General Knowledge, and Elementary Mathematics (for IMA, INA, and AFA candidates only).</h5>
                                        :
                                        <p>The UPSC CDS 1 2025 syllabus covers a wide range of topics across three main subjects: English, General Knowledge, and Elementary Mathematics (for IMA, INA, and AFA candidates only).</p>
                                    }
                                </div>
                                <div className='aboutexam-divs'>
                                    <h6>Exam Pattern</h6>
                                    {editmode ?
                                        <h5>The exam consists of three papers: English, General Knowledge, and Elementary Mathematics.</h5>
                                        :
                                        <p>The exam consists of three papers: English, General Knowledge, and Elementary Mathematics.</p>
                                    }
                                </div>
                                <div className='aboutexam-divs'>
                                    <h6>Any Important thing to show (Data)</h6>
                                    {editmode ?
                                        <h5>The complete CDS 2025 selection procedure will be release by UPSC on the website through online mode. There will be two stages of CDS selection procedure – a written exam and an SSB Interview. Those candidates who will qualify the exam will be called to participate for SSB Interview round. Selection procedure will be held to test the candidates aptitude and reasoning ability. Selected candidates in this procedure will be called for SSB Interview for 5 days.</h5>
                                        :
                                        <p>The complete CDS 2025 selection procedure will be release by UPSC on the website through online mode. There will be two stages of CDS selection procedure – a written exam and an SSB Interview. Those candidates who will qualify the exam will be called to participate for SSB Interview round. Selection procedure will be held to test the candidates aptitude and reasoning ability. Selected candidates in this procedure will be called for SSB Interview for 5 days.</p>
                                    }
                                </div>
                                <div className='aboutexam-divs' style={{ border: "none", paddingBottom: "0" }}>
                                    <h6>Important Links (Main website to apply)</h6>
                                    <div className='aboutexam-container-box'>
                                        <span>https: //upsc.gov.in/</span>
                                    </div>
                                </div>
                                {editmode &&
                                    <div className='aboutexam-divs-edit'>
                                        <div className='handwritten-button'>
                                            <button onClick={toggle}>Update Changes</button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(AboutExam)