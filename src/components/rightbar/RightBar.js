import React from 'react'
import "./rightbar.scss"

const RightBar = () => {
  return (
    <div className='rightbar'>
      <div className='container'>
        <div className='item'>
          <span>Suggestions For You</span>
          <div className='user'>
            <div className='user-Info'>
              <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <span>Jane Doe</span>
            </div>
            <div className='buttons'>
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>

          <div className='user'>
            <div className='user-Info'>
              <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <span>Jane Doe</span>
            </div>
            <div className='buttons'>
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>

        <div className='item'>
          <span>Latest Activites</span>
          <div className='user'>
            <div className='user-Info'>
               <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <p><span>Jane Doe</span> changed picture</p>            
            </div>
            <span>1 min ago</span>
          </div>
          <div className='user'>
            <div className='user-Info'>
               <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <p><span>Jane Doe</span> liked comment</p>            
            </div>
            <span>2 min ago</span>
          </div>
          <div className='user'>
            <div className='user-Info'>
               <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <p><span>Jane Doe</span> comment posted</p>            
            </div>
            <span>5 min ago</span>
          </div>
          <div className='user'>
            <div className='user-Info'>
               <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <p><span>Jane Doe</span> comments send</p>            
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        
        <div className='item'>
          <span>Online Friends</span>
          <div className='user'>
            <div className='user-Info'>
            <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <div className='online'/>  
             <span>John</span> 
            </div>
          </div>
          <div className='user'>
            <div className='user-Info'>
            <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <div className='online'/>  
             <span>Antony</span> 
            </div>
          </div>
          <div className='user'>
            <div className='user-Info'>
            <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <div className='online'/>  
             <span>Manikandan</span> 
            </div>
          </div>
          <div className='user'>
            <div className='user-Info'>
            <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <div className='online'/>  
             <span>Surya</span> 
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default RightBar
