import React, { useEffect, useState } from 'react'

function Category() {

    const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const countDownDate = new Date("Dec 28, 2023 15:37:25").getTime();

        const intervalId = setInterval(function () {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            if (distance < 0) {
                clearInterval(intervalId);
                setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeRemaining({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <section className='category'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="category-text pt-5">
                                <h2>
                                    Clothings Hot
                                    <br />
                                    <span>Shoe Collection</span>
                                    <br />
                                    Accessories
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="category-hot-deal">
                                <img src={require('../image/product-sale.png')} alt="sale" />
                                <div className="hot-deal-sticker">
                                    <span>Sale Of</span>
                                    <h5>$29.99</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1">
                            <div className="category-deal-countdown">
                                <span>Deal Of The Week</span>
                                <h2>Multi-pocket Chest Bag Black</h2>
                                <div className="deal-countdown-timer">
                                    <div className="cd-item"><span>{timeRemaining.days}</span> <p className='mb-0'>Days</p> </div>
                                    <div className="cd-item"><span>{timeRemaining.hours}</span> <p className='mb-0'>Hours</p> </div>
                                    <div className="cd-item"><span>{timeRemaining.minutes}</span> <p className='mb-0'>Minutes</p> </div>
                                    <div className="cd-item"><span>{timeRemaining.seconds}</span> <p className='mb-0'>Seconds</p> </div>
                                    {/* <div>
                                        {timeRemaining.days > 0 && (
                                            <span>{timeRemaining.days}d </span>
                                        )}
                                        {timeRemaining.hours > 0 && (
                                            <span>{timeRemaining.hours}h </span>
                                        )}
                                        {timeRemaining.minutes > 0 && (
                                            <span>{timeRemaining.minutes}m </span>
                                        )}
                                        {timeRemaining.seconds > 0 && (
                                            <span>{timeRemaining.seconds}s </span>
                                        )}
                                        {timeRemaining.days === 0 && timeRemaining.hours === 0 && timeRemaining.minutes === 0 && timeRemaining.seconds === 0 && (
                                            <span>EXPIRED</span>
                                        )}
                                    </div> */}
                                </div>
                                <a href="#" className='bgBlack slider-primary-btn'>Shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Category
