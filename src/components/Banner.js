import React from 'react';
import '../styles/Banner.css';
import logo from '../assets/logo.png';

const Banner = () => {
  const title = 'La maison jungle'
  return (
    <div className='lmj-banner'>
      <img className='lmj-logo' src={ logo } alt="Logo lmj" />
      <h1>{title}</h1>
    </div>
  )
}

export default Banner