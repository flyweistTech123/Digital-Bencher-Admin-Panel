import React, { useState } from 'react'
import HOC from '../../components/HOC/HOC'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { LuClock9 } from "react-icons/lu";
import { LuAlarmClock } from "react-icons/lu";
import { GiBookCover } from "react-icons/gi";



import img from '../../assest/img10.png'



const StudentProfile = () => {
    const navigate = useNavigate()
    const percentage = 82;


    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Students</h6>
                    <p>
                        <GoArrowLeft
                            size={25}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(-1)}
                        />
                        Students /<span> Student Profile</span>
                    </p>
                </div>
                <div className='studentprofile-container'>
                    <div className='studyplanner-container'>
                        <div className='studentprofile-heading'>
                            <h6>General Info</h6>
                        </div>
                        <div className='studentprofile-info'>
                            <div className='studentprofile-info-items'>
                                <p>Profile Image</p>
                                <div className='studentprofile-info-image'>
                                    <img src={img} alt="" />
                                </div>
                            </div>
                            <div className='studentprofile-info-items'>
                                <p>Name</p>
                                <div className='studentprofile-info-input'>
                                    <span>Satya</span>
                                </div>
                            </div>
                            <div className='studentprofile-info-items'>
                                <p>Email ID</p>
                                <div className='studentprofile-info-input'>
                                    <span>Satya@gmail.com</span>
                                </div>
                            </div>
                            <div className='studentprofile-info-items'>
                                <p>Phone Number</p>
                                <div className='studentprofile-info-input'>
                                    <span>+91 9949693658</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='studentprofile-analysis'>
                        <h6>Course Analysis</h6>
                        <div className='studentprofile-analsis-div'>
                            <div className='studentprofile-analysis-div-main'>
                                <LuClock9 />
                                <h5><span>47%</span> Course completion</h5>
                            </div>
                            <div className='studentprofile-analysis-div-main'>
                                <LuAlarmClock />
                                <h5><span>80H 1M</span> Overall time spent</h5>
                            </div>
                        </div>
                    </div>
                    <div className='studyplanner-container'>
                        <div className='studentprofile-progress-heading'>
                            <h6>Overall Progress </h6>
                        </div>
                        <div className='studentprofile-progress-bars'>
                            <div className="studentprofile-progress-bar">
                                <svg style={{ height: 0 }}>
                                    <defs>
                                        <linearGradient id="gradientPathColor" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#7DE079" />
                                            <stop offset="100%" stopColor="#447A42" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    styles={buildStyles({
                                        rotation: 0.35,
                                        strokeLinecap: 'butt',
                                        textSize: '20px',
                                        pathTransitionDuration: 0.5,
                                        textColor: '#6090F7',
                                        trailColor: '#D9D9D9',
                                        pathColor: "url(#gradientPathColor)", // Reference the gradient ID
                                    })}
                                />
                                <h6>Videos</h6>
                            </div>
                            <div className="studentprofile-progress-bar">
                                <svg style={{ height: 0 }}>
                                    <defs>
                                        <linearGradient id="gradientPathColor1" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#9747FF" />
                                            <stop offset="100%" stopColor="#5B2B99" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    styles={buildStyles({
                                        rotation: 0.35,
                                        strokeLinecap: 'butt',
                                        textSize: '20px',
                                        pathTransitionDuration: 0.5,
                                        textColor: '#6090F7',
                                        trailColor: '#D9D9D9',
                                        pathColor: "url(#gradientPathColor1)", // Reference the gradient ID
                                    })}
                                />
                                <h6>Practice</h6>
                            </div>
                            <div className="studentprofile-progress-bar">
                                <svg style={{ height: 0 }}>
                                    <defs>
                                        <linearGradient id="gradientPathColor2" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#FD5602" />
                                            <stop offset="100%" stopColor="#973301" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    styles={buildStyles({
                                        rotation: 0.35,
                                        strokeLinecap: 'butt',
                                        textSize: '20px',
                                        pathTransitionDuration: 0.5,
                                        textColor: '#6090F7',
                                        trailColor: '#D9D9D9',
                                        pathColor: "url(#gradientPathColor2)", // Reference the gradient ID
                                    })}
                                />
                                <h6>Notes</h6>
                            </div>
                            <div className="studentprofile-progress-bar">
                                <svg style={{ height: 0 }}>
                                    <defs>
                                        <linearGradient id="gradientPathColor3" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#FFE839" />
                                            <stop offset="100%" stopColor="#998B22" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    styles={buildStyles({
                                        rotation: 0.35,
                                        strokeLinecap: 'butt',
                                        textSize: '20px',
                                        pathTransitionDuration: 0.5,
                                        textColor: '#6090F7',
                                        trailColor: '#D9D9D9',
                                        pathColor: "url(#gradientPathColor3)", // Reference the gradient ID
                                    })}
                                />
                                <h6>Test</h6>
                            </div>
                            <div className="studentprofile-progress-bar">
                                <svg style={{ height: 0 }}>
                                    <defs>
                                        <linearGradient id="gradientPathColor4" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#2ED5D5" />
                                            <stop offset="100%" stopColor="#186F6F" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    styles={buildStyles({
                                        rotation: 0.35,
                                        strokeLinecap: 'butt',
                                        textSize: '20px',
                                        pathTransitionDuration: 0.5,
                                        textColor: '#6090F7',
                                        trailColor: '#D9D9D9',
                                        pathColor: "url(#gradientPathColor4)", // Reference the gradient ID
                                    })}
                                />
                                <h6>Time Left</h6>
                            </div>
                        </div>
                    </div>
                    <div className='studentprofile-topics-container'>
                        <div className='studyplanner-container'>
                            <div className='studentprofile-progress-heading'>
                                <h6>Strong topics</h6>
                            </div>
                            <div className='studentprofile-topics-main'>
                                <div className='studentprofile-topics-div'>
                                    <GiBookCover />
                                    <p>Topic 1</p>
                                </div>
                                <div className='studentprofile-topics-div'>
                                    <GiBookCover />
                                    <p>Topic 2</p>
                                </div>
                                <div className='studentprofile-topics-div'>
                                    <GiBookCover />
                                    <p>Topic 3</p>
                                </div>
                                <div className='studentprofile-topics-div'>
                                    <GiBookCover />
                                    <p>Topic 4</p>
                                </div>
                                <div className='studentprofile-topics-div'>
                                    <GiBookCover />
                                    <p>Topic 5</p>
                                </div>
                                <div className='studentprofile-topics-div'>
                                    <GiBookCover />
                                    <p>Topic 6</p>
                                </div>
                                <div className='studentprofile-topics-div'>
                                    <GiBookCover />
                                    <p>Topic 7</p>
                                </div>
                                <div className='studentprofile-topics-div'>
                                    <GiBookCover />
                                    <p>Topic 8</p>
                                </div>
                            </div>
                            <div className='studentprofile-topics-btn'>
                                <div className='studentprofile-topics-button'>
                                    <h4>25 Expected Questions</h4>
                                </div>
                            </div>
                        </div>
                        <div className='studyplanner-container'>
                            <div className='studentprofile-progress-heading'>
                                <h6>Overall Progress </h6>
                            </div>
                            <div className='studentprofile-topics-main'>
                                <div className='studentprofile-topics-div'>
                                    <GiBookCover />
                                    <p>Topic 1</p>
                                </div>
                                <div className='studentprofile-topics-div'>
                                    <GiBookCover />
                                    <p>Topic 2</p>
                                </div>
                                <div className='studentprofile-topics-div'>
                                    <GiBookCover />
                                    <p>Topic 3</p>
                                </div>
                                <div className='studentprofile-topics-div'>
                                    <GiBookCover />
                                    <p>Topic 4</p>
                                </div>
                                <div className='studentprofile-topics-div'>
                                    <GiBookCover />
                                    <p>Topic 5</p>
                                </div>
                                <div className='studentprofile-topics-div'>
                                    <GiBookCover />
                                    <p>Topic 6</p>
                                </div>
                                <div className='studentprofile-topics-div'>
                                    <GiBookCover />
                                    <p>Topic 7</p>
                                </div>
                                <div className='studentprofile-topics-div'>
                                    <GiBookCover />
                                    <p>Topic 8</p>
                                </div>
                            </div>
                            <div className='studentprofile-topics-btn'>
                                <div className='studentprofile-topics-button' style={{ background: "#EB3426" }}>
                                    <h4>20 Expected Questions</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='studyplanner-container'>
                        <div className='studentprofile-progress-heading'>
                            <h6>Module wise time spent</h6>
                        </div>
                        <div className='studentprofile-progress-bars'>
                            <div className="studentprofile-progress-bar">
                                <svg style={{ height: 0 }}>
                                    <defs>
                                        <linearGradient id="gradientPathColor5" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#FD5602" />
                                            <stop offset="100%" stopColor="#973301" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    styles={buildStyles({
                                        rotation: 0.35,
                                        strokeLinecap: 'butt',
                                        textSize: '20px',
                                        pathTransitionDuration: 0.5,
                                        textColor: '#6090F7',
                                        trailColor: '#D9D9D9',
                                        pathColor: "url(#gradientPathColor5)", // Reference the gradient ID
                                    })}
                                />
                                <h6>Videos</h6>
                            </div>
                            <div className="studentprofile-progress-bar">
                                <svg style={{ height: 0 }}>
                                    <defs>
                                        <linearGradient id="gradientPathColor5" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#FD5602" />
                                            <stop offset="100%" stopColor="#973301" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    styles={buildStyles({
                                        rotation: 0.35,
                                        strokeLinecap: 'butt',
                                        textSize: '20px',
                                        pathTransitionDuration: 0.5,
                                        textColor: '#6090F7',
                                        trailColor: '#D9D9D9',
                                        pathColor: "url(#gradientPathColor5)", // Reference the gradient ID
                                    })}
                                />
                                <h6>Practice</h6>
                            </div>
                            <div className="studentprofile-progress-bar">
                                <svg style={{ height: 0 }}>
                                    <defs>
                                        <linearGradient id="gradientPathColor5" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#FD5602" />
                                            <stop offset="100%" stopColor="#973301" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    styles={buildStyles({
                                        rotation: 0.35,
                                        strokeLinecap: 'butt',
                                        textSize: '20px',
                                        pathTransitionDuration: 0.5,
                                        textColor: '#6090F7',
                                        trailColor: '#D9D9D9',
                                        pathColor: "url(#gradientPathColor5)", // Reference the gradient ID
                                    })}
                                />
                                <h6>Notes</h6>
                            </div>
                            <div className="studentprofile-progress-bar">
                                <svg style={{ height: 0 }}>
                                    <defs>
                                        <linearGradient id="gradientPathColor5" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#FD5602" />
                                            <stop offset="100%" stopColor="#973301" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    styles={buildStyles({
                                        rotation: 0.35,
                                        strokeLinecap: 'butt',
                                        textSize: '20px',
                                        pathTransitionDuration: 0.5,
                                        textColor: '#6090F7',
                                        trailColor: '#D9D9D9',
                                        pathColor: "url(#gradientPathColor5)", // Reference the gradient ID
                                    })}
                                />
                                <h6>Test</h6>
                            </div>
                        </div>
                    </div>
                    <div className='studyplanner-container'>
                        <div className='studentprofile-bottom'>
                            <h5>80</h5>
                            <h4>Expected Questions Cutoff for Exam</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(StudentProfile)