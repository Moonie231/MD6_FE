import Header from "../Component/Header";
import Footer from "../Component/Footer";

export default function Home(){
    return(
        <>
            <body>
            <section className="hero">
                <div className="">
                    <div className="hero__item set-bg" style={{backgroundImage:'url(img/hero/hero-1.jpg)'}}>
                        <div className="container">
                            <div className="row d-flex justify-content-center">
                               
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="about spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="about__text">
                                <div className="section-title">
                                    <span>About Cake shop</span>
                                    <h2>Cakes and bakes from the house of Queens!</h2>
                                </div>
                                <p>The "Cake Shop" is a Jordanian Brand that started as a small family business. The
                                    owners are
                                    Dr. Iyad Sultan and Dr. Sereen Sharabati, supported by a staff of 80 employees.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="about__bar">
                                <div className="about__bar__item">
                                    <p>Cake design</p>
                                    <div id="bar1" className="barfiller">
                                        <div className="tipWrap"><span className="tip"></span></div>
                                        <span className="fill" data-percentage="95"></span>
                                    </div>
                                </div>
                                <div className="about__bar__item">
                                    <p>Cake Class</p>
                                    <div id="bar2" className="barfiller">
                                        <div className="tipWrap"><span className="tip"></span></div>
                                        <span className="fill" data-percentage="80"></span>
                                    </div>
                                </div>
                                <div className="about__bar__item">
                                    <p>Cake Recipes</p>
                                    <div id="bar3" className="barfiller">
                                        <div className="tipWrap"><span className="tip"></span></div>
                                        <span className="fill" data-percentage="90"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="categories" >
                <div className="container">
                    <div className="row" >
                        <div className="" >
                            <div className="categories__item" style={{float:'left'}}>
                                <div className="categories__item__icon">
                                    <span className="flaticon-029-cupcake-3"></span>
                                    <h5>Cupcake</h5>
                                </div>
                            </div>
                            <div className="categories__item" style={{float:'left'}} >
                                <div className="categories__item__icon">
                                    <span className="flaticon-034-chocolate-roll"></span>
                                    <h5>Butter</h5>
                                </div>
                            </div>
                            <div className="categories__item" style={{float:'left'}}>
                                <div className="categories__item__icon" >
                                    <span className="flaticon-005-pancake"></span>
                                    <h5>Red Velvet</h5>
                                </div>
                            </div>
                            <div className="categories__item" style={{float:'left'}}>
                                <div className="categories__item__icon">
                                    <span className="flaticon-030-cupcake-2"></span>
                                    <h5>Biscuit</h5>
                                </div>
                            </div>
                            <div className="categories__item" style={{float:'left'}}>
                                <div className="categories__item__icon">
                                    <span className="flaticon-006-macarons"></span>
                                    <h5>Donut</h5>
                                </div>
                            </div>
                            <div className="categories__item" style={{float:'left'}}>
                                <div className="categories__item__icon">
                                    <span className="flaticon-006-macarons"></span>
                                    <h5>Cupcake</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{backgroundImage:'url(img/shop/product-1.jpg)'}}>
                                    <div className="product__label">
                                        <span>Cupcake</span>
                                    </div>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Dozen Cupcakes</a></h6>
                                    <div className="product__item__price">$32.00</div>
                                    <div className="cart_add">
                                        <a href="#">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{backgroundImage:'url(img/shop/product-2.jpg)'}}>
                                    <div className="product__label">
                                        <span>Cupcake</span>
                                    </div>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Cookies and Cream</a></h6>
                                    <div className="product__item__price">$30.00</div>
                                    <div className="cart_add">
                                        <a href="#">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{backgroundImage:'url(img/shop/product-1.jpg)'}}>
                                    <div className="product__label">
                                        <span>Cupcake</span>
                                    </div>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Gluten Free Mini Dozen</a></h6>
                                    <div className="product__item__price">$31.00</div>
                                    <div className="cart_add">
                                        <a href="#">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{backgroundImage:'url(img/shop/product-1.jpg)'}}>
                                    <div className="product__label">
                                        <span>Cupcake</span>
                                    </div>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Cookie Dough</a></h6>
                                    <div className="product__item__price">$25.00</div>
                                    <div className="cart_add">
                                        <a href="#">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{backgroundImage:'url(img/shop/product-1.jpg)'}}>
                                    <div className="product__label">
                                        <span>Cupcake</span>
                                    </div>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Vanilla Salted Caramel</a></h6>
                                    <div className="product__item__price">$05.00</div>
                                    <div className="cart_add">
                                        <a href="#">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{backgroundImage:'url(img/shop/product-1.jpg)'}}>
                                    <div className="product__label">
                                        <span>Cupcake</span>
                                    </div>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">German Chocolate</a></h6>
                                    <div className="product__item__price">$14.00</div>
                                    <div className="cart_add">
                                        <a href="#">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{backgroundImage:'url(img/shop/product-1.jpg)'}}>
                                    <div className="product__label">
                                        <span>Cupcake</span>
                                    </div>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Dulce De Leche</a></h6>
                                    <div className="product__item__price">$32.00</div>
                                    <div className="cart_add">
                                        <a href="#">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{backgroundImage:'url(img/shop/product-1.jpg)'}}>
                                    <div className="product__label">
                                        <span>Cupcake</span>
                                    </div>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Mississippi Mud</a></h6>
                                    <div className="product__item__price">$08.00</div>
                                    <div className="cart_add">
                                        <a href="#">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="class spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="class__form">
                                <div className="section-title">
                                    <span>Class cakes</span>
                                    <h2>Made from your <br/>own hands</h2>
                                </div>
                                <form action="#">
                                    <input type="text" placeholder="Name"/>
                                        <input type="text" placeholder="Phone"/>
                                            <select>
                                                <option value="">Studying Class</option>
                                                <option value="">Writting Class</option>
                                                <option value="">Reading Class</option>
                                            </select>
                                            <input type="text" placeholder="Type your requirements"/>
                                                <button type="submit" className="site-btn">registration</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="team spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-7">
                            <div className="section-title">
                                <span>Our team</span>
                                <h2>Sweet Baker </h2>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className="team__btn">
                                <a href="#" className="primary-btn">Join Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team__item set-bg"  style={{backgroundImage:'url(img/team/team-1.jpg)'}}>
                                <div className="team__item__text">
                                    <h6>Randy Butler</h6>
                                    <span>Decorater</span>
                                    <div className="team__item__social">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                        <a href="#"><i className="fa fa-youtube-play"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team__item set-bg" style={{backgroundImage:'url(img/team/team-1.jpg)'}}>
                                <div className="team__item__text">
                                    <h6>Randy Butler</h6>
                                    <span>Decorater</span>
                                    <div className="team__item__social">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                        <a href="#"><i className="fa fa-youtube-play"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team__item set-bg" style={{backgroundImage:'url(img/team/team-1.jpg)'}}>
                                <div className="team__item__text">
                                    <h6>Randy Butler</h6>
                                    <span>Decorater</span>
                                    <div className="team__item__social">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                        <a href="#"><i className="fa fa-youtube-play"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team__item set-bg" style={{backgroundImage:'url(img/team/team-1.jpg)'}}>
                                <div className="team__item__text">
                                    <h6>Randy Butler</h6>
                                    <span>Decorater</span>
                                    <div className="team__item__social">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                        <a href="#"><i className="fa fa-youtube-play"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonial spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="section-title">
                                <span>Testimonial</span>
                                <h2>Our client say</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="testimonial__slider owl-carousel">
                            <div className="col-lg-6">
                                <div className="testimonial__item">
                                    <div className="testimonial__author">
                                        <div className="testimonial__author__pic">
                                            <img src="/img/testimonial/ta-1.jpg" alt=""/>
                                        </div>
                                        <div className="testimonial__author__text">
                                            <h5>Kerry D.Silva</h5>
                                            <span>New york</span>
                                        </div>
                                    </div>
                                    <div className="rating">
                                        <span className="icon_star"></span>
                                        <span className="icon_star"></span>
                                        <span className="icon_star"></span>
                                        <span className="icon_star"></span>
                                        <span className="icon_star-half_alt"></span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt
                                        ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testimonial__item">
                                    <div className="testimonial__author">
                                        <div className="testimonial__author__pic">
                                            <img src="/img/testimonial/ta-2.jpg" alt=""/>
                                        </div>
                                        <div className="testimonial__author__text">
                                            <h5>Kerry D.Silva</h5>
                                            <span>New york</span>
                                        </div>
                                    </div>
                                    <div className="rating">
                                        <span className="icon_star"></span>
                                        <span className="icon_star"></span>
                                        <span className="icon_star"></span>
                                        <span className="icon_star"></span>
                                        <span className="icon_star-half_alt"></span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt
                                        ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testimonial__item">
                                    <div className="testimonial__author">
                                        <div className="testimonial__author__pic">
                                            <img src="/img/testimonial/ta-1.jpg" alt=""/>
                                        </div>
                                        <div className="testimonial__author__text">
                                            <h5>Ophelia Nunez</h5>
                                            <span>London</span>
                                        </div>
                                    </div>
                                    <div className="rating">
                                        <span className="icon_star"></span>
                                        <span className="icon_star"></span>
                                        <span className="icon_star"></span>
                                        <span className="icon_star"></span>
                                        <span className="icon_star-half_alt"></span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt
                                        ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testimonial__item">
                                    <div className="testimonial__author">
                                        <div className="testimonial__author__pic">
                                            <img src="/img/testimonial/ta-2.jpg" alt=""/>
                                        </div>
                                        <div className="testimonial__author__text">
                                            <h5>Kerry D.Silva</h5>
                                            <span>New york</span>
                                        </div>
                                    </div>
                                    <div className="rating">
                                        <span className="icon_star"></span>
                                        <span className="icon_star"></span>
                                        <span className="icon_star"></span>
                                        <span className="icon_star"></span>
                                        <span className="icon_star-half_alt"></span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt
                                        ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testimonial__item">
                                    <div className="testimonial__author">
                                        <div className="testimonial__author__pic">
                                            <img src="/img/testimonial/ta-1.jpg" alt=""/>
                                        </div>
                                        <div className="testimonial__author__text">
                                            <h5>Ophelia Nunez</h5>
                                            <span>London</span>
                                        </div>
                                    </div>
                                    <div className="rating">
                                        <span className="icon_star"></span>
                                        <span className="icon_star"></span>
                                        <span className="icon_star"></span>
                                        <span className="icon_star"></span>
                                        <span className="icon_star-half_alt"></span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt
                                        ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testimonial__item">
                                    <div className="testimonial__author">
                                        <div className="testimonial__author__pic">
                                            <img src="/img/testimonial/ta-2.jpg" alt=""/>
                                        </div>
                                        <div className="testimonial__author__text">
                                            <h5>Kerry D.Silva</h5>
                                            <span>New york</span>
                                        </div>
                                    </div>
                                    <div className="rating">
                                        <span className="icon_star"></span>
                                        <span className="icon_star"></span>
                                        <span className="icon_star"></span>
                                        <span className="icon_star"></span>
                                        <span className="icon_star-half_alt"></span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt
                                        ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="instagram spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 p-0">
                            <div className="instagram__text">
                                <div className="section-title">
                                    <span>Follow us on instagram</span>
                                    <h2>Sweet moments are saved as memories.</h2>
                                </div>
                                <h5><i className="fa fa-instagram"></i> @sweetcake</h5>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                                    <div className="instagram__pic">
                                        <img src="/img/instagram/instagram-1.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                                    <div className="instagram__pic middle__pic">
                                        <img src="/img/instagram/instagram-2.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                                    <div className="instagram__pic">
                                        <img src="/img/instagram/instagram-3.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                                    <div className="instagram__pic">
                                        <img src="/img/instagram/instagram-4.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                                    <div className="instagram__pic middle__pic">
                                        <img src="/img/instagram/instagram-5.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                                    <div className="instagram__pic">
                                        <img src="/img/instagram/instagram-3.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="map">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-7">
                            <div className="map__inner">
                                <h6>COlorado</h6>
                                <ul>
                                    <li>1000 Lakepoint Dr, Frisco, CO 80443, USA</li>
                                    <li>Sweetcake@support.com</li>
                                    <li>+1 800-786-1000</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map__iframe">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10784.188505644011!2d19.053119335158936!3d47.48899529453826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1543907528304"
                         style={{border:'0',height:'300px'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
            </div>

            </body>
        </>
    )
}