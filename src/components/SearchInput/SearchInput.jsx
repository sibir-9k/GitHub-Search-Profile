import React from 'react'
import { BsGithub } from 'react-icons/bs'
import './SearchInput.scss'


export const SearchInput = ({ onChange, onClick }) => {
  return (
    <div className='search-input'>
      <h1>GitHub Search Profile</h1>
      <div className='search-input__form'>
        <input type="text" placeholder='enter your github profile nickname' onChange={onChange} />
        <button onClick={onClick}>Search <BsGithub /></button>
      </div>
    </div>
  )
}
