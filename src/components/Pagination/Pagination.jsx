import React from 'react'
import './Pagination.css'

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";


const Pagination = () => {
    return (
        <>
            <div className='paginationcontainer'>
                <div className='pagination-div-disable'>
                    <MdKeyboardArrowLeft color='#ADB5BD' />
                </div>
                <div className='pagination-div-active'>
                    <span>1</span>
                </div>
                <div className='pagination-div'>
                    <span>2</span>
                </div>
                <div className='pagination-div'>
                    <span>3</span>
                </div>
                <div className='pagination-div'>
                    <span>4</span>
                </div>
                <div className='pagination-div'>
                    <MdKeyboardArrowRight color='#ADB5BD' />
                </div>
                <div className='pagination-div-limit'>
                    <select name="" id="">
                        <option value="">10</option>
                    </select>
                    <span>/Page</span>
                </div>
            </div>
        </>
    )
}

export default Pagination