import React from 'react'
import { FaRegEnvelope, FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer className='footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-about mb-4">
                                <div className="footer-logo mb-4">
                                    <Link to="/" className='d-inline-block'>
                                        <img src={require('../image/footer-logo.png')} alt="logo" />
                                    </Link>
                                </div>
                                <p>The customer is at the heart of our unique business model, which includes design.</p>
                                <a href="#">
                                    <img src={require('../image/payment.png')} alt="pay" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                            <div className="footer-widget mb-4">
                                <h6>Shopping</h6>
                                <ul className='p-0 m-0'>
                                    <li><a href="#">Clothing Store</a></li>
                                    <li><a href="#">Trending Shoes</a></li>
                                    <li><a href="#">Accessories</a></li>
                                    <li><a href="#">Sale</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="footer-widget mb-4">
                                <h6>Shopping</h6>
                                <ul className='p-0 m-0'>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Payment Methods</a></li>
                                    <li><a href="#">Delivary</a></li>
                                    <li><a href="#">Return & Exchanges</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                            <div className="footer-widget mb-4">
                                <h6>NewLetter</h6>
                                <div className="footer-newslatter">
                                    <p>Be the first to know about new arrivals, look books, sales & promos!</p>
                                    <form action="#" className='position-relative'>
                                        <input type="text" placeholder="Your email" />
                                        <button type='submit'><FaRegEnvelope /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="footer-copyright-text">
                                <p>
                                    Copyright © 20232020
                                    All rights reserved | This template is made with <FaRegHeart className='txtRedtxt' /> by <a href="#" className='txtRedtxt'>Colorlib</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
