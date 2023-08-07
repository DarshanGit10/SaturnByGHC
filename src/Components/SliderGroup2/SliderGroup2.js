import './SliderGroup2.css'
import React, { useEffect } from 'react'
import useScroll from '../useScroll';

const SliderGroup2 = ({ data }) => {
    const { scrollContainer, initializeScroll } = useScroll();

    useEffect(() => {
        if (scrollContainer.current) {
            initializeScroll();
        }
    }, [scrollContainer, initializeScroll]);

    return (
        <>
            <div className='productsHairContainer' ref={scrollContainer}>
                <div className="hairFrame">
                    {data.map(product => (
                        <div key={product.id} className="hairFrame">
                            <img src={product.img} alt={`Product ${product.id}`} className='productImgHair' />
                            <div className="overlay"></div>
                            <div className='hairText'>
                                <p className='hairText1'>{product.text}</p>
                                <p className='hairText2'>By Mars by GHC on Jun 22, 2022</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <br />
        </>
    )
}

export default SliderGroup2