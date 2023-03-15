import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getFoods, searchNameFood} from "../../service/foodsService";
import {Field, Form, Formik} from "formik";
import {useNavigate, useSearchParams} from "react-router-dom";

export default function Shop() {
    const navigate=useNavigate()
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
        dispatch(searchNameFood(values)).then((res)=>{
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
                                    <h2>Shop</h2>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="breadcrumb__links">
                                    <a href="./index.html">Home</a>
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
                                        }} onSubmit={(values) =>{
                                            handleSearch(values)
                                        }
                                        }>
                                            <Form >
                                                <Field type="text" name={'nameFood'} placeholder="Search"/>
                                                <button type="submit"><i className="fa fa-search"></i></button>
                                            </Form>
                                        </Formik>

                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5">
                                    <div className="shop__option__right">
                                        <select>
                                            <option value="">Default sorting</option>
                                            <option value="">A to Z</option>
                                            <option value="">1 - 8</option>
                                            <option value="">Name</option>
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
                                            <div className="product__item__pic set-bg"
                                                 style={{backgroundImage: `url(${item.img})`}}>
                                                <div className="product__label">
                                                    <span>{item.nameCategory}</span>
                                                </div>
                                            </div>
                                            <div className="product__item__text">
                                                <h6><a href="#">{item.nameFood}</a></h6>
                                                <div className="product__item__price">${item.price}</div>
                                                <div className="cart_add">
                                                    <a href="#">Add to cart</a>
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
                                            <div className="page-link"><span aria-hidden="true" style={{color:'black'}}>&laquo;</span></div>
                                        </>
                                        :
                                        <>
                                            <div  className="page-link" onClick={() => {
                                                dispatch(getFoods(page1 - 1));
                                                navigate('/shop?page='+(page1-1))
                                            }
                                            }> <span aria-hidden="true">&laquo;</span>
                                            </div>
                                        </>
                                    }
                                </li>
                                <li className="page-item"><a className="page-link">{page1}/{totalPages}</a></li>
                                <li className="page-item">
                                    {(page1 === totalPages) ?
                                        <><div className="page-link"><span aria-hidden="true" style={{color:'black'}}>&raquo;</span></div>
                                        </>
                                        :
                                        <>
                                            <div  className="page-link" onClick={() => {
                                                dispatch(getFoods(Number(page1) + 1));
                                                navigate('/shop?page='+(Number(page1)+1))
                                            }
                                            }> <span aria-hidden="true">&raquo;</span>
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