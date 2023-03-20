import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProfile, logout} from "../service/merchantService";
import {logoutUser} from "../service/userService";

export default function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const merchant = useSelector((state) => {
        return state.merchant.currentMerchant
    });
    const user = useSelector((state) => {
        return state.user.currentUser
    });



    return (
        <>
            {user != null && <>
            </>}
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
                                                    <li>EUR</li>
                                                    <li>USD</li>
                                                </ul>
                                            </li>
                                            <li>ENG <span className="arrow_carrot-down"></span>
                                                <ul>
                                                    <li>Spanish</li>
                                                    <li>ENG</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="header__logo">
                                        <a href=""><img style={{height: 70}} src="/img/logo.png" alt=""/></a>
                                    </div>
                                    <div className="header__top__right">
                                        <div className="header__top__right__links">
                                            <a href="#" className="search-switch"><img src="/img/icon/search.png"
                                                                                       alt=""/></a>
                                            <a href="#"><img src="/img/icon/heart.png" alt=""/></a>
                                        </div>
                                        {localStorage.getItem('status') === true || localStorage.getItem('status') === 'true' &&<>
                                            <div className="header__top__right__cart">
                                                <Link to={'my-cart/'+localStorage.getItem('idOrder')}>
                                                    <a href=""><img src="/img/icon/cart.png" alt=""/> <span>0</span></a>
                                                </Link>
                                                <div className="cart__price" >Cart: <span>$0.00</span></div>
                                            </div>
                                        </>}
                                        '
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

                                            <ul className="dropdown" style={{width:160}}>
                                                <li><Link to={'/merchants/my-shop/' + merchant.idMerchant}>My Shop</Link>
                                                </li>
                                                <li><Link to={'/merchants/manager-order/' + merchant.idMerchant}>Manager Order</Link>
                                                </li>
                                                <li><Link to={'/merchants/statistics/' + merchant.idMerchant}>Statistics</Link>
                                                </li>
                                                <li><Link to={'/merchants/statistics-by-time/' + merchant.idMerchant}>Statistics Time</Link>
                                                </li>
                                            </ul>
                                        </li>}
                                    <li><Link to={'/shop'}>Foods</Link></li>
                                    {((localStorage.getItem('NameStatus')===null && localStorage.getItem('role')===null && localStorage.getItem('status')===null) || (localStorage.getItem('NameStatus') === false && localStorage.getItem('role') === false && localStorage.getItem('status') === false))&& <>
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
        </>
    )
}