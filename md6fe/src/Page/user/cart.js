import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {count, deleteOrderDetail, resetPrice, showCart} from "../../service/orderService";
import swal from "sweetalert";
import {myCoupon} from "../../service/couponService";

export default function Cart() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const foods = useSelector((state) => {
        let money = 0;
        state.orders.order.map((item) => {
            money += item.price;
        })

        let obj = {
            list: state.orders.order,
            sum: money
        }
        console.log(obj.list)
        return obj
    })

    useEffect(() => {
        dispatch(showCart(id))
        dispatch(count(localStorage.getItem('idOrder')))
    }, [foods.sum])

    return (
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
                                    {foods.list !== undefined && foods.list.map((item) => {
                                            return (
                                                <>

                                                    <tr style={{borderTop: '1px solid rgba(0,0,0,.09)'}}>
                                                        <td className="product__cart__item">
                                                            <div className="product__cart__item__pic">
                                                                <img style={{width: 90, height: 90}} src={item.img} alt=""/>
                                                            </div>
                                                            <div className="product__cart__item__text">
                                                                <h6>{item.nameFood}</h6>
                                                            </div>
                                                        </td>
                                                        <td className="quantity__item">

                                                            <div className="quantity">
                                                                <div className="pro-qty">

                                                                    <h6>{item.quantity}</h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="cart__price">${item.price !== undefined && item.price.toFixed(2)}</td>
                                                        <td className="cart__close">
                                                        <span className="icon_close"
                                                              onClick={() => {
                                                                  swal({
                                                                      title: "Are you sure?",
                                                                      text: "Once deleted, you will not be able to recover this imaginary file!",
                                                                      icon: "warning",
                                                                      buttons: true,
                                                                      dangerMode: true,
                                                                  })
                                                                      .then(async (willDelete) => {
                                                                          if (willDelete) {

                                                                              swal("Poof! Your imaginary file has been deleted!", {
                                                                                  icon: "success",
                                                                              });
                                                                              await dispatch(deleteOrderDetail(item.idOrderdetail)).then(() => {
                                                                                  navigate('/my-cart/' + id)
                                                                              })
                                                                              await dispatch(showCart(id))
                                                                          } else {
                                                                              swal("Your imaginary file is safe!");
                                                                          }
                                                                      });
                                                              }}>
                                                        </span>
                                                        </td>
                                                    </tr>
                                                    <tr style={{
                                                        borderTop: '1px solid rgba(0,0,0,.09)',
                                                        paddingBottom: 0,
                                                        paddingTop: 0
                                                    }}>
                                                        {item.priceOne === item.priceMerchantCoupon &&
                                                            <td>
                                                                <div className="dT5fMv" style={{
                                                                    display: 'flex',
                                                                    alignItems: 'center'
                                                                }}>
                                                                    <div className="jxfDh3" style={{
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                    }}>
                                                                        <div className="">
                                                                            <div>
                                                                                <Link
                                                                                    to={'/users/merchant-coupon/' + localStorage.getItem('MerchantId')}
                                                                                    style={{
                                                                                        color: '#ee4d2d',
                                                                                        textDecoration: 'none'
                                                                                    }} onClick={() => {
                                                                                    localStorage.setItem('OrderDetails', item.id_Food)
                                                                                }}>Merchant Coupon</Link>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        }
                                                        {item.priceOne === item.priceAdminCoupon &&
                                                            <td colSpan={2}>
                                                                <div className="AYBwMK" style={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    padding: '1.25rem 0 1.25rem 2.5rem',

                                                                }}>
                                                                    <div className="hYG2mu" style={{
                                                                        marginLeft: '0.9375rem',
                                                                    }}>
                                                                        <Link to={'/users/system-coupon'} style={{
                                                                            color: '#ee4d2d',
                                                                            textDecoration: 'none'
                                                                        }} onClick={() => {
                                                                            localStorage.setItem('OrderDetails', item.id_Food)
                                                                        }}>System coupon</Link>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        }
                                                        {(item.priceOne != item.priceAdminCoupon || item.priceOne !== item.priceMerchantCoupon) &&
                                                            <td colSpan={1}>
                                                                <div className="AYBwMK" style={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    padding: '1.25rem 0 1.25rem 2.5rem',

                                                                }}>
                                                                    <div className="hYG2mu" style={{
                                                                        marginLeft: '0.9375rem',
                                                                    }}>
                                                                        <div style={{
                                                                            color: '#ee4d2d',
                                                                            textDecoration: 'none',
                                                                            cursor: 'pointer'
                                                                        }} onClick={() => {
                                                                            let data = [item.id_Food, id]
                                                                            dispatch(resetPrice(data))
                                                                        }}>Reset
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>

                                                        }
                                                    </tr>

                                                </>
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
                                    <li>Total <span>$ {foods.sum.toFixed(2)}</span></li>
                                </ul>
                                <Link to={'/check-out/' + id}><a href="" className="primary-btn">Proceed to checkout</a></Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}