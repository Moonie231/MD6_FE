import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {editOrder, showCart} from "../../service/orderService";
import {editProfile, getProfile} from "../../service/userService";
import {Field, Form, Formik} from "formik";
import swal from "sweetalert";

export default function Checkout(){
    const navigate=useNavigate()
    const {id}=useParams()
    const dispatch=useDispatch()
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
    const user=useSelector((state)=>{
        console.log(state.user.profile)
        return state.user.profile
    })
    const handle=async (value)=>{
        let data=[
            {
                totalMoney:foods.sum,
                id_user:localStorage.getItem('idUser')
            }
            ,
            id
        ]
        dispatch(editOrder(data)).then(()=>{
            let info=[{...value},user.idUser]
            dispatch(editProfile(info))
            swal("Order Success !!!");
                navigate('/')
            }
        )


    }
    useEffect(()=>{
        dispatch(showCart(id))
        dispatch(getProfile(localStorage.getItem('idUser')))
    },[])
    return(
        <>
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="breadcrumb__text">
                                <h2>Checkout</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="breadcrumb__links">
                                <Link to={'/'}><a href="">Home</a></Link>
                                <span>Checkout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="checkout spad">
                <div className="container">
                    <div className="checkout__form">
                        <Formik initialValues={{
                            username: user.username,
                            email: user.email,
                            phone: user.phone
                        }} enableReinitialize={true} onSubmit={handle}>
                            <Form>                            <div className="row">
                                <div className="col-lg-8 col-md-6">
                                    <h6 className="coupon__code"><span className="icon_tag_alt"></span> Have a
                                        coupon? <a href="#">Click
                                            here</a> to enter your code</h6>
                                    <h6 className="checkout__title">Billing Details</h6>

                                            <div className="checkout__input">
                                                <p>Your name<span>*</span></p>
                                                <Field type="text" name={'username'}/>
                                            </div>
                                            <div className="checkout__input">
                                                <p>Address<span>*</span></p>
                                                <input type="text" placeholder="Street Address"
                                                       className="checkout__input__add"/>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="checkout__input">
                                                        <p>Phone<span>*</span></p>
                                                        <Field type="text" name={'phone'}/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="checkout__input">
                                                        <p>Email<span>*</span></p>
                                                        <Field type="text" name={'email'}/>
                                                    </div>
                                                </div>
                                            </div>

                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="checkout__order">
                                        <h6 className="order__title">Your order</h6>
                                        <div className="checkout__order__products">Product <span>Total</span></div>
                                        <ul className="checkout__total__products">
                                            {foods!==undefined && foods.list.map((item,index)=>(
                                                <li><samp>{index+1}.</samp> {item.nameFood} <span>$ {item.price}</span></li>
                                            ))}
                                        </ul>
                                        <ul className="checkout__total__all">
                                            <li>Total <span>${foods.sum}</span></li>
                                        </ul>
                                        <div className="checkout__input__checkbox">
                                            <label htmlFor="acc-or">
                                                Create an account?
                                                <input type="checkbox" id="acc-or"/>
                                                    <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkout__input__checkbox">
                                            <label htmlFor="payment">
                                                Check Payment
                                                <input type="checkbox" id="payment"/>
                                                    <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkout__input__checkbox">
                                            <label htmlFor="paypal">
                                                Paypal
                                                <input type="checkbox" id="paypal"/>
                                                    <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <button type="submit" className="site-btn" >PLACE ORDER</button>
                                    </div>
                                </div>

                            </div>
                        </Form>
                    </Formik>
                    </div>
                </div>
            </section>
        </>
    )
}