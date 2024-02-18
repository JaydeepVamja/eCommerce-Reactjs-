import { Rating } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productCall } from '../app/feature/productApi';
import { Link } from 'react-router-dom';
import { addItem } from '../app/feature/cart';

function Product() {

    const dispatch = useDispatch();

    const { isLoading, data } = useSelector((state) => state.api);

    useEffect(() => {
        dispatch(productCall())
    }, [])

    const addCartItem = (cart) => {
        dispatch(addItem(cart))
    }

    if (isLoading) {
        return <div className='d-flex justify-content-center'>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    return (
        <>
            <section className='spacer'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="filter-controls">
                                <li className='active mixitup-control-active' data-filter="*">Best Sellers</li>
                                <li data-filter=".new-arrivals">New Arrivals</li>
                                <li data-filter=".hot-sales">Hot Sales</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row product-filter">
                        {
                            data && data.products?.slice(0, 12)?.map((ele, index) => (
                                <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                                    <div className="product-item">
                                        <Link to={`/product_details/${ele.id}`} className='text-black'>
                                            <div className="product-item-pic">
                                                <img src={ele.thumbnail} alt={ele.name} />
                                                <ul className='product-hover'>
                                                    <li><a href="#"><img src={require('../image/heart.png')} alt="" /></a></li>
                                                    <li><a href="#"><img src={require('../image/compare.png')} alt="" /></a></li>
                                                    <li><a href="#"><img src={require('../image/search.png')} alt="" /></a></li>
                                                </ul>
                                            </div>
                                        </Link>
                                        <div className="product-item-text">
                                            <h6>{ele.title}</h6>
                                            <Link className='add-cart' onClick={() => addCartItem(ele)}>+ Add To Cart</Link>
                                            <div className="rating">
                                                <Rating name="size-small" defaultValue={ele.rating} size="small" />
                                            </div>
                                            <h5 className='fw-bolder'>${ele.price}.00</h5>
                                            <div className="product-color-select">
                                                <label htmlFor="pc-1">
                                                    <input type="radio" id='pc-1' />
                                                </label>
                                                <label htmlFor="pc-2" className='black'>
                                                    <input type="radio" id='pc-2' />
                                                </label>
                                                <label htmlFor="pc-3" className='gray'>
                                                    <input type="radio" id='pc-3' />
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product
