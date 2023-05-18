import React,{useEffect, useState} from 'react'
import './Profile.css'
import {BASE_URL} from '../services/helper'
const Profile = () => {
  const [data,setdata]=useState(null)
  const onProfileTextClick = ()=>{}

  const onEditProfileTextClick = ()=>{}

  const onMyNetworkTextClick = ()=>{}

  const onNeedHelpTextClick = ()=>{}
useEffect(()=>{
  fetch(`${BASE_URL}/profile`)
      .then(response => {
        response.json().then(Info => {
          setdata(Info);
        });
      });
},[])

  return (
    <div className="profile-main">
    <img className="vector-icon" alt="" src="/vector.svg" />
    <div className="profile-main-child" />
    <div className="profile-main-item" />
    <div className="profile-main-inner" />
    <img className="vector-icon1" alt="" src="/vector.svg" />
    <img className="image-2-icon" alt="" src="/image-2@2x.png" />
    <img className="ellipse-icon" alt="" src="/ellipse-1@2x.png" />
    <div className="snigdha-dash">{data}</div>
    <div className="dashboard">Dashboard</div>
    <div className="profile" onClick={onProfileTextClick}>
      Profile
    </div>
    <div className="edit-profile" onClick={onEditProfileTextClick}>
      Edit Profile
    </div>
    <div className="my-network" onClick={onMyNetworkTextClick}>
      My network
    </div>
    <div className="need-help" onClick={onNeedHelpTextClick}>
      Need Help?
    </div>
    <div className="logout">Logout</div>
    <div className="line-div" />
    <div className="wireframe-13-child1" />
    <div className="live-deals">Live Deals</div>
    <div className="most-funded">Most Funded</div>
  </div>
  )
}

export default Profile