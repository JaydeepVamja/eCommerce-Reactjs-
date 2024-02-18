import React from 'react'
import Banner from '../components/Banner';
import Blog from '../components/Blog';
import Category from '../components/Category';
import Instagram from '../components/Instagram';
import Product from '../components/Product';
import Slider from '../components/Slider';

function Home() {
    return (
        <>
            <Slider />
            <Banner />
            <Product />
            <Category />
            <Instagram />
            <Blog />
        </>
    )
}

export default Home
