import React from 'react'
import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left'>
          <Link to="/" style={{textDecoration: "none"}}>
            <span>mayansocial</span>
          </Link>
            <HomeOutlinedIcon/>
            <DarkModeOutlined/>
            <GridViewOutlinedIcon/>
            <div className="search">
                <SearchOutlinedIcon/>
                <input type="text" placeholder='Search...'></input>
            </div>
      </div>
      <div className='right'>
          <PersonOutlineOutlinedIcon/>
          <EmailOutlinedIcon/>
          <NotificationsOutlinedIcon/>
          <div className="user">
              {/* <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Profile" /> */}
              <span>Mayan Mishra</span>
          </div>
      </div>
    </div>
  )
}

export default Navbar
