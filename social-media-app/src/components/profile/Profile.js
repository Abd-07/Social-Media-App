import React from 'react';
import './profile.css'
import profile_picture from '/Users/abdulazizsuleymanov/Desktop/Javascript/React/social-media-app/social-media-app/src/images/profile-pic.jpg'

function Profile() {
    return(
      <div className='profile'>
      <div className='me'>
        <img src={profile_picture} alt="profile img"/>
        <p>Elon Musk</p>
      </div>
      <div className='posts'>
        <input placeholder='Enter the post'/>
        <button>Add post</button>
        <div className='post'>
        <img src={profile_picture} alt="profile img"/>
        <span>Elon Musk</span>
        <h3>Description</h3>
        <p>Status : Available</p>
        <p>Location : NewYork City, NewYork, USA</p>
        </div>
        </div>
      </div>
    )
  }

export default Profile;