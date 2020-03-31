import React, { useState } from 'react'
import './Pictures.css'
import ImgList from './ImgList'
import img1 from './Images/img1.jpg'
import img2 from './Images/img2.jpg'
import img3 from './Images/img12.jpg'
import img4 from './Images/img14.jpg'
import img5 from './Images/img3.jpg'
import img6 from './Images/img6.jpg'
import img7 from './Images/jpg7.jpg'
import img8 from './Images/img8.jpg'
import img9 from './Images/img4.jpg'
import img10 from './Images/img10.jpg'
import img11 from './Images/img11.jpg'
import img12 from './Images/img1515.jpg'

const Pictures = ()=>{
    let picArr=[<ImgList src={img1}/>,
        <ImgList src={img2}/>,
        <ImgList src={img3}/>,
        <ImgList src={img4}/>,
        <ImgList src={img5}/>,
        <ImgList src={img6}/>,
        <ImgList src={img7}/>,
        <ImgList src={img8}/>,
        <ImgList src={img9}/>,
        <ImgList src={img10}/>,
        <ImgList src={img11}/>,
        <ImgList src={img12}/>,]

    const [x, setX]=useState(0)
        //const [item, setItem]=useState(0)
    const goLeft=()=>{
        console.log(x);
        //setItem((item-1)%picArr.length)
         x===0 ? setX(-100 *(picArr.length -1)) : setX(x+100)

    }
    const goRight=()=>{
        //setItem((item+1)%picArr.length)
        console.log(x);
         (x===-100*(picArr.length-1)) ? setX(0): setX(x-100)
    }
    return (
        <div className='slider'>
            {picArr.map((item,index)=>{
                return(
                    <div key={index} className='slide' 
                    style={{transform:`translateX(${x}%)`}}
                    >
                        {item}
                        </div>
                )
            })}
            <button className='goLeft' onClick={goLeft}>left</button>
            <button className='goRight' onClick={goRight}>right</button>
        </div>
    )
}
export default Pictures;