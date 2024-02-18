import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { FaArrowRight, FaFacebookF, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'

function Slider() {
    return (
        <>
            <section className='py-3'>
                <Carousel>
                    <Carousel.Item>
                        <div className='slider-img' text="First slide">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-5 col-lg-7 col-md-8">
                                        <h6 className='txtRedtxt text-uppercase'>Summer Collection</h6>
                                        <h2>Fall - Winter Collections 2030</h2>
                                        <p>
                                            A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                            commitment to exceptional quality.
                                        </p>
                                        <a href="#" className='bgBlack slider-primary-btn'>Shop now <FaArrowRight /></a>
                                        <div className="slider-social-icon">
                                            <a href="#"><FaFacebookF /></a>
                                            <a href="#"><FaTwitter /></a>
                                            <a href="#"><FaPinterest /></a>
                                            <a href="#"><FaInstagram /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='slider-img2' text="Second slide">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-5 col-lg-7 col-md-8">
                                        <h6 className='txtRedtxt text-uppercase'>Summer Collection</h6>
                                        <h2>Fall - Winter Collections 2030</h2>
                                        <p>
                                            A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                            commitment to exceptional quality.
                                        </p>
                                        <a href="#" className='bgBlack slider-primary-btn'>Shop now <FaArrowRight /></a>
                                        <div className="slider-social-icon">
                                            <a href="#"><FaFacebookF /></a>
                                            <a href="#"><FaTwitter /></a>
                                            <a href="#"><FaPinterest /></a>
                                            <a href="#"><FaInstagram /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>
        </>
    )
}

export default Slider
