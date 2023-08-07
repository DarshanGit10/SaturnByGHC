import React from 'react'
import SliderGroup3 from '../SliderGroup3/SliderGroup3'
import productImg from '../../Assets/BestSeller/Rectangle 27656.svg';
import wishListRed from '../../Assets/HairCare/ic_favorite_24px.png'
import wishListBlank from '../../Assets/BestSeller/ic_favorite_24px.svg'

const product1 = {
  img: productImg,
  star: wishListRed
}
const product2 = {
  img: productImg,
  star: wishListBlank
}

const data = Array(8).fill(null).map((_, i) => i % 2 === 0 ? product1 : product2);
const SkinCare = () => {
  return (
    <>
      <div className='bestseller'>
        <p>Skin Care</p>
      </div>
      <SliderGroup3 data={data} />
    </>
  )
}

export default SkinCare