import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findByIdFood, getFoods, searchNameFood} from "../../service/foodsService";
import {Field, Form, Formik} from "formik";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {addToCart, count, showCart} from "../../service/orderService";
import swal from "sweetalert";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Shop() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const foods = useSelector((state) => {
        return state.foods.search.foods
    })
    const [page, setPage] = useSearchParams()
    const page1 = page.get('page') || 1;
    const totalPages = useSelector(state => {
        if (state.foods.search !== undefined) {
            return state.foods.search.totalPage;
        }
    })
    useEffect(() => {
        dispatch(getFoods(page1)).then()

    }, [])

    const handleSearch = (values) => {
        dispatch(searchNameFood(values)).then((res) => {
            }
        )
    }
    return (
        <>
            {foods !== undefined && <>
                <div className="breadcrumb-option">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="breadcrumb__text">
                                    <h3>Shop</h3>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="breadcrumb__links">
                                    <Link to={'/'}>Home</Link>
                                    <span>Shop</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="shop spad">
                    <div className="container">
                        <div className="shop__option">
                            <div className="row">
                                <div className="col-lg-7 col-md-7">
                                    <div className="shop__option__search">
                                        <Formik initialValues={{
                                            nameFood: ""
                                        }} onSubmit={(values) => {
                                            handleSearch(values)
                                        }
                                        }>
                                            <Form>
                                                <Field type="text" name={'nameFood'} placeholder="Search"/>
                                                <button type="submit"><i className="fa fa-search"></i></button>
                                            </Form>
                                        </Formik>

                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5">
                                    <div className="shop__option__right">
                                        <select className="nice-select">
                                            <option className="option selected focus" value="">Default sorting</option>
                                            <option className="option" value="">A to Z</option>
                                            <option className="option" value="">1 - 8</option>
                                            <option className="option" value="">Name</option>
                                        </select>
                                        <a href="#"><i className="fa fa-list"></i></a>
                                        <a href="#"><i className="fa fa-reorder"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {foods.map((item) => (
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="product__item">
                                            <Link to={`/food/${item.idFood}`}>
                                                <div className="product__item__pic set-bg"
                                                     style={{backgroundImage: `url(${item.img})`}}>
                                                    <div className="product__label">
                                                        <span><i
                                                            className="fa-solid fa-store"></i> {item.nameMerchant}</span>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="product__item__text">
                                                <h5 className="product__item__price">{item.nameFood}</h5>
                                                <div className="product__item__price">${item.price}</div>
                                                <div className="cart_add">
                                                    <h5 style={{cursor: 'pointer'}} onClick={(e) => {
                                                        if (localStorage.getItem('user') !== 'null' && localStorage.getItem('user') !== null) {
                                                            if (localStorage.getItem('NameStatus')) {
                                                            } else {
                                                                if (item.quantityFood < 1) {
                                                                    toast.success("The product is out of stock", {
                                                                        style: {color: 'red',},
                                                                        position: "top-right",
                                                                        autoClose: 3000,
                                                                        hideProgressBar: false,
                                                                        closeOnClick: true,
                                                                        pauseOnHover: true,
                                                                        draggable: true,
                                                                        progress: undefined,
                                                                        icon: "X"
                                                                    });
                                                                } else {
                                                                    if (localStorage.getItem('MerchantId') === 'null' || item.id_Merchant == localStorage.getItem('MerchantId')) {
                                                                        toast.success("Added to cart", {
                                                                            position: "top-right",
                                                                            autoClose: 3000,
                                                                            hideProgressBar: false,
                                                                            closeOnClick: true,
                                                                            pauseOnHover: true,
                                                                            draggable: true,
                                                                            progress: undefined,
                                                                        });
                                                                        let data = {
                                                                            id_Food: item.idFood,
                                                                            id_Order: localStorage.getItem('idOrder'),
                                                                            quantity: 1,
                                                                            price: item.price,
                                                                            priceMerchantCoupon: item.price,
                                                                            priceAdminCoupon: item.price,
                                                                            totalPrice: item.price,
                                                                        }
                                                                        localStorage.setItem('MerchantId', item.id_Merchant)
                                                                        dispatch(addToCart(data)).then(() => {
                                                                            dispatch(count(localStorage.getItem('idOrder')))
                                                                        })
                                                                    } else {
                                                                        swal('you can only buy from 1 store')
                                                                    }
                                                                }
                                                            }
                                                        } else {
                                                            swal('You can login with buyer')
                                                            navigate('/login-user')
                                                        }

                                                    }}>Add to cart</h5>
                                                    <ToastContainer/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}

                        </div>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                    {(page1 === 1) ?
                                        <>
                                            <div className="page-link"><span aria-hidden="true"
                                                                             style={{color: 'black'}}>&laquo;</span>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className="page-link" onClick={() => {
                                                if(page-1>0){
                                                dispatch(getFoods(page1 - 1));
                                                navigate('/shop?page=' + (page1 - 1))
                                            }}
                                            }><span aria-hidden="true">&laquo;</span>
                                            </div>
                                        </>
                                    }
                                </li>
                                <li className="page-item"><a className="page-link">{page1}/{totalPages}</a></li>
                                <li className="page-item">
                                    {(page1 === totalPages) ?
                                        <>
                                            <div className="page-link"><span aria-hidden="true"
                                                                             style={{color: 'black'}}>&raquo;</span>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className="page-link" onClick={() => {
                                                if(Number(page)+1<=totalPages){
                                                dispatch(getFoods(Number(page1) + 1));
                                                navigate('/shop?page=' + (Number(page1) + 1))
                                            }}
                                            }><span aria-hidden="true">&raquo;</span>
                                            </div>
                                        </>
                                    }
                                </li>
                            </ul>
                        </nav>
                    </div>
                </section>
            </>}
        </>
    )
}