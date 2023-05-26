import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {
    const{darkMode,toggle}=useContext(DarkModeContext)
  return (
    <div className='navbar'>
      <div className='left'>
        <Link to="/" style={{textDecoration:'none'}}>
        <span>Social Media</span>
        </Link >
        <HomeOutlinedIcon/>
        {darkMode?(<WbSunnyOutlinedIcon onClick={toggle} />):(<DarkModeOutlinedIcon onClick={toggle} />)}

        <GridViewOutlinedIcon/>
        <div className='search'>
          <SearchOutlinedIcon/>
          <input type="text" placeholder='Search....' />
        </div>
      </div>
      <div className='right'>
        <PersonOutlineOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsOutlinedIcon/>
        <div className='user'>
          <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="People" />
          <span>venkat</span>
        </div>
      </div>
        
      
    </div>
  )
}

export default Navbar
