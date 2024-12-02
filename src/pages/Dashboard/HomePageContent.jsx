import React from 'react'
import HOC from '../../components/HOC/HOC'
import { MdAddBox } from "react-icons/md";

import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { IoImageOutline } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";


const HomePageContent = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Home Page Content</h6>
                    <p>
                        <GoArrowLeft
                            size={25}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(-1)}
                        />
                        Dashboard /<span> Home Page</span>
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
                                <h6>Rewards</h6>
                                <MdAddBox />
                            </div>
                            <div className='homepagecontent-left-table'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Reward Image</th>
                                            <th>Reward Code</th>
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
                                                    <span>FLASH 30</span>
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
                                                    <span>FLASH 30</span>
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
                                                    <span>FLASH 30</span>
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
                        <div className='homepagecontent-left'>
                            <div className='homepagecontent-left-header'>
                                <h6>Top content this week</h6>
                                <MdAddBox />
                            </div>
                            <div className='homepagecontent-left-table'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Thumbnail</th>
                                            <th style={{textAlign:'left', paddingLeft:"10px"}}>Heading Text</th>
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
                                                    <span>Schedule & Details of CLAT 2025 Mock Test Series, Schedule & Details of CLAT 2025 Mock Test Series</span>
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
                                                    <span>Schedule & Details of CLAT 2025 Mock Test Series, Schedule & Details of CLAT 2025 Mock Test Series</span>
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
                </div>
            </div>
        </>
    )
}

export default HOC(HomePageContent)