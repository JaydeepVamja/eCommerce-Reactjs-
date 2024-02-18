import { Rating } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FaAngleDown, FaSearch } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { productCall, categories, category, searchProduct } from '../app/feature/productApi';
import { Link } from 'react-router-dom';
import { addItem } from '../app/feature/cart';
import 'bootstrap/js/dist/collapse';

function ShopProduct() {

    const dispatch = useDispatch();

    const { isLoading, data } = useSelector((state) => state.api);
    const cateData = useSelector((state) => state.api.cate);
    const scate = useSelector((state) => state.api.scate);
    const searchData = useSelector(state => state.api.search);

    const [pro, setPro] = useState([]);
    const [temp, setTemp] = useState([]);
    const [sortOption, setSortOption] = useState('Custom Price');
    const [search, setSearch] = useState();
    const [uniqueBrands, setUniqueBrands] = useState([]);

    useEffect(() => {
        if (data) {
            setPro(data?.products);
            setTemp(data?.products);
        }
    }, [data]);

    useEffect(() => {
        if (scate) {
            setPro(scate?.products);
        }
    }, [scate]);

    useEffect(() => {
        dispatch(productCall());
        dispatch(categories());
    }, [dispatch]);

    useEffect(() => {
        if (searchData) {
            setPro(searchData?.products);
            setTemp(searchData.products);
        }
    }, [searchData]);

    // category filter
    const handleCategory = (c) => {
        dispatch(category(c));
        setPro(scate?.products);
    }

    // brand filter
    useEffect(() => {
        setUniqueBrands([...new Set(temp?.map((product) => product?.brand))]);
    }, [temp])

    const handleBrand = (brand) => {
        const filterBrand = temp.filter((product) => product.brand === brand);
        setPro(filterBrand);
    }

    // price filter
    const handlePrice = (min, max) => {
        const filterPrice = temp.filter((e) => e.price >= min && e.price <= max);
        setPro(filterPrice);
    }

    // high and low
    const handleSort = (e) => {
        const option = e.target.value;
        setSortOption(option);

        let sortedProducts = [...pro];
        if (option === 'low to high') {
            sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
        } else if (option === 'high to low') {
            sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
        } else if (option === 'custom price') {
            sortedProducts = sortedProducts.sort((a, b) => a.id - b.id);

        }
        setPro(sortedProducts);
    }

    // add to cart
    const addCartItem = (cart) => {
        dispatch(addItem(cart));
    }

    // search product
    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setSearch(searchTerm)
        dispatch(searchProduct(searchTerm));
        setPro(searchData.products);
    }

    // data loading
    if (isLoading) {
        return <div className='d-flex justify-content-center py-5'>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }


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
                                            <li className="breadcrumb-item active" aria-current="page">Shop</li>
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
                        <div className="col-lg-3">
                            <div className="shop-sidebar pe-4">
                                <div className="shop-sidebar-search">
                                    <form className='position-relative'>
                                        <input type="text" placeholder="Search..." value={search} onChange={handleSearch} />
                                        <button type='submit'><FaSearch /></button>
                                    </form>
                                </div>
                                <div className="shop-sidebar-accordion">
                                    <div className="accordion" id='accordionExample'>

                                        <div className="card">
                                            <div className="card-heading active">
                                                <a
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne"
                                                    className=""
                                                    aria-current="true"
                                                >
                                                    Categories
                                                    <FaAngleDown />
                                                </a>
                                            </div>
                                            <div id="collapseOne" className="collapse show" data-bs-parent="#accordionExample" style={{}}>
                                                <div className="card-body">
                                                    <div className="shop-sidebar-categories">
                                                        <ul className="nice-scroll" tabIndex="1">
                                                            {cateData && cateData?.map((c, index) => (
                                                                <li key={index}>
                                                                    <Link onClick={() => handleCategory(c)}>{c}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-heading active">
                                                <a
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo"
                                                    className=""
                                                    aria-current="page"
                                                >
                                                    Branding
                                                    <FaAngleDown />
                                                </a>
                                            </div>
                                            <div id="collapseTwo" className="collapse show" data-bs-parent="#accordionExample">
                                                <div className="card-body">
                                                    <div className="shop-sidebar-brand">
                                                        <ul>
                                                            {uniqueBrands?.map((brand, index) => (
                                                                <li key={index}>
                                                                    <Link onClick={() => handleBrand(brand)}>{brand}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-heading active">
                                                <a
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree"
                                                    className=""
                                                    aria-current="true"
                                                >
                                                    FILTER PRICE
                                                    <FaAngleDown />
                                                </a>
                                            </div>
                                            <div id="collapseThree" className="collapse show" data-bs-parent="#accordionExample" style={{}}>
                                                <div className="card-body">
                                                    <div className="shop-sidebar-price">
                                                        <ul>
                                                            <li><Link onClick={() => handlePrice(0, 200)}>$0.00 - $200.00</Link></li>
                                                            <li><Link onClick={() => handlePrice(201, 400)}>$201.00 - $400.00</Link></li>
                                                            <li><Link onClick={() => handlePrice(401, 600)}>$401.00 - $600.00</Link></li>
                                                            <li><Link onClick={() => handlePrice(601, 800)}>$601.00 - $800.00</Link></li>
                                                            <li><Link onClick={() => handlePrice(801, 1000)}>$801.00 - $1000.00</Link></li>
                                                            <li><Link onClick={() => handlePrice(1001, Infinity)}>1001.00+</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-heading active">
                                                <a
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseFour"
                                                    className=""
                                                    aria-current="true"
                                                >
                                                    Size
                                                    <FaAngleDown />
                                                </a>
                                            </div>
                                            <div id="collapseFour" className="collapse show" data-bs-parent="#accordionExample" style={{}}>
                                                <div className="card-body">
                                                    <div className="shop-sidebar-size pt-3">
                                                        <label htmlFor="xs">xs
                                                            <input type="radio" name='size' id="xs" />
                                                        </label>
                                                        <label htmlFor="sm">s
                                                            <input type="radio" name='size' id="sm" />
                                                        </label>
                                                        <label htmlFor="md">m
                                                            <input type="radio" name='size' id="md" />
                                                        </label>
                                                        <label htmlFor="xl">xl
                                                            <input type="radio" name='size' id="xl" />
                                                        </label>
                                                        <label htmlFor="xxl">xxl
                                                            <input type="radio" name='size' id="xxl" />
                                                        </label>
                                                        <label htmlFor="3xl">3xl
                                                            <input type="radio" name='size' id="3xl" />
                                                        </label>
                                                        <label htmlFor="4xl">4xl
                                                            <input type="radio" name='size' id="4xl" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="shop-product-option">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="shop-product-option-left">
                                            <p>Showing Products</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="shop-product-option-right d-flex justify-content-end">
                                            <p>Sort by Price: </p>
                                            <select onChange={handleSort} value={sortOption}>
                                                <option value="custom price">Custom Price</option>
                                                <option value="low to high">Low To High</option>
                                                <option value="high to low">High To Low</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {
                                    pro?.slice(0, 9)?.map((ele, index) => (
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
                                    ))
                                }
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="product-pagination pt-4">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination justify-content-center">
                                                <li className="page-item">
                                                    <a className="page-link" href="#" aria-label="Previous">
                                                        <span aria-hidden="true">&laquo;</span>
                                                    </a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#" aria-label="Next">
                                                        <span aria-hidden="true">&raquo;</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
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

export default ShopProduct
