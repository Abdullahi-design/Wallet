// NavBar.js

import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { BsThreeDotsVertical, BsThreeDots } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { CiSquareMinus } from "react-icons/ci";
import { MdFileUpload } from "react-icons/md";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import './NavBar.css';

const NavBar = () => {
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div className="nav-bar">
        <IoIosArrowBack className='icon' />
        <h1>Bitcoin Wallet</h1>
        <div className="modal">
            <button className="toggle-button" onClick={() => setShowButtons(!showButtons)}>
            {showButtons ? <BsThreeDots className='icon' /> : <BsThreeDotsVertical className='icon' />}
            </button>
            {showButtons && (
            <div className="modal-content">
                <div className='item-icon'>
                    <h1>Edit</h1>
                    <FaRegEdit />
                </div>
                <div className='item-icon'>
                    <h1>Courier info</h1>
                    <CiSquareMinus />
                </div>
                <div className='item-icon'>
                    <h1>Share</h1>
                    <MdFileUpload />
                </div>
                <div className='remove'>
                    <h1 className='remove'>Remove</h1>
                    <IoIosRemoveCircleOutline />
                </div>
            </div>
            )}
        </div>
    </div>
  );
};

export default NavBar;
