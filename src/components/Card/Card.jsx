import React from 'react'
import { BsGeoAlt } from 'react-icons/bs'
import { FaGithubSquare, FaUser, FaUserFriends } from 'react-icons/fa'
import './Card.scss'


export const Card = ({ data }) => {
  const {avatar_url, name, login, location, bio, followers, following, html_url} = data
  return (
    <div className='card'>
      <div className='profile-card'>
        <img src={avatar_url} alt={name} />
        <div className='info-block'>
          <div className="profile-card__desc card-desc">
            <h1 className='card-desc__name'>{name}</h1>
            <div className='card-desc__nickname'><i>@ {login}</i></div>
            <div className='card-desc__location'>
              <BsGeoAlt />
              <span>{location ? location : "Russia"}</span>
            </div>
          </div>
          <div className='profile-card__info card-info'>
            <p className='card-info__bio'>{bio}</p>
            <div className="card-info__follow">
              <div className='info-follow__follower'>
                <FaUser />
                <span>{followers} follower</span>
              </div>
              <div className='info-follow__following'>
                <FaUserFriends />
                <span>{following} following</span>
              </div>
            </div>
          </div>
          <div className="profile-card__social">
            <a href={html_url} target="_blank"><FaGithubSquare size={40} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
