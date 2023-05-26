import React from 'react'
import "./profile.scss"
import Posts from '../../components/posts/Posts';

import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Profile = () => {
  return (
    <div className='profile'>
      <div className='images'>
        <img className='cover' src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <img className='profilePic' src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
      </div>
      <div className='profileContainer'>
          <div className='uInfo'>
            <div className='left'>
              <a href="#"><FacebookTwoToneIcon fontSize='medium'/></a>
              <a href="#"><InstagramIcon fontSize='medium'/></a>
              <a href="#"><TwitterIcon fontSize='medium'/></a>
              <a href="#"><LinkedInIcon fontSize='medium'/></a>
              <a href="#"><PinterestIcon fontSize='medium'/></a>

            </div>
            <div className='center'>
              <span>Jane Doe</span>
              <div className='info'>
                <div className='item'>
                    <PlaceIcon/>
                    <span>place</span>
                </div>
                <div className='item'>
                    <LanguageIcon/>
                    <span>social.com</span>
                </div>
              </div>
              <button>follow</button>
            </div>
            <div className='right'>
              <EmailOutlinedIcon/>
              <MoreVertIcon/>

            </div>
          </div>
        <Posts/>
      
      </div>  


    </div>
  )
}

export default Profile
