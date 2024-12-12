import React from 'react'
import HOC from '../../components/HOC/HOC'
import Pagination from '../../components/Pagination/Pagination';


import { Link, useNavigate } from 'react-router-dom';
import { GiPayMoney } from "react-icons/gi";
import { HiMiniArrowTrendingUp, HiMiniArrowTrendingDown  } from "react-icons/hi2";
import { FaUserGraduate } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";





const TestSeries = () => {
    const navigate = useNavigate()
    const dummyData = [
        {
            username: "Chandra Kanth",
            paymentmode: "UPI Payment",
            purchasedcourse: "Course 1",
            price: "Rs. 1599.05/-",
            paymentID: "DBT_e86de136",
        },
        {
            username: "Chandra Kanth",
            paymentmode: "UPI Payment",
            purchasedcourse: "Course 1",
            price: "Rs. 1599.05/-",
            paymentID: "DBT_e86de136",
        },
        {
            username: "Chandra Kanth",
            paymentmode: "UPI Payment",
            purchasedcourse: "Course 1",
            price: "Rs. 1599.05/-",
            paymentID: "DBT_e86de136",
        },
        {
            username: "Chandra Kanth",
            paymentmode: "UPI Payment",
            purchasedcourse: "Course 1",
            price: "Rs. 1599.05/-",
            paymentID: "DBT_e86de136",
        },
        {
            username: "Chandra Kanth",
            paymentmode: "UPI Payment",
            purchasedcourse: "Course 1",
            price: "Rs. 1599.05/-",
            paymentID: "DBT_e86de136",
        },
        {
            username: "Chandra Kanth",
            paymentmode: "UPI Payment",
            purchasedcourse: "Course 1",
            price: "Rs. 1599.05/-",
            paymentID: "DBT_e86de136",
        },
        {
            username: "Chandra Kanth",
            paymentmode: "UPI Payment",
            purchasedcourse: "Course 1",
            price: "Rs. 1599.05/-",
            paymentID: "DBT_e86de136",
        },
        {
            username: "Chandra Kanth",
            paymentmode: "UPI Payment",
            purchasedcourse: "Course 1",
            price: "Rs. 1599.05/-",
            paymentID: "DBT_e86de136",
        },
        {
            username: "Chandra Kanth",
            paymentmode: "UPI Payment",
            purchasedcourse: "Course 1",
            price: "Rs. 1599.05/-",
            paymentID: "DBT_e86de136",
        },
        {
            username: "Chandra Kanth",
            paymentmode: "UPI Payment",
            purchasedcourse: "Course 1",
            price: "Rs. 1599.05/-",
            paymentID: "DBT_e86de136",
        },
    ];

    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Payments</h6>
                </div>
                <div className='payments-container'>
                    <div className='payments-top'>
                        <div className='payments-div'>
                            <div className='payments-div-top'>
                                <div className='payments-div-left'>
                                    <h6>Total Income</h6>
                                    <h3>₹ 16,900</h3>
                                </div>
                                <div className='payments-div-right'>
                                    <GiPayMoney />
                                </div>
                            </div>
                            <div className='payments-div-bottom'>
                                <HiMiniArrowTrendingUp />
                                <p><span>8.5%</span> Up from last week</p>
                            </div>
                        </div>
                        <div className='payments-div'>
                            <div className='payments-div-top'>
                                <div className='payments-div-left'>
                                    <h6>Total Expenses</h6>
                                    <h3>₹ 12,000</h3>
                                </div>
                                <div className='payments-div-right expenses'>
                                    <GiPayMoney />
                                </div>
                            </div>
                            <div className='payments-div-bottom expenses'>
                                <HiMiniArrowTrendingDown  />
                                <p><span>8.5%</span> Down from last week</p>
                            </div>
                        </div>
                        <div className='payments-div'>
                            <div className='payments-div-top'>
                                <div className='payments-div-left'>
                                    <h6>Total Users</h6>
                                    <h3>31,269</h3>
                                </div>
                                <div className='payments-div-right user'>
                                    <FaUserGraduate />
                                </div>
                            </div>
                            <div className='payments-div-bottom expenses'>
                                <HiMiniArrowTrendingDown  />
                                <p><span>8.5%</span> Down from last year</p>
                            </div>
                        </div>
                    </div>
                    <div className='handwrittennotes-list'>
                    <div className='handwrittennotes-list-header'>
                        <Link to={'/vods/add-vod'} className='link'>
                            <div className='handwrittennotes-add'>
                                <FaPlus />
                                <h6>Add NEW payment</h6>
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
                                    <th>User Name</th>
                                    <th>Payment Mode</th>
                                    <th>Purchased Course</th>
                                    <th>Price</th>
                                    <th>Payment ID</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dummyData.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.username}</td>
                                        <td>{data.paymentmode}</td>
                                        <td>{data.purchasedcourse}</td>
                                        <td>{data.price}</td>
                                        <td>{data.paymentID}</td>
                                        <td>
                                            <div className="handwrittennotes-table-icons">
                                                <div className="handwrittennotes-icon">
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
            </div>
        </>
    )
}

export default HOC(TestSeries)