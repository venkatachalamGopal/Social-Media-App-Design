import "./stories.scss"

import React from 'react'

const Stories = () => {

    const stories=[
        {
            id: 1,
            name: "John Doe",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
          },
          {
            id: 2,
            name: "John Doe",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
          },
          {
            id: 3,
            name: "John Doe",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
          },
          {
            id: 4,
            name: "John Doe",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
          },
    ]

  return (
    <div className="stories">
        <div className="story">
            <img src="https://images.pexels.com/photos/6485032/pexels-photo-6485032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Nature" />
            <span>Venkat</span>
            <button>+</button>
        </div>
        
        {stories.map(story=>
            <div className="story" key={story.id}>
                <img src={story.img} alt="nature" />
                <span>John Doe</span>
            </div>
            )}
      
    </div>
  )
}

export default Stories
