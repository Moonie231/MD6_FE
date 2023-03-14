import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getFood} from "../service/foodsService";


export default function Home() {
    const dispatch = useDispatch()
    const foods = useSelector((state) => {
        console.log(state.foods)
        return state.foods.foods
    })
    useEffect(() => {
        dispatch(getFood())
    },[])
    return (
        <>
            <body>
            <section className="hero">
                <div className="">
                    <div className="hero__item set-bg"
                         style={{backgroundImage: 'url(https://chupanhmonan.com/wp-content/uploads/2017/09/%C4%91%E1%BA%A7u-t%C6%B0-h%C3%ACnh-%E1%BA%A3nh-m%C3%B3n-%C4%83n-%C4%91%E1%BB%83-thu-h%C3%BAt-kh%C3%A1ch-h%C3%A0ng-1024x796.jpg)'}}>
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

            <div className="categories">
                <div className="container">
                    <div className="row">
                        <div className="">
                            <div className="categories__item" style={{float: 'left'}}>
                                <div className="categories__item__icon">
                                    <span className="flaticon-029-cupcake-3"></span>
                                    <h5>Cupcake</h5>
                                </div>
                            </div>
                            <div className="categories__item" style={{float: 'left'}}>
                                <div className="categories__item__icon">
                                    <span className="flaticon-034-chocolate-roll"></span>
                                    <h5>Butter</h5>
                                </div>
                            </div>
                            <div className="categories__item" style={{float: 'left'}}>
                                <div className="categories__item__icon">
                                    <span className="flaticon-005-pancake"></span>
                                    <h5>Red Velvet</h5>
                                </div>
                            </div>
                            <div className="categories__item" style={{float: 'left'}}>
                                <div className="categories__item__icon">
                                    <span className="flaticon-030-cupcake-2"></span>
                                    <h5>Biscuit</h5>
                                </div>
                            </div>
                            <div className="categories__item" style={{float: 'left'}}>
                                <div className="categories__item__icon">
                                    <span className="flaticon-006-macarons"></span>
                                    <h5>Donut</h5>
                                </div>
                            </div>
                            <div className="categories__item" style={{float: 'left'}}>
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
                            {foods!==undefined && foods.map((item)=>(
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
                                <h2>Developer</h2>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className="team__btn">
                                <a href="#" className="primary-btn">Join Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6" style={{marginLeft: '150px'}}>
                            <div className="team__item set-bg" style={{backgroundImage: 'url(img/team/team-1.jpg)'}}>
                                <div className="team__item__text">
                                    <h6>Nguyễn Duy Tùng</h6>
                                    <span>Leader</span>
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
                            <div className="team__item set-bg" style={{backgroundImage: 'url(img/team/team-2.jpg)'}}>
                                <div className="team__item__text">
                                    <h6>Đỗ Minh Trang</h6>
                                    <span>Member</span>
                                    <div className="team__item__social">
                                        <a href="https://www.facebook.com/moonie2301"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                        <a href="#"><i className="fa fa-youtube-play"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team__item set-bg" style={{backgroundImage: 'url(img/team/team-3.jpg)'}}>
                                <div className="team__item__text">
                                    <h6>Đàm Thanh Tùng</h6>
                                    <span>Member</span>
                                    <div className="team__item__social">
                                        <a href="https://www.facebook.com/thanhtung871998"><i
                                            className="fa fa-facebook"></i></a>
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
                                        <img style={{width: "229.98px", height: "229.98px"}}
                                             src="https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1550052451758-LL5DACGHWUM1MEAI6HOA/chup-anh-mon-an-com-ga-thuong-hai-8.jpg"
                                             alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                                    <div className="instagram__pic middle__pic">
                                        <img style={{width: "229.98px", height: "229.98px"}}
                                             src="https://znews-photo.zingcdn.me/w660/Uploaded/spivpdiv/2020_11_24/IMG_0485.jpg"
                                             alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                                    <div className="instagram__pic">
                                        <img style={{width: "229.98px", height: "229.98px"}}
                                             src="https://statics.vntrip.vn/data-v2/data-guide/img_content/1462768514_banh-mi-1.jpg"
                                             alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                                    <div className="instagram__pic">
                                        <img style={{width: "229.98px", height: "229.98px"}}
                                             src="https://afamilycdn.com/150157425591193600/2022/5/8/12xoibatsg-165198796742293443585.jpg"
                                             alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                                    <div className="instagram__pic middle__pic">
                                        <img style={{width: "229.98px", height: "229.98px"}}
                                             src="https://img5.thuthuatphanmem.vn/uploads/2021/12/08/hinh-anh-mi-cay-hai-san_084809323.jpg"
                                             alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                                    <div className="instagram__pic">
                                        <img style={{width: "229.98px", height: "229.98px"}}
                                             src="https://beenut.net/wp-content/uploads/2021/05/salad-rau-c%E1%BB%A7.jpg"
                                             alt=""/>
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
                        style={{border: '0', height: '300px'}} allowFullScreen="" aria-hidden="false"
                        tabIndex="0"></iframe>
                </div>
            </div>

            </body>
        </>
    )
}