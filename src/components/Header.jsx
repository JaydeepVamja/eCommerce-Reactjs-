import React, { useEffect, useState } from 'react'
import { Button, Modal, Nav, Navbar } from 'react-bootstrap'
import { FaAngleDown } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../app/feature/productApi'
import { Rating } from '@mui/material'
import { addItem } from '../app/feature/cart'

function Header() {

    // const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    // const searchData = useSelector(state => state.api.search);

    // const [search, setSearch] = useState();
    // const [product, setProduct] = useState([]);

    // useEffect(() => {
    //     if (searchData) {
    //         setProduct(searchData.products)
    //     }
    // }, [searchData])

    // const handleSearch = (e) => {
    //     const searchTerm = e.target.value;
    //     setSearch(searchTerm)
    //     dispatch(searchProduct(searchTerm));
    //     setProduct(searchData.products);
    // }

    // // add to cart
    // const addCartItem = (cart) => {
    //     dispatch(addItem(cart));
    // }


    return (
        <>
            <header>
                <div className="bgBlack py-3 d-none d-md-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-7">
                                <div className="header-top-left">
                                    <p className='mb-0 fs-6'>Free shipping, 30-day return or refund guarantee.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-5">
                                <div className="header-top-right">
                                    <div className="header-top-links">
                                        <a href="#">SIGN IN</a>
                                        <a href="#">FAQs</a>
                                    </div>
                                    <div className="header-top-hover">
                                        <span>USD <FaAngleDown className='fs-6' /></span>
                                        <ul>
                                            <li>USD</li>
                                            <li>EUR</li>
                                            <li>USD</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <Navbar expand="lg" className="header-nav pb-4">
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className='justify-content-between align-items-end'>
                            <Navbar.Brand as={Link} to="/" className='d-none d-lg-block'><img src={require('../image/logo.png')} alt="logo" /></Navbar.Brand>
                            <Nav
                                className="my-2 my-lg-0"
                                style={{ maxHeight: '165px' }}
                                navbarScroll
                            >
                                <Nav.Link active as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                                <Nav.Link>
                                    Pages
                                    <ul className='submenu'>
                                        <li><a href="#">About Us</a></li>
                                        <li><Link to='/shop'>Shop Details</Link></li>
                                        <li><Link to='/shopping_cart'>Shopping Cart</Link></li>
                                        <li><Link to='/checkOut'>Check Out</Link></li>
                                        <li><a href="#">Blog Details</a></li>
                                    </ul>
                                </Nav.Link>
                                <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                                <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                            </Nav>
                            <div className="header-nav-right">
                                {/* <Link className='me-4 position-relative'>
                                    <img src={require('../image/search.png')} alt="search" className='search-img' />
                                    <form>
                                        <div className="search-input">
                                            <input type="text" value={search} onChange={handleSearch} />
                                        </div>
                                    </form>
                                </Link> */}
                                <a href="#" className='me-4'>
                                    <img src={require('../image/heart.png')} alt="heart" />
                                </a>
                                <Link to="/shopping_cart" className='position-relative header-cart'>
                                    <img src={require('../image/cart.png')} alt="cart" />
                                    <span>{cart.length}</span>
                                </Link>
                            </div>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </header>

            {/* {search && product?.length > 0 && (
                <div className="container mt-3">
                    <h5>Search Results:</h5>
                    <div className="row">
                        <>
                            {product?.map((ele, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
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
                            ))}
                        </>
                    </div>
                </div>
            )} */}
        </>
    )
}

export default Header
