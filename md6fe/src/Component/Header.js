import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProfile, logout} from "../service/merchantService";
import {logoutUser} from "../service/userService";
import {useEffect, useRef} from "react";
import {count} from "../service/orderService";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
    countMerchantNotification,
    countUserNotification,
    getNotificationMerchant,
    getNotificationUser,
    seenNotificationMerchant,
    seenNotificationUser
} from "../service/notificationService";

export default function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const merchant = useSelector((state) => {
        return state.merchant.currentMerchant
    });
    const user = useSelector((state) => {
        return state.user.currentUser
    });
    const countCart = useSelector((state) => {
        return state.orders.count
    })
    const notificationsMerchant = useSelector((state) => {
        return state.notifications.notificationsMerchant
    })
    const notificationsUser = useSelector((state) => {
        return state.notifications.notificationsUser
    })
    const countUser = useSelector((state) => {
        return state.notifications.countUser
    })
    const countMerchant = useSelector((state) => {
        return state.notifications.countMerchant
    })
    const handleMouseEnter = () => {
        if ((localStorage.getItem('idMerchant')) !== null) {
            dispatch(getNotificationMerchant(localStorage.getItem('idMerchant'))).then((e) => {
            })
            dispatch(seenNotificationMerchant(localStorage.getItem('idMerchant')))
            dispatch(countMerchantNotification(localStorage.getItem('idMerchant')))
        }
        if ((localStorage.getItem('idUser')) !== null) {
            dispatch(getNotificationUser(localStorage.getItem('idUser'))).then((e) => {
            })
            dispatch(seenNotificationUser(localStorage.getItem('idUser')))
            dispatch(countUserNotification(localStorage.getItem('idUser')))

        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        if (merchant !== null) {
            dispatch(getNotificationMerchant(merchant.idMerchant)).then(() => {
                dispatch(countMerchantNotification(merchant.idMerchant)).then(() => {
                    if (countMerchant > 0) {
                        toast.success(`You have ${countMerchant} new notifications`, {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        })
                    }
                })
            })

        }

        if (user !== null) {
            dispatch(getNotificationUser(user.idUser)).then(() => {
                dispatch(countUserNotification(user.idUser)).then(() => {
                    if (countUser > 0) {
                        toast.success(`You have ${countUser} new notifications`, {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        })
                    }
                })
            })

        }
        dispatch(count(localStorage.getItem('idOrder')))

    }, [user, countUser, merchant, countMerchant])

    return (<>
        <ToastContainer/>
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header__top__inner">
                                <div className="header__top__left">
                                    <ul>
                                        <li>USD <span className="arrow_carrot-down"></span>
                                            <ul>
                                                <li style={{
                                                    background: "white",
                                                    color: 'black',
                                                    width: '100%'
                                                }}>EUR
                                                </li>
                                                <li style={{
                                                    background: "white",
                                                    color: 'black',
                                                    width: '100%'
                                                }}>USD
                                                </li>
                                            </ul>
                                        </li>
                                        <li>ENG <span className="arrow_carrot-down"></span>
                                            <ul>
                                                <li style={{
                                                    background: "white",
                                                    color: 'black',
                                                    width: '100%'
                                                }}>Spanish
                                                </li>
                                                <li style={{
                                                    background: "white",
                                                    color: 'black',
                                                    width: '100%'
                                                }}>ENG
                                                </li>
                                            </ul>
                                        </li>
                                        <li onMouseEnter={handleMouseEnter} style={{width: 400}}>
                                            <i className="fa-regular fa-bell">
                                                {countUser !== undefined && countUser > 0 && <>
                                                    <span className="notification-count" style={{color: "red", fontSize: 12}}>
                                                        [{countUser}]
                                                    </span>
                                                </>}
                                                {countMerchant !== undefined && countMerchant > 0 && <>
                                                    <span className="notification-count" style={{
                                                        color: "red",
                                                        fontSize: 12
                                                    }}>[{countMerchant}]</span>
                                                </>}
                                            </i>
                                            <ul>
                                                {notificationsMerchant !== undefined && notificationsMerchant.length !== 0 && localStorage.getItem('merchant') !== null && <>
                                                    {notificationsMerchant.map((item) => (
                                                        <Link to={'/merchants/orderDetail/' + item.idOrder}>
                                                            <li style={{background: "white", color: 'black'}}><i
                                                                className="fa-solid fa-circle"></i>{new Date(item.time).toLocaleString()} : Order whose id  is {item.idOrder} of {item.email} have
                                                                been {item.setStatus}
                                                                </li>
                                                        </Link>
                                                    ))}
                                                </>}
                                                {notificationsUser !== undefined && notificationsUser.length !== 0 && localStorage.getItem('user') !== null && <>
                                                    {notificationsUser.map((item) => (
                                                        <Link to={'/users/orderDetail/' + item.idOrder}>
                                                            <li style={{background: "white", color: 'black'}}><i
                                                                className="fa-solid fa-circle"></i>{new Date(item.time).toLocaleString()} : Order whose id
                                                                is {item.idOrder} of Store {item.nameMerchant} have
                                                                been {item.setStatus} </li>
                                                        </Link>
                                                    ))}
                                                </>}
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="header__logo">
                                    <a href=""><img style={{height: 70}} src="/img/logo.png" alt=""/></a>
                                </div>
                                <div className="header__top__right">
                                    <div className="header__top__right__links">
                                    </div>
                                    {localStorage.getItem('status') === true || localStorage.getItem('status') === 'true' && <>
                                        <div className="header__top__right__cart">
                                            <Link to={'my-cart/' + localStorage.getItem('idOrder')}>
                                                <a href=""><img src="/img/icon/cart.png" alt=""/> <span>0</span></a>
                                            </Link>
                                            <div className="cart__price"><span>[{countCart}]</span></div>
                                        </div>
                                    </>}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open"><i className="fa fa-bars"></i></div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="header__menu mobile-menu">
                            <ul>
                                <li><Link to={'/'}>Home</Link></li>
                                {localStorage.getItem('NameStatus') === true || localStorage.getItem('NameStatus') === 'true' &&
                                    <li><a href="">Shop</a>

                                        <ul className="dropdown" style={{width: 160}}>
                                            <li><Link to={'/merchants/my-shop/' + merchant.idMerchant}>My
                                                Shop</Link>
                                            </li>
                                            <li><Link to={'/merchants/manager-order/' + merchant.idMerchant}>Manager
                                                Order</Link>
                                            </li>
                                            <li><Link
                                                to={'/merchants/statistics/' + merchant.idMerchant}>Statistics</Link>
                                            </li>
                                            <li><Link to={'/merchants/statistics-by-time/' + merchant.idMerchant}>Statistics
                                                Time</Link>
                                            </li>
                                        </ul>
                                    </li>}
                                <li><Link to={'/shop'}>Foods</Link></li>
                                {((localStorage.getItem('NameStatus') === null && localStorage.getItem('role') === null && localStorage.getItem('status') === null) || (localStorage.getItem('NameStatus') === false && localStorage.getItem('role') === false && localStorage.getItem('status') === false)) && <>
                                    <li><a href="">Login</a>
                                        <ul className="dropdown">
                                            <li><Link to={'/login-merchant'}
                                                      style={{color: "white"}}>Merchant</Link></li>
                                            <li><Link to={'/login-user'} style={{color: "white"}}>Buyer</Link></li>
                                        </ul>
                                    </li>
                                </>}

                                {localStorage.getItem('NameStatus') === true || localStorage.getItem('NameStatus') === 'true' && <>
                                    <li><a href="#">{merchant.nameMerchant}</a>
                                        <ul className="dropdown">
                                            <li><Link to={`/merchants/${merchant.idMerchant}`}>Profile</Link></li>
                                            <li><Link to={`/merchants/my-coupon/${merchant.idMerchant}`}>My
                                                Coupon</Link></li>
                                            <li><a href="" onClick={(e) => {
                                                dispatch(logout())
                                                navigate('/login-merchant')
                                            }}>Log Out</a></li>
                                        </ul>
                                    </li>
                                </>}
                                {localStorage.getItem('role') === true || localStorage.getItem('role') === 'true' && <>
                                    <li><Link to={'/admin/merchant-active'}>Merchant Active</Link></li>
                                    <li><Link to={'/admin/merchant-pending'}>Merchant Pending</Link></li>
                                    <li><Link to={'/admin/coupon'}>Coupon</Link></li>

                                </>}
                                {localStorage.getItem('status') === true || localStorage.getItem('status') === 'true' && <>
                                    <li><a href="#">{user.username}</a>
                                        <ul className="dropdown">
                                            <li><Link to={`/users/${user.idUser}`}>Profile</Link></li>
                                            <li><Link to={`/users/address/${user.idUser}`}>My Address</Link></li>
                                            <li><Link to={`/users/my-order/${user.idUser}`}>My Order</Link></li>
                                            <li><a href="" onClick={(e) => {
                                                dispatch(logoutUser())
                                                navigate('/login-user')
                                            }}>Log Out</a></li>
                                        </ul>
                                    </li>
                                </>}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    </>)
}