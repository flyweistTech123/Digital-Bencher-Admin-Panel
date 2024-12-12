import React from 'react'
import HOC from '../../components/HOC/HOC'
import { FaCircle } from "react-icons/fa";
import { MdAddBox } from "react-icons/md";

import { RiDeleteBin6Line } from "react-icons/ri";

import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const Groups = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Groups</h6>
                </div>
                <div className='groups-container'>
                    <div className='groups-header'>
                        <div className='groups-header-left'>
                            <FaCircle />
                            <h5>Active Groups</h5>
                            <p>3</p>
                        </div>
                        <div className='groups-header-right'>
                            <MdAddBox onClick={()=>navigate('/groups/add-group')}/>
                        </div>
                    </div>
                    <div className='groups-main'>
                        <div className='groups-div'>
                            <div className='groups-div-header'>
                                <div className='groups-div-header-left'>
                                    <h6>Group Name</h6>
                                    <p>Permissions Chosen</p>
                                </div>
                                <div className='groups-div-header-right'>
                                    <MdOutlineRemoveRedEye />
                                    <RiDeleteBin6Line />
                                </div>
                            </div>
                            <div className='groups-div-main'>
                                <h6>
                                    Administration | log entry | Can add log entry
                                    Administration | log entry | Can view log entry
                                    Dashboard | PYQ | Can add PYQ
                                </h6>
                            </div>
                        </div>
                        <div className='groups-div'>
                            <div className='groups-div-header'>
                                <div className='groups-div-header-left'>
                                    <h6>Group Name</h6>
                                    <p>Permissions Chosen</p>
                                </div>
                                <div className='groups-div-header-right'>
                                    <MdOutlineRemoveRedEye />
                                    <RiDeleteBin6Line />
                                </div>
                            </div>
                            <div className='groups-div-main'>
                                <h6>
                                    Administration | log entry | Can add log entry
                                    Administration | log entry | Can view log entry
                                    Dashboard | PYQ | Can add PYQ
                                </h6>
                            </div>
                        </div>
                        <div className='groups-div'>
                            <div className='groups-div-header'>
                                <div className='groups-div-header-left'>
                                    <h6>Group Name</h6>
                                    <p>Permissions Chosen</p>
                                </div>
                                <div className='groups-div-header-right'>
                                    <MdOutlineRemoveRedEye />
                                    <RiDeleteBin6Line />
                                </div>
                            </div>
                            <div className='groups-div-main'>
                                <h6>
                                    Administration | log entry | Can add log entry
                                    Administration | log entry | Can view log entry
                                    Dashboard | PYQ | Can add PYQ
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(Groups)