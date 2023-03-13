<<<<<<< HEAD
import {useDispatch, useSelector} from "react-redux";
import {deleteFood, getFood} from "../../service/foodsService";
import {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import swal from 'sweetalert'

export default function ShopMerchant(){
    const dispatch = useDispatch();
    const foods = useSelector(state => {
        return state.foods.foods
    });
    useEffect(()=>{
        dispatch(getFood())
    },[]);

    return(
        <>
            <div>
                <Link className="btn btn-outline-dark" style={{marginTop: 50}} to={`/add-food`}>
                    Create Food
                </Link>
            </div>
            <div className="row">
                <div className="col-12">
                    <table className="table" style={{marginTop:20}}>
                        <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">NameFood</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Img</th>
                            <th scope="col">Category</th>
                            <th scope="col">Merchant</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {foods.map((item,ind)=>(
                            <tr>
                                <th scope="col">{ind + 1}</th>
                                <th scope="col">{item.nameFood}</th>
                                <th scope="col">{item.description}</th>
                                <th scope="col">{item.price}</th>
                                <th scope="col"><img src={item.img} style={{height:100}} alt=""/></th>
                                <th scope="col">{item.nameCategory}</th>
                                <th scope="col">{item.nameMerchant}</th>
                                <th>
                                    <Link className="btn btn-outline-success" to={`/edit-food/${item.idFood}`}>
                                        Edit
                                    </Link>
                                    <button className="btn btn-outline-danger" style={{marginLeft: 30}} onClick={() => {
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
                                                    dispatch(deleteFood(item.idFood)).then(()=>{
                                                        dispatch(getFood()).then(()=>{
                                                        })

                                                    })
                                                } else {
                                                    swal("Your imaginary file is safe!");
                                                }
                                            });
                                    }}><i className="fa-solid fa-trash"></i></button>
                                </th>

                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
=======
export default function ShopMerchant(){
    return(
        <>
            <body>
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
                                <a href="./index.html">Home</a>
                                <span>Shopping cart</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="shopping-cart spad">
                <div className="container">
                    <div className="row">
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
                                                <div className="pro-qty">
                                                    <input type="text" value="1"/>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="cart__price">$ 30.00</td>
                                        <td className="cart__close"><span className="icon_close"></span></td>
                                    </tr>
                                    <tr>
                                        <td className="product__cart__item">
                                            <div className="product__cart__item__pic">
                                                <img src="/img/shop/cart/cart-2.jpg" alt=""/>
                                            </div>
                                            <div className="product__cart__item__text">
                                                <h6>Diagonal Textured Cap</h6>
                                                <h5>$98.49</h5>
                                            </div>
                                        </td>
                                        <td className="quantity__item">
                                            <div className="quantity">
                                                <div className="pro-qty">
                                                    <input type="text" value="1"/>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="cart__price">$ 32.50</td>
                                        <td className="cart__close"><span className="icon_close"></span></td>
                                    </tr>
                                    <tr>
                                        <td className="product__cart__item">
                                            <div className="product__cart__item__pic">
                                                <img src="/img/shop/cart/cart-3.jpg" alt=""/>
                                            </div>
                                            <div className="product__cart__item__text">
                                                <h6>Basic Flowing Scarf</h6>
                                                <h5>$98.49</h5>
                                            </div>
                                        </td>
                                        <td className="quantity__item">
                                            <div className="quantity">
                                                <div className="pro-qty">
                                                    <input type="text" value="1"/>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="cart__price">$ 47.00</td>
                                        <td className="cart__close"><span className="icon_close"></span></td>
                                    </tr>
                                    <tr>
                                        <td className="product__cart__item">
                                            <div className="product__cart__item__pic">
                                                <img src="/img/shop/cart/cart-4.jpg" alt=""/>
                                            </div>
                                            <div className="product__cart__item__text">
                                                <h6>Basic Flowing Scarf</h6>
                                                <h5>$98.49</h5>
                                            </div>
                                        </td>
                                        <td className="quantity__item">
                                            <div className="quantity">
                                                <div className="pro-qty">
                                                    <input type="text" value="1"/>
                                                </div>
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
                </div>
            </section>

            </body>

>>>>>>> 5376cbafe58be6921cf1d776cf8163ba29dcbb07
        </>
    )
}