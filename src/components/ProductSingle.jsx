import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { productDetails } from '../app/feature/productApi';
import { Rating } from '@mui/material';
import { FaAngleDown, FaAngleUp, FaExchangeAlt, FaHeart } from 'react-icons/fa';
import { addItem } from '../app/feature/cart';

function ProductSingle() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const { isLoading, data } = useSelector((state) => state.api);

    const [product, setProduct] = useState([])

    useEffect(() => {
        dispatch(productDetails(id))
    }, [dispatch, id]);

    useEffect(() => {
        if (data) {
            setProduct(data);
        }
    }, [data]);

    // quantity pluse or minus
    const [quantity, setQuantity] = useState(1);
    const incrementQty = () => {
        setQuantity(quantity + 1);
    };
    const decrementQty = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    // add to cart
    const addCartItem = () => {
        dispatch(addItem({ ...product, qty: quantity }));
        console.log(addItem({ ...product, qty: quantity }))
    }

    // Discount and Price
    const discount = (Math.round(product?.price * product?.discountPercentage) / 100).toFixed(2);
    const prices = parseInt(discount) + parseInt(product?.price);


    if (isLoading) {
        return <div className='d-flex justify-content-center py-5'>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    const handleImageClick = (image) => {
        setProduct({ ...data, thumbnail: image });
    }


    return (
        <>
            <section>
                <div className="shop-details">
                    <div className="product-details-pic">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="breadcrumb-link">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb justify-content-center">
                                                <li className="breadcrumb-item"><Link to="/" className='text-black'>Home</Link></li>
                                                <li className="breadcrumb-item"><Link to="/shop" className='text-black'>Shop</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Product Details</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-3 col-md-3">
                                    {product && product.images?.slice(0, 4)?.map((image, index) => (
                                        <ul className='product-images' key={index}>
                                            <li>
                                                <img
                                                    src={image}
                                                    alt="single"
                                                    onClick={() => handleImageClick(image)}
                                                />
                                            </li>
                                        </ul>
                                    ))}
                                </div>
                                <div className="col-lg-6 offset-lg-1 col-md-9">
                                    <div className="product-img-single">
                                        <div className="product-single-pic">
                                            <img src={product?.thumbnail} alt={product?.title} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-details-content">
                        <div className="container">
                            <div className='row d-flex justify-content-center'>
                                <div className="col-lg-8">
                                    <div className="product-details-text text-center">
                                        <h4>{product?.title}</h4>
                                        <div className='mb-4 d-flex justify-content-center align-items-center'>
                                            <Rating name="size-small" defaultValue={product?.rating} size="small" />
                                            <span> - {product?.rating} Reviews</span>
                                        </div>
                                        <h3>${product?.price}.00 <span>${prices}.00</span></h3>
                                        <p className='mb-5'>
                                            {product?.description}
                                        </p>
                                        <div className="product-details-cart-option mb-4">
                                            <div className="quantity">
                                                <div className="pro-qty">
                                                    <FaAngleUp className='qtybtn dec' onClick={incrementQty} />
                                                    <input type="text" value={quantity} readOnly />
                                                    <FaAngleDown className='qtybtn inc' onClick={decrementQty} />
                                                </div>
                                            </div>
                                            <Link className='primary-btn' onClick={addCartItem}>add to cart</Link>
                                        </div>
                                        <div className="product-details-btns-option mb-5">
                                            <a href="#">
                                                <FaHeart /> add to wishlist
                                            </a>
                                            <a href="#">
                                                <FaExchangeAlt />  Add To Compare
                                            </a>
                                        </div>
                                        <div className="product-details-last-option">
                                            <h5><span>Guaranteed Safe Checkout</span></h5>
                                            <img src={require('../image/details-payment.png')} alt="pay-de" />
                                            <ul>
                                                <li><span>SKU: </span>3812912</li>
                                                <li><span>Categories:</span> {product?.category}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductSingle
