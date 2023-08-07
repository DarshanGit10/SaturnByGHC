import './InstaBar.css';
import React from 'react';
import img from '../../Assets/skill-icons_instagram.png';

const InstaBar = () => {
    const instaUrl = "https://www.instagram.com/saturnhealth.ghc/";

    return (
        <div className='bar'>
            <a href={instaUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', width: '100%' }}>
                <img src={img} alt="Instagram Icon" className='insta' />
                <span className='instaText'>Join our 10K family on Instagram</span>
                <span className='instaGreaterThan'> {`>`} </span>
            </a>
        </div>
    )
}

export default InstaBar;
