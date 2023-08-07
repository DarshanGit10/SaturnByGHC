import React from 'react'
import img1 from '../../Assets/UnderstandingHair/Rectangle 27854.png'
import img2 from '../../Assets/UnderstandingHair/Rectangle 27854 (1).png'
import img3 from '../../Assets/UnderstandingHair/Rectangle 27854 (2).png'
import img4 from '../../Assets/UnderstandingHair/Rectangle 27854 (3).png'
import SliderGroup2 from '../SliderGroup2/SliderGroup2'

const hairProductData = [{
    id: 1,
    img: img1,
    text: "Groom to Perfection: Aloe Vera Hair Mask for Men's Hair Care"
},
{
    id: 2,
    img: img2,
    text: "Coffee for Hair Growth: Brew Up Longer, Thicker Hair with Coffee"
},
{
    id: 3,
    img: img3,
    text: 'Maximizing Hair Growth and Health: 7 Benefits of Biotin Hair Gummies'
},
{
    id: 4,
    img: img4,
    text: "Vitamin E tabs for hair: Get Lustrous Hair In No Time!"
}
]

const UnderstandingHair = () => {
    return (
        <>
            <div className='bestseller'>
                <p>Understanding Hair</p>
                <button>View all</button>
            </div>

            <SliderGroup2 data={hairProductData} />

        </>
    )
}

export default UnderstandingHair