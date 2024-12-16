import React from 'react'
import './Navbar.css'

import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";


import img from '../../assest/profile.png'
import { useNavigate } from 'react-router-dom';

const Navbar = ({ toggleSidebar, text }) => {
    const navigate = useNavigate()
    return (
        <>
            <div className='navbarcontainer'>
                <div className='navbarleft'>
                    <div className='navbarleftsearch'>
                        <IoSearch color='#718EBF' size={20} />
                        <input type="search" placeholder='Search for something' />
                    </div>
                </div>
                <div className='navbarright'>
                    <div className='navbarsetting'>
                        <IoNotificationsOutline color='#FE5C73' size={25} />
                    </div>
                    <div className='navprofile' onClick={() => navigate('/profile')}>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar