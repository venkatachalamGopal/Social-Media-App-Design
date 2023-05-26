import './comments.scss'

import React from 'react'

const Comments = () => {
    const comments=[
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
            name: "John Doe",
            userId: 1,
            profilePicture:
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          },
          {
            id: 2,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
            name: "Jane Doe",
            userId: 2,
            profilePicture:
              "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
          }
    ];

  return (

    <div className='comments'>
        <div className='write'>
            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <input type="text" />
            <button>send</button>
        </div>
        {comments.map((comment)=>(
            <div className='comment' key={comment.id}>
                <img src={comment.profilePicture} alt="" />
                <div className='info'>
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span>1 Min ago</span>

            </div>
        ))}
      
    </div>
  )
}

export default Comments
