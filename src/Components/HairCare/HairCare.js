import React from 'react'
import img1 from '../../Assets/HairCare/Rectangle 27656 (2).png'
import img2 from '../../Assets/HairCare/Rectangle 27656 (1).png'
import wishListRed from '../../Assets/HairCare/ic_favorite_24px.png'
import wishListBlank from '../../Assets/BestSeller/ic_favorite_24px.svg'
import SliderGroup3 from '../SliderGroup3/SliderGroup3'

const product1 = {
  img: img1,
  star: wishListRed
}
const product2 = {
  img: img2,
  star: wishListBlank
}

const data = Array(8).fill(null).map((_, i) => i % 2 === 0 ? product1 : product2);


const HairCare = () => {
  return (
    <>
      <div className='bestseller'>
        <p>Hair Care</p>
        <button>View all</button>
      </div>
      <SliderGroup3 data={data} />
    </>
  )
}

export default HairCare