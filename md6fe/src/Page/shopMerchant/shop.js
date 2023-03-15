import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getFoods, searchNameFood} from "../../service/foodsService";
import {Field, Form, Formik} from "formik";

export default function Shop() {
    const dispatch = useDispatch()
    const foods = useSelector((state) => {
        return state.foods.search
    })
    useEffect(() => {
        dispatch(getFoods()).then()
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
                        <div className="shop__last__option">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="shop__pagination">
                                        <a href="#">1</a>
                                        <a href="#">2</a>
                                        <a href="#">3</a>
                                        <a href="#"><span className="arrow_carrot-right"></span></a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="shop__last__text">
                                        <p>Showing 1-9 of 10 results</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>}
        </>
    )
}