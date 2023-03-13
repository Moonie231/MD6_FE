import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../service/merchantService";

export default function Header(){
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const user = useSelector((state) =>{
         return state.merchant.currentMerchant
    } );

    return(
        <>
            <div id="preloder">
                <div className="loader"></div>
            </div>

            <div className="offcanvas-menu-overlay"></div>
            <div className="offcanvas-menu-wrapper">
                <div className="offcanvas__cart">
                    <div className="offcanvas__cart__links">
                        <a href="#" className="search-switch"><img src="/img/icon/search.png" alt=""/></a>
                        <a href="#"><img src="/img/icon/heart.png" alt=""/></a>
                    </div>
                    <div className="offcanvas__cart__item">
                        <a href="#"><img src="/img/icon/cart.png" alt=""/> <span>0</span></a>
                        <div className="cart__price">Cart: <span>$0.00</span></div>
                    </div>
                </div>
                <div className="offcanvas__logo">
                    <a href=""><img src="/img/logo.png" alt=""/></a>
                </div>
                <div id="mobile-menu-wrap"></div>
                <div className="offcanvas__option">
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
                        <li><a href="#">Sign in</a> <span className="arrow_carrot-down"></span></li>
                    </ul>
                </div>
            </div>

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
                                            <li>Login <span className="arrow_carrot-down" ></span>
                                                <ul>
                                                    <li><Link to={'/login-merchant'} style={{color: "white"}}>Merchant</Link></li>
                                                    <li><Link to={'/login-user'} style={{color: "white"}}>Buyer</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="header__logo">
                                        <a href=""><img src="/img/logo.png" alt=""/></a>
                                    </div>
                                    <div className="header__top__right">
                                        <div className="header__top__right__links">
                                            <a href="#" className="search-switch"><img src="/img/icon/search.png" alt=""/></a>
                                            <a href="#"><img src="/img/icon/heart.png" alt=""/></a>
                                        </div>
                                        <div className="header__top__right__cart">
                                            <a href="#"><img src="/img/icon/cart.png" alt=""/> <span>0</span></a>
                                            <div className="cart__price">Cart: <span>$0.00</span></div>
                                        </div>

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
                                    <li className="active"><a href="">Home</a></li>
                                    <li><a href="">About</a></li>
                                    <li><a href="">Shop</a></li>
                                    {localStorage.getItem('NameStatus')===true || localStorage.getItem('NameStatus')==='true' && <>
                                        <li><a href="#">{user.nameMerchant}</a>
                                            <ul className="dropdown">
                                                <li><Link to={`/merchants/edit/${user.idMerchant}`}>Profile</Link></li>
                                                <li><a href="" onClick={(e)=>{
                                                    dispatch(logout())
                                                    navigate('/')
                                                }}>Log Out</a></li>
                                            </ul>
                                        </li>
                                    </>}
                                    <li><a href="">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}