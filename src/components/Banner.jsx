import React from 'react'

function Banner() {
    return (
        <>
            <section className='spacer'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 offset-lg-4">
                            <div className="banner-item">
                                <div className="banner-item-pic">
                                    <img src={require('../image/banner-1.jpg')} alt="" />
                                </div>
                                <div className="banner-item-text">
                                    <h2>Clothing Collections 2030</h2>
                                    <a href="#">SHOP NOW</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-item banner-item-middle">
                                <div className="banner-item-pic">
                                    <img src={require('../image/banner-2.jpg')} alt="" />
                                </div>
                                <div className="banner-item-text">
                                    <h2>Accessories</h2>
                                    <a href="#">SHOP NOW</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="banner-item banner-item-last">
                                <div className="banner-item-pic">
                                    <img src={require('../image/banner-3.jpg')} alt="" />
                                </div>
                                <div className="banner-item-text">
                                    <h2>Shoes Spring 2030</h2>
                                    <a href="#">SHOP NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
