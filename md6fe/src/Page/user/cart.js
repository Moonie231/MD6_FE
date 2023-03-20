import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {deleteOrderDetail, editOrder, showCart} from "../../service/orderService";
import {Field, Form, Formik} from "formik";
import swal from "sweetalert";
import {deleteFood, getFood} from "../../service/foodsService";

export default function Cart(){
    const {id}=useParams()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const foods=useSelector((state)=>{
        let money=0;
        state.orders.order.map((item)=>{
            money += item.price;
        })
        let obj = {
            list: state.orders.order,
            sum:money
        }
        return obj
    })
    useEffect(()=>{
        dispatch(showCart(id))
    },[])
    return(
        <>
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="breadcrumb__text">
                                <h2>Shopping cart</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="breadcrumb__links">
                                <Link to={'/'}><a href="">Home</a></Link>

                                <span>Shopping cart</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="shopping-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="shopping__cart__table">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {foods.list!==undefined && foods.list.map((item) =>
                                    {
                                        return(
                                            <tr>
                                                <td className="product__cart__item">
                                                    <div className="product__cart__item__pic">
                                                        <img style={{width:90,height:90}} src={item.img} alt=""/>
                                                    </div>
                                                    <div className="product__cart__item__text">
                                                        <h6>{item.nameFood}</h6>
                                                    </div>
                                                </td>
                                                <td className="quantity__item">
                                                    <Formik initialValues={{
                                                        quantity:item.quantity
                                                    }
                                                    }>
                                                        <Form>
                                                            <div className="quantity">
                                                                <div className="pro-qty">

                                                                    <Field type="number" name="quantity"/>
                                                                </div>
                                                            </div>
                                                        </Form>
                                                    </Formik>

                                                </td>
                                                <td className="cart__price">$ {item.price}</td>
                                                <td className="cart__close"><span className="icon_close" onClick={()=>{
                                                    swal({
                                                        title: "Are you sure?",
                                                        text: "Once deleted, you will not be able to recover this imaginary file!",
                                                        icon: "warning",
                                                        buttons: true,
                                                        dangerMode: true,
                                                    })
                                                        .then((willDelete) => {
                                                            if (willDelete) {

                                                                swal("Poof! Your imaginary file has been deleted!", {
                                                                    icon: "success",
                                                                });
                                                                dispatch(deleteOrderDetail(item.idOrderdetail)).then(() => {
                                                                    navigate('/my-cart/'+id)
                                                                })
                                                                dispatch(showCart(id))
                                                            } else {
                                                                swal("Your imaginary file is safe!");
                                                            }
                                                        });
                                                }}></span></td>
                                            </tr>
                                        )
                                    }

                                    )}
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="continue__btn">
                                        <Link to={'/'}><a href="">Continue Shopping</a></Link>
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
                                    <li>Total <span>$ {foods.sum}</span></li>
                                </ul>
                                <Link to={'/check-out/'+id}><a href="" className="primary-btn" >Proceed to checkout</a></Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}