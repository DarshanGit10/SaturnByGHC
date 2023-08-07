import React from 'react'
import './InstaBar.css'

const TrackBar = () => {
    const url = "https://saturn.health/"
    return (
        <div className='barTrack'>
            <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', width: '100%' }}>
                <span className='instaText'>View all trackers </span>
                <span className='instaGreaterThan'> {`>`} </span>
            </a>
        </div>
    )
}

export default TrackBar