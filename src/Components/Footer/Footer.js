import './Footer.css'
import React from 'react'
import img1 from '../../Assets/Footer/majesticons_home.png'
import img2 from '../../Assets/Footer/majesticons_home (1).png'
import img3 from '../../Assets/Footer/ph_magnifying-glass.png'
import img4 from '../../Assets/Footer/line-md_account.png'

const footerData = [{
    img: img1,
    text: "Home",
},
{
    img: img2,
    text: "Track"
},
{
    img: img3,
    text: "Search"
},
{
    img: img4,
    text: "Account"
}
]

const Footer = () => {
    return (
        <div className="footerNavbar">
            {footerData.map((item, index) => (
                <div key={index} className="navbarItem">
                    <img src={item.img} alt={item.text} className="navbarIcon" />
                    <p className='navbarText'>{item.text}</p>
                </div>
            ))}
        </div>
    );
}

export default Footer