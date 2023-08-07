import React, { useEffect } from 'react'
import starImg from '../../Assets/BestSeller/ic_round-star.svg';
import tagImg from '../../Assets/BestSeller/Rectangle 27652.svg';
import './SliderGroup3.css'
import useScroll from '../useScroll';

const SliderGroup3 = ({ data }) => {
    const { scrollContainer, initializeScroll } = useScroll();

    useEffect(() => {
        if (scrollContainer.current) {
            initializeScroll();
        }
    }, [scrollContainer, initializeScroll]);

    return (
        <>
            <div className="productsContainer" ref={scrollContainer}>
                {data.map((e, i) => (
                    <div className='productsBest' key={i}>
                        <div className='productsImgs'>
                            <img src={e.img} alt="productImg" className='productImg' />
                            <img src={tagImg} alt="tagImg" className='tagImg' />
                            <p className='tagPrice'>-40%</p>
                            <img src={e.star} alt="wishlistImg" className='wishlistImg' />
                        </div>
                        <div className="productsDetails">
                            <p className='text'>Anti-ageing Combo</p>
                            {[...Array(5)].map((e, i) => <img key={i} src={starImg} alt="star" />)}
                            <span>(4.7)</span>
                            <p className='price'>Rs. 999 <del>Rs. 1,598</del></p>
                        </div>
                    </div>
                ))}
            </div>
            <br />
        </>
    );
}

export default SliderGroup3