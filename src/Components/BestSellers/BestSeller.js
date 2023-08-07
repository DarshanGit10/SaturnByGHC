import React from 'react';
import './BestSeller.css';
import wishlistImg from '../../Assets/BestSeller/ic_favorite_24px.svg';
import productImg from '../../Assets/BestSeller/Rectangle 27656.svg';
import SliderGroup3 from '../SliderGroup3/SliderGroup3';

const obj = { img: productImg, star: wishlistImg };
const repeatedData = Array(8).fill(obj);

const BestSeller = () => {
    return (
        <>
            <div className='bestseller'>
                <p>Bestsellers</p>
                <button>View all</button>
            </div>
            <SliderGroup3 data={repeatedData} />
        </>
    );
}

export default BestSeller;
