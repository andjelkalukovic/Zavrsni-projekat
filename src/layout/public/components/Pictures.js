import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from './Images/img1.jpg'
import img2 from './Images/img4.jpg'
import img3 from './Images/img12.jpg'
import img4 from './Images/img14.jpg'
import img5 from './Images/img3.jpg'
import img6 from './Images/img6.jpg'
import img7 from './Images/jpg7.jpg'
import img8 from './Images/img1515.jpg'
import img9 from './Images/img10.jpg'


export default class Pictures extends React.Component{ // eslint-disable-next-line
    constructor(){
        super();
    }
    render (){
        return (
            <Carousel style={{width:'330px', height:'440px'}}>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={img1}
                            alt="slide one"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={img2}
                            alt="slide two"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={img3}
                            alt="slide three"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={img4}
                            alt="slide four"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={img5}
                            alt="slide five"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={img6}
                            alt="slide six"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={img7}
                            alt="slide seven"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={img8}
                            alt="slide eight"
                            />
                        </Carousel.Item><Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={img9}
                            alt="slide nine"
                            />
                        </Carousel.Item>
                    </Carousel>
        )
    }
}