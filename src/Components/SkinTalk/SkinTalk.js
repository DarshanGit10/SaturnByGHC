import React from 'react'
import SliderGroup2 from '../SliderGroup2/SliderGroup2'
import img1 from '../../Assets/SkinTalk/Rectangle 27854.png'
import img2 from '../../Assets/SkinTalk/Rectangle 27854 (1).png'
import img3 from '../../Assets/SkinTalk/Rectangle 27854 (2).png'
import img4 from '../../Assets/SkinTalk/Rectangle 27854 (3).png'

const skinTalkData = [{
    id: 1,
    img: img1,
    text: "6 Surprising Benefits of Washing Your Face with Salt Water"
},
{
    id: 2,
    img: img2,
    text: "Get Clear, Radiant Skin with these 9 Benefits of Honey for Pimples"
},
{
    id: 3,
    img: img3,
    text: 'Everything you need to know about Saffron Benefits for Skin'
},
{
    id: 4,
    img: img4,
    text: "Natural ways to remove tan from hands"
}
]

const SkinTalk = () => {
    return (
        <>
            <div className='bestseller'>
                <p>Skin - Talk</p>
            </div>
            <SliderGroup2 data={skinTalkData} />
        </>
    )
}

export default SkinTalk