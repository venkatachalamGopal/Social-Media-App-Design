import React from 'react'
import "./leftbar.scss"
import friends from "../../assets/Friends.jpg"
import group from "../../assets/group.jpg"
import marketpalce from "../../assets/marketplace.jpg"
import watch from "../../assets/watch.jpg"
import memories from "../../assets/memories.jpg"
import events from "../../assets/events.jpg"
import gaming from "../../assets/memories.jpg"
import gallery from "../../assets/gallery.jpg"
import videos from "../../assets/videos.jpg"
import message from "../../assets/message.jpg"
import fund from "../../assets/fund.jpg"
import tutorial from "../../assets/tutorial.jpg"
import course from "../../assets/course.jpg"

const LeftBar = () => {
  return (
    <div className='leftbar'>
      <div className='container'>
        <div className='menu'>
          <div className='user'>
            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="user" />
            <span>venkat</span>
          </div>
          <div className='item'>
            <img src={friends} alt="Friends" />
            <span>Friends</span>
          </div>
          <div className='item'>
            <img src={group} alt="Groups" />
            <span>Groups</span>
          </div>
          <div className='item'>
            <img src={marketpalce} alt="Marketplace" />
            <span>Marketplace</span>
          </div>
          <div className='item'>
            <img src={watch} alt="Watch" />
            <span>Watch</span>
          </div>
          <div className='item'>
            <img src={memories} alt="Memories" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className='menu'>
          <span>Your shortcuts</span>
          <div className='item'>
            <img src={events} alt="events" />
            <span>Events</span>
          </div>
          <div className='item'>
            <img src={gaming} alt="gaming" />
            <span>Gaming</span>
          </div>
          <div className='item'>
            <img src={gallery} alt="Gallery" />
            <span>Gallery</span>
          </div>
          <div className='item'>
            <img src={videos} alt="videos" />
            <span>Videos</span>
          </div>
          <div className='item'>
            <img src={message} alt="message" />
            <span>Messages</span>
          </div>
        </div>
        <hr />

        <div className='menu'>
          <span>Others</span>
          <div className='item'>
            <img src={fund} alt="Fund" />
            <span>Fund</span>
          </div>
          <div className='item'>
            <img src={tutorial} alt="Tutorials" />
            <span>Tutorials</span>
          </div>
          <div className='item'>
            <img src={course} alt="course" />
            <span>Courses</span>
          </div>

        </div>

      </div>
        
      
    </div>
  )
}

export default LeftBar
