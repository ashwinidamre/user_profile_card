import React from 'react'
import './UserProfileCard.css'
import profile_icon from '../Assets/image.jpg'
import profile_icon1 from '../Assets/image1.jpg'


const UserProfileCard = () => {
  return (
    <div className="container">
    
    <div className="upc">
      <div className="gradiant"></div>
      <div className='profile-down'>
        <img src={profile_icon} alt=" " />
        <div className='textcontain'>
        <span>Elon Musk</span>
        <p>
         Elon musk is the founder, chairman and chief executive officer of SpaceX,CEO  ad product architect of Tesla Inc. owner and CTO of Twitter
         
        </p>
        <div className="profie_button"><button className="profile_btn"><a href="#">Contact</a></button></div>
        </div>
      </div>
    </div>
    <div className="upc">
      <div className="gradiant"></div>
      <div className='profile-down'>
        <img src={profile_icon1} alt=" " />
        <div className='textcontain'>
        <span>Ratan N. Tata</span>
        <p>Sir Ratan Naval Tata is an Indian industrialist, philanthropist and former chairman of Tata Sons. He was a chairman of the Tata Group
         
        </p>
        <div className="profie_button"><button className="profile_btn"><a href="#">Contact</a></button></div>
        </div>
      </div>
    </div>
   
    </div>
  )
}

export default UserProfileCard
