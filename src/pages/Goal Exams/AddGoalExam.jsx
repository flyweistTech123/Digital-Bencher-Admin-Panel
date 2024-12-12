import React from 'react'
import HOC from '../../components/HOC/HOC'


import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from 'react-router-dom';







const AddGoalExam = () => {
    const navigate = useNavigate()


    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Goal Exams</h6>
                    <p>
                        <GoArrowLeft
                            size={25}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(-1)}
                        />
                        Goal Exams /<span> Add Goal Exam</span>
                    </p>
                </div>
                <div className='studentprofile-container'>
                    <div className='studyplanner-container'>
                        <div className='addhandwrittennotes-main'>
                            <div className='addhandwrittennotes-input'>
                                <h6>Goal<span>*</span></h6>
                                <div className="input-container">
                                    <input type="text" id="email" required />
                                    <label htmlFor="">Enter Goal</label>
                                </div>
                            </div>
                            <div className='addhandwrittennotes-input'>
                                <h6>Exam</h6>
                                <div className="input-container">
                                    <input type="text" id="email" required />
                                    <label htmlFor="">Enter Exam</label>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='handwritten-button-container' style={{marginTop:'2rem'}}>
                        <div className='handwritten-button'>
                            <button>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(AddGoalExam)