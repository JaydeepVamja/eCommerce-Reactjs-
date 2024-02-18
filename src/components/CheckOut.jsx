import React from 'react'
import { CiShoppingTag } from 'react-icons/ci'
import { Link } from 'react-router-dom'

function CheckOut() {
    return (
        <>
            <section className='breadcrumb-option'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-text">
                                <h4 className='mb-2 fw-bolder'>Check Out</h4>
                                <div className="breadcrumb-link">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/" className='text-black'>Home</Link></li>
                                            <li className="breadcrumb-item"><Link to="/shop" className='text-black'>Shop</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Check Out</li>
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
                    <div className="checkout-form">
                        <form>
                            <div className="row">
                                <div className="col-lg-8 col-md-6">
                                    <h6 className="coupon-code">
                                        <CiShoppingTag className='me-3 fs-5' />
                                        Have a coupon?
                                        <a href="#"> Click here </a>
                                        to enter your code
                                    </h6>
                                    <h6 className='checkout-title'>Billing Details</h6>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout-input">
                                                <p>Fist Name <span className='txtRedtxt'>*</span></p>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout-input">
                                                <p>Last Name <span className='txtRedtxt'>*</span></p>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout-input">
                                        <p>Country <span className='txtRedtxt'>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div className="checkout-input">
                                        <p>Address <span className='txtRedtxt'>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div className="checkout-input">
                                        <p>Town/City <span className='txtRedtxt'>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div className="checkout-input">
                                        <p>Country/State <span className='txtRedtxt'>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div className="checkout-input">
                                        <p>Postcode / ZIP <span className='txtRedtxt'>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout-input">
                                                <p>Phone <span className='txtRedtxt'>*</span></p>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout-input">
                                                <p>Email <span className='txtRedtxt'>*</span></p>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout-input-checkbox">
                                        <label htmlFor="acc">
                                            <input type="checkbox" id='acc' className='me-2' />
                                            Create an account?
                                            <span className='checkmark'></span>
                                        </label>
                                        <p>
                                            Create an account by entering the information below. If you are a returning customer
                                            please login at the top of the page
                                        </p>
                                    </div>
                                    <div className="checkout-input">
                                        <p>Account Password <span className='txtRedtxt'>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div className="checkout-input-checkbox">
                                        <label htmlFor="diff-acc">
                                            <input type="checkbox" id='diff-acc' className='me-2' />
                                            Note about your order, e.g, special noe for delivery
                                            <span className='checkmark'></span>
                                        </label>
                                    </div>
                                    <div className="checkout-input">
                                        <p>Order notes <span className='txtRedtxt'>*</span></p>
                                        <input type="text" placeholder="Notes about your order, e.g. special notes for delivery." />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="checkout-order">
                                        <h4 className='order-title'>Your order</h4>
                                        <div className="checkout-order-products">Product <span>Total</span></div>
                                        <ul className='checkout-total-products mb-4'>
                                            <li>01. Vanilla salted caramel <span>$ 300.0</span></li>
                                        </ul>
                                        <ul className="checkout-total-all">
                                            <li>Subtotal <span>$750.99</span></li>
                                            <li>Total <span>$750.99</span></li>
                                        </ul>
                                        <div className="checkout-input-checkbox">
                                            <label htmlFor="acc-or">
                                                <input type="checkbox" id='acc-or' className='me-2' />
                                                Create an account?
                                                <span className='checkmark'></span>
                                            </label>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                        <div className="checkout-input-checkbox">
                                            <label htmlFor="payment">
                                                <input type="checkbox" id='payment' className='me-2' />
                                                Check Payment
                                                <span className='checkmark'></span>
                                            </label>
                                        </div>
                                        <div className="checkout-input-checkbox">
                                            <label htmlFor="paypal">
                                                <input type="checkbox" id='paypal' className='me-2' />
                                                Paypal
                                                <span className='checkmark'></span>
                                            </label>
                                        </div>
                                        <button type="submit" class="site-btn">PLACE ORDER</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CheckOut
