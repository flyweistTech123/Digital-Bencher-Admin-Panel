import React, { useState } from 'react'
import HOC from '../../components/HOC/HOC'

import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";




const AddGroup = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Groups</h6>
                    <p>
                        <GoArrowLeft
                            size={25}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(-1)}
                        />
                        Groups /<span> Add Group</span>
                    </p>
                </div>
                <div className='homepagecontent'>
                    <div className='studyplanner-container'>
                        <div className='addgroups-inpute'>
                            <h6>Name <span>*</span></h6>
                            <div className="input-container-addgroup">
                                <input type="text" id="email" required />
                                <label htmlFor="">Enter your name here</label>
                            </div>
                        </div>
                        <div className='addgroups-searchbar'>
                            <div className='addgroups-searchbar-left'>
                                <label htmlFor="">Permissions <span>*</span></label>
                                <div className='addgroups-search'>
                                    <IoSearch color='#718EBF' size={20} />
                                    <input type="text" placeholder='Search Category' />
                                </div>
                            </div>
                            <div className='addgroups-searchbar-right'>
                                <div className='userlist7'>
                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            id="schedule-toggle"
                                        />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                                <p>Select all</p>
                            </div>
                        </div>
                        <div className='addgroups-main-part'>
                            <div className='addgroups-main-div'>
                                <p>Administration Category</p>
                                <div className='addgroups-main-div-div'>
                                    <div className='addgroups-radio-div'>
                                        <div className='addgroups-radio-div-radio'>
                                            <div className='userlist7'>
                                                <label className="switch">
                                                    <input
                                                        type="checkbox"
                                                        id="schedule-toggle"
                                                    />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                            <h5>Administration | log entry | Can add log entry</h5>
                                        </div>
                                        <div className='addgroups-radio-div-radio'>
                                            <div className='userlist7'>
                                                <label className="switch">
                                                    <input
                                                        type="checkbox"
                                                        id="schedule-toggle"
                                                    />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                            <h5>Administration | log entry | Can change log entry</h5>
                                        </div>
                                    </div>
                                    <div className='addgroups-radio-div'>
                                        <div className='addgroups-radio-div-radio'>
                                            <div className='userlist7'>
                                                <label className="switch">
                                                    <input
                                                        type="checkbox"
                                                        id="schedule-toggle"
                                                    />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                            <h5>Administration | log entry | Can add log entry</h5>
                                        </div>
                                        <div className='addgroups-radio-div-radio'>
                                            <div className='userlist7'>
                                                <label className="switch">
                                                    <input
                                                        type="checkbox"
                                                        id="schedule-toggle"
                                                    />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                            <h5>Administration | log entry | Can change log entry</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='addgroups-main-div'>
                                <p>Groups Category</p>
                                <div className='addgroups-main-div-div'>
                                    <div className='addgroups-radio-div'>
                                        <div className='addgroups-radio-div-radio'>
                                            <div className='userlist7'>
                                                <label className="switch">
                                                    <input
                                                        type="checkbox"
                                                        id="schedule-toggle"
                                                    />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                            <h5>Groups | Can add group</h5>
                                        </div>
                                        <div className='addgroups-radio-div-radio'>
                                            <div className='userlist7'>
                                                <label className="switch">
                                                    <input
                                                        type="checkbox"
                                                        id="schedule-toggle"
                                                    />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                            <h5>Groups | Can change group</h5>
                                        </div>
                                    </div>
                                    <div className='addgroups-radio-div'>
                                        <div className='addgroups-radio-div-radio'>
                                            <div className='userlist7'>
                                                <label className="switch">
                                                    <input
                                                        type="checkbox"
                                                        id="schedule-toggle"
                                                    />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                            <h5>Groups | Can delete group</h5>
                                        </div>
                                        <div className='addgroups-radio-div-radio'>
                                            <div className='userlist7'>
                                                <label className="switch">
                                                    <input
                                                        type="checkbox"
                                                        id="schedule-toggle"
                                                    />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                            <h5>Groups | Can view group</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='addgroups-main-div'>
                                <p>About Exam Category</p>
                                <div className='addgroups-main-div-div'>
                                    <div className='addgroups-radio-div'>
                                        <div className='addgroups-radio-div-radio'>
                                            <div className='userlist7'>
                                                <label className="switch">
                                                    <input
                                                        type="checkbox"
                                                        id="schedule-toggle"
                                                    />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                            <h5>About Exam | Can add about exam</h5>
                                        </div>
                                        <div className='addgroups-radio-div-radio'>
                                            <div className='userlist7'>
                                                <label className="switch">
                                                    <input
                                                        type="checkbox"
                                                        id="schedule-toggle"
                                                    />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                            <h5>About Exam | Can change about exam</h5>
                                        </div>
                                    </div>
                                    <div className='addgroups-radio-div'>
                                        <div className='addgroups-radio-div-radio'>
                                            <div className='userlist7'>
                                                <label className="switch">
                                                    <input
                                                        type="checkbox"
                                                        id="schedule-toggle"
                                                    />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                            <h5>About Exam | Can delete about exam</h5>
                                        </div>
                                        <div className='addgroups-radio-div-radio'>
                                            <div className='userlist7'>
                                                <label className="switch">
                                                    <input
                                                        type="checkbox"
                                                        id="schedule-toggle"
                                                    />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                            <h5>About Exam | Can view about exam</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='addgroups-main-div'>
                                <p>Capsule Course Category</p>
                                <div className='addgroups-main-div-div'>
                                    <div className='addgroups-radio-div'>
                                        <div className='addgroups-radio-div-radio'>
                                            <div className='userlist7'>
                                                <label className="switch">
                                                    <input
                                                        type="checkbox"
                                                        id="schedule-toggle"
                                                    />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                            <h5>Capsule Course | Can add capsule course</h5>
                                        </div>
                                        <div className='addgroups-radio-div-radio'>
                                            <div className='userlist7'>
                                                <label className="switch">
                                                    <input
                                                        type="checkbox"
                                                        id="schedule-toggle"
                                                    />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                            <h5>Capsule Course | Can change capsule course</h5>
                                        </div>
                                    </div>
                                    <div className='addgroups-radio-div'>
                                        <div className='addgroups-radio-div-radio'>
                                            <div className='userlist7'>
                                                <label className="switch">
                                                    <input
                                                        type="checkbox"
                                                        id="schedule-toggle"
                                                    />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                            <h5>Groups | Can delete group</h5>
                                        </div>
                                        <div className='addgroups-radio-div-radio'>
                                            <div className='userlist7'>
                                                <label className="switch">
                                                    <input
                                                        type="checkbox"
                                                        id="schedule-toggle"
                                                    />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                            <h5>Groups | Can view group</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='addhandwritennotes-submit'>
                    <div className='handwritten-button'>
                        <button onClick={() => navigate('/groups')}>Save</button>
                    </div>
                    <div className='handwritten-button-addnote'>
                        <button onClick={() => navigate('/groups')}>Save and add another</button>
                    </div>
                    <div className='handwritten-button-addnote'>
                        <button onClick={() => navigate('/groups')}>Save and add continue</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(AddGroup)