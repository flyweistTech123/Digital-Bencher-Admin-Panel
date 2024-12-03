import React from 'react'
import HOC from '../../components/HOC/HOC'

import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { IoImageOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import Pagination from '../../components/Pagination/Pagination';


const HandwrittenNotes = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardcontainer-header'>
                    <h6>Handwritten Notes Page Content</h6>
                    <p>
                        <GoArrowLeft
                            size={25}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(-1)}
                        />
                        Dashboard /<span>  Handwritten Notes</span>
                    </p>
                </div>
                <div className='homepagecontent'>
                    <div className='studyplanner-container'>
                        <div className='homepagecontent-left-header'>
                            <h6>Hero Image</h6>
                        </div>
                        <div className='studyplanner-image'>
                            <IoImageOutline />
                        </div>
                        <div className='handwritten-notes'>
                            <p>Note* ( Image size should be less than 20mb )</p>
                            <p>Image format should be PNG, JPEG or SVG*</p>
                        </div>
                        <div className='handwritten-button'>
                            <button>Upload New Image</button>
                        </div>
                    </div>
                </div>
                <div className='handwrittennotes-list'>
                    <div className='handwrittennotes-list-header'>
                        <div className='handwrittennotes-add'>
                            <FaPlus />
                            <h6>Add NEW Notes</h6>
                        </div>
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
                                    <th>Notes Name</th>
                                    <th>Toppers Name</th>
                                    <th>Pages count</th>
                                    <th>Sub Topic Count</th>
                                    <th>Rating</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>GATE SCA Digital Logic</td>
                                    <td>Chandra Kanth</td>
                                    <td>12 pages</td>
                                    <td>16 sub topics</td>
                                    <td>★★★★☆</td>
                                    <td>
                                        <div className='handwrittennotes-table-icons'>
                                            <div className='handwrittennotes-icon'>
                                                <MdArrowOutward />
                                            </div>
                                            <div className='handwrittennotes-icon'>
                                                <FiEdit3 />
                                            </div>
                                            <div className='handwrittennotes-icon'>
                                                <AiOutlineDelete />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>GATE SCA Digital Logic</td>
                                    <td>Chandra Kanth</td>
                                    <td>12 pages</td>
                                    <td>16 sub topics</td>
                                    <td>★★★★☆</td>
                                    <td>
                                        <div className='handwrittennotes-table-icons'>
                                            <div className='handwrittennotes-icon'>
                                                <MdArrowOutward />
                                            </div>
                                            <div className='handwrittennotes-icon'>
                                                <FiEdit3 />
                                            </div>
                                            <div className='handwrittennotes-icon'>
                                                <AiOutlineDelete />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <Pagination />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(HandwrittenNotes)