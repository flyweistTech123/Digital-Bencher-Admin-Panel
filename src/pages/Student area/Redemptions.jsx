import React from 'react'
import HOC from '../../components/HOC/HOC'



import { Link, useNavigate } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { GoArrowLeft } from "react-icons/go";
import Pagination from '../../components/Pagination/Pagination';


const Redemptions = () => {
    const dummyData = [
        {
            student: "Sandeep Jay",
            reward: "Reward Name",
            redeemedtype: "Redeemed type",
            redeemedat: "October 2, 3:44 pm",
            redeemID: "DBT_e86de136",
        },
        {
            student: "Sandeep Jay",
            reward: "Reward Name",
            redeemedtype: "Redeemed type",
            redeemedat: "October 2, 3:44 pm",
            redeemID: "DBT_e86de136",
        },
        {
            student: "Sandeep Jay",
            reward: "Reward Name",
            redeemedtype: "Redeemed type",
            redeemedat: "October 2, 3:44 pm",
            redeemID: "DBT_e86de136",
        },
        {
            student: "Sandeep Jay",
            reward: "Reward Name",
            redeemedtype: "Redeemed type",
            redeemedat: "October 2, 3:44 pm",
            redeemID: "DBT_e86de136",
        },
        {
            student: "Sandeep Jay",
            reward: "Reward Name",
            redeemedtype: "Redeemed type",
            redeemedat: "October 2, 3:44 pm",
            redeemID: "DBT_e86de136",
        },
        {
            student: "Sandeep Jay",
            reward: "Reward Name",
            redeemedtype: "Redeemed type",
            redeemedat: "October 2, 3:44 pm",
            redeemID: "DBT_e86de136",
        },
        {
            student: "Sandeep Jay",
            reward: "Reward Name",
            redeemedtype: "Redeemed type",
            redeemedat: "October 2, 3:44 pm",
            redeemID: "DBT_e86de136",
        },
        {
            student: "Sandeep Jay",
            reward: "Reward Name",
            redeemedtype: "Redeemed type",
            redeemedat: "October 2, 3:44 pm",
            redeemID: "DBT_e86de136",
        },
        {
            student: "Sandeep Jay",
            reward: "Reward Name",
            redeemedtype: "Redeemed type",
            redeemedat: "October 2, 3:44 pm",
            redeemID: "DBT_e86de136",
        },
        {
            student: "Sandeep Jay",
            reward: "Reward Name",
            redeemedtype: "Redeemed type",
            redeemedat: "October 2, 3:44 pm",
            redeemID: "DBT_e86de136",
        },
    ];

    const navigate = useNavigate();

    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Redemptions</h6>
                    <p>
                        <GoArrowLeft
                            size={25}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(-1)}
                        />
                        Student area /<span>  Redemptions</span>
                    </p>
                </div>
                <div className='handwrittennotes-list'>
                    <div className='handwrittennotes-list-header'>
                        <Link to={'/student-area/redemptions/add-redemptions'} className='link'>
                            <div className='handwrittennotes-add'>
                                <FaPlus />
                                <h6>Add NEW Redemptions</h6>
                            </div>
                        </Link>
                        <div className='handwrittennotes-search'>
                            <IoSearch color='#ADB5BD' />
                            <input type="search" placeholder='Search...' />
                        </div>
                        <div className='handwrittennotes-export'>
                            <span>Export CSV</span>
                        </div>
                    </div>
                    <div className='handwrittennotes-list-table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Student</th>
                                    <th>Reward</th>
                                    <th>Redeemed type</th>
                                    <th>Redeemed at</th>
                                    <th>Redeem ID</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dummyData.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.student}</td>
                                        <td>{data.reward}</td>
                                        <td>{data.redeemedtype}</td>
                                        <td>{data.redeemedat}</td>
                                        <td>{data.redeemID}</td>
                                        <td>
                                            <div className="handwrittennotes-table-icons">
                                                <div className="handwrittennotes-icon" onClick={() => navigate('/students/student-profile')}>
                                                    <MdArrowOutward />
                                                </div>
                                                <div className="handwrittennotes-icon">
                                                    <FiEdit3 />
                                                </div>
                                                <div className="handwrittennotes-icon">
                                                    <AiOutlineDelete />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Pagination />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(Redemptions)