import './post.scss'

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Comments from '../comments/Comments';


const Post = ({post}) => {
    const [like,setLike]=useState(false);
    const[open,setOpen]=useState(false)
  return (
    <div className='post'>
        <div className='container'>

            <div className='user'>
                <div className='userInfo'>
                    <img src={post.profilePic} alt="Pro-Img" />
                    <div className='details'>
                        <Link to={`/profile/${post.userId}`} style={{textDecoration:"none",color:"inherit"}}>
                        <span className='name'>{post.name}</span>
                        </Link>
                        <span className='date'>1 min ago</span>
                    </div>
                </div>
                <MoreHorizIcon/>
            </div>
            {/* user Div End */}
            
            <div className='content'>
                <p>{post.desc}</p>
                <img src={post.img} alt="" />
            </div>

            <div className='info'>
                <div className='item' onClick={()=>setLike(!like)}>
                    {like? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/> } 12 Likes
                </div>
                <div className='item' onClick={()=>setOpen(!open)}>
                    <TextsmsOutlinedIcon/> 12 comments
                </div>
                <div className='item'> <ShareOutlinedIcon/> share</div>
            </div>
            {open ? <Comments/>:null}
        </div>      
    </div>
  )
}

export default Post 
