import React from 'react';
import { FaShoppingCart, FaTruck, FaBan, FaUser, FaDollarSign, FaEnvelope, FaCog, FaBell } from 'react-icons/fa';
import { IoPersonCircle } from "react-icons/io5";
import { HiMiniHome } from "react-icons/hi2";
import { MdOutlineAnalytics } from "react-icons/md";
import { LuClipboardCheck } from "react-icons/lu";
import { LuWallet } from "react-icons/lu";
import { BsFillBagCheckFill } from "react-icons/bs";

import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <div className='header'>
        <div className='logo'>
        <div class="top-left"></div>
        <div class="top-right"></div>
        <div class="bottom-left"></div>
        <div class="bottom-right"></div>
          </div>
        <div className='side'>
          <HiMiniHome size={35} /> <br /> <br />
          <MdOutlineAnalytics size={35} /> <br /> <br />
          <LuClipboardCheck size={35} /> <br /> <br />
          <LuWallet size={35} /> <br /> <br />
          <BsFillBagCheckFill size={35}/>
        </div>
        <div className='search-bar'>
          <input type='text' placeholder='Search' />
        </div>
        <div className='nav'>
          <FaEnvelope />
          <FaCog />
          <FaBell />
          <IoPersonCircle size={35} />        </div>
      </div>
      <Dashboard />

    </div>
  );
};

export default App;
