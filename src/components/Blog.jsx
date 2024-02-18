import React from 'react'

function Blog() {
    return (
        <>
            <section className='pt-3 pb-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Latest News</span>
                                <h2>Fashion New Trends</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-item">
                                <div className="blog-item-pic set-bg"></div>
                                <div className="blog-item-text">
                                    <span><img src={require('../image/calendar.png')} alt="clnder" />  16 February 2020</span>
                                    <h5>What Curling Irons Are The Best Ones</h5>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-item">
                                <div className="blog-item-pic set-bg1"></div>
                                <div className="blog-item-text">
                                    <span><img src={require('../image/calendar.png')} alt="clnder" />   21 February 2020</span>
                                    <h5>Eternity Bands Do Last Forever</h5>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-item">
                                <div className="blog-item-pic set-bg2"></div>
                                <div className="blog-item-text">
                                    <span><img src={require('../image/calendar.png')} alt="clnder" />  28 February 2020</span>
                                    <h5>The Health Benefits Of Sunglasses</h5>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog
