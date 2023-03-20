import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {addOrder, deleteCart, editOrder, showCart} from "../../service/orderService";

export default function ShowCart() {
    const {idOrder} = useParams();

    const navigate = useNavigate()

    const dispatch = useDispatch();

    const carts = useSelector(state => {
        return state.orders.cart
    })

    useEffect(() => {
        dispatch(showCart(idOrder))
    }, [])

    let totalMoney = 0;
    return (

        <>
            {
                carts.length===0 || carts === 'Saved cart'?<>
                        <p style={{textAlignLast:"center", fontSize:100, height:300, marginTop:200}}>No product</p>
                    </>:<>
                <section className="shopping-cart spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="shopping__cart__table">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Food</th>
                                            <th>Quantity</th>
                                            <th>Total Money</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="product__cart__item">
                                                <div className="product__cart__item__pic">
                                                    <img src="/img/shop/cart/cart-1.jpg" alt=""/>
                                                </div>
                                                <div className="product__cart__item__text">
                                                    <h6>T-shirt Contrast Pocket</h6>
                                                    <h5>$98.49</h5>
                                                </div>
                                            </td>
                                            <td className="quantity__item">
                                                <div className="quantity">
                                                    <div className="pro-qty"><span className="dec qtybtn">-</span>
                                                        <input type="text" value="1"/>
                                                        <span className="inc qtybtn">+</span></div>
                                                </div>
                                            </td>
                                            <td className="cart__price">$ 30.00</td>
                                            <td className="cart__close"><span className="icon_close"></span></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="continue__btn">
                                            <a href="#">Continue Shopping</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="continue__btn update__btn">
                                            <a href="#"><i className="fa fa-spinner"></i> Update cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cart__discount">
                                    <h6>Discount codes</h6>
                                    <form action="#">
                                        <input type="text" placeholder="Coupon code"/>
                                        <button type="submit">Apply</button>
                                    </form>
                                </div>
                                <div className="cart__total">
                                    <h6>Cart total</h6>
                                    <ul>
                                        <li>Subtotal <span>$ 169.50</span></li>
                                        <li>Total <span>$ 169.50</span></li>
                                    </ul>
                                    <a href="#" className="primary-btn">Proceed to checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


        </>}
            </>
    )
}
