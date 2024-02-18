import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { RiCloseFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem } from '../app/feature/cart'

function Cart() {

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (item) => {
        dispatch(removeItem(item));
    };

    const [quantities, setQuantities] = useState(cart.map(() => 1));

    const handleQuantityChange = (index, newQuantity) => {
        const updatedQuantities = [...quantities];
        updatedQuantities[index] = newQuantity > 0 ? newQuantity : 1;
        setQuantities(updatedQuantities);
        localStorage.setItem('quantity', JSON.stringify(updatedQuantities));
    };
    useEffect(() => {
        const storedQuantities = localStorage.getItem('quantity');
        if (storedQuantities) {
            setQuantities(JSON.parse(storedQuantities));
        }
    }, []);

    const getTotal = (item, index) => {
        return item.price * quantities[index];
    };

    const subtotal = cart.reduce((acc, item, index) => acc + getTotal(item, index), 0);
    // const shipping = 5;
    const finalTotal = subtotal;

    return (
        <>
            <section className='breadcrumb-option'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-text">
                                <h4 className='mb-2 fw-bolder'>Shop</h4>
                                <div className="breadcrumb-link">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/" className='text-black'>Home</Link></li>
                                            <li className="breadcrumb-item"><Link to="/shop" className='text-black'>Shop</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Shopping Cart</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='spacer'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="shopping-cart-table mb-4">
                                <table className='w-100 responsive'>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item, index) => (
                                            <tr key={index}>
                                                <td className="product-cart-item">
                                                    <div className="product-cart-item-pic">
                                                        <img src={item.thumbnail} alt={item.title} />
                                                    </div>
                                                    <div className="product-cart-item-text">
                                                        <h6>{item.title}</h6>
                                                        <h5>$ {item.price}</h5>
                                                    </div>
                                                </td>
                                                <td className="quantity-item">
                                                    <div className="quantity">
                                                        <div className="pro-qty-2">
                                                            <FaAngleLeft className='dec qtybtn' onClick={() => handleQuantityChange(index, quantities[index] - 1)} />
                                                            <input type="text" value={quantities[index]} readOnly />
                                                            <FaAngleRight className='inc qtybtn' onClick={() => handleQuantityChange(index, quantities[index] + 1)} />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="cart-price">$ {getTotal(item, index)}</td>
                                                <td className="cart-close"><span onClick={() => handleRemoveFromCart(item)}><RiCloseFill className='close' /></span></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="continue-btn">
                                        <button><Link to='/shop' className='text-black'>Continue Shopping</Link></button>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="continue-btn update-btn">
                                        <button> Update cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cart-discount mb-5">
                                <h6>Discount codes</h6>
                                <form className='position-relative'>
                                    <input type="text" placeholder='Coupon code' />
                                    <button type='submit'>Apply</button>
                                </form>
                            </div>
                            <div className="cart-total">
                                <h6>Cart Total</h6>
                                <ul className='mb-3'>
                                    <li>Subtotal <span>$ {subtotal}</span></li>
                                    {/* <li>Shipping <span>$ {shipping}</span></li> */}
                                    <li>Total <span>$ {finalTotal}</span></li>
                                </ul>
                                <Link to='/checkOut'>Proceed to checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart
