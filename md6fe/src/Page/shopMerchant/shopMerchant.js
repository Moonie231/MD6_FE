import {useDispatch, useSelector} from "react-redux";
import {deleteFood, getFood, myFood} from "../../service/foodsService";
import {useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import swal from 'sweetalert'

export default function ShopMerchant() {
    const {idMerchant} = useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const foods = useSelector(state => {
        return state.foods.myFood
    });
    useEffect(() => {
        dispatch(myFood(idMerchant))
    }, []);

    return (
        <>
            <div>
                <Link className="btn btn-outline-dark" style={{marginTop: 50}} to={`/add-food`}>
                    Create Food
                </Link>
            </div>
            <section className="wishlist spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="wishlist__cart__table">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Description</th>
                                        <th></th>
                                        <th>Category</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {  foods.map((item) => (
                                        <tr>
                                            <td className="product__cart__item">
                                                <div className="product__cart__item__pic">
                                                    <img style={{height:100,width:150}} src={item.img} alt=""/>
                                                </div>
                                                <div className="product__cart__item__text">
                                                    <h6>{item.nameFood}</h6>
                                                </div>
                                            </td>
                                            <td className="cart__price">$ {item.price}</td>
                                            <td className="cart__stock">{item.description}</td>
                                            <td className="cart__stock"></td>
                                            <td className="cart__stock">{item.nameCategory}</td>
                                            <td className="cart__btn">
                                                <Link  to={`/edit-food/${item.idFood}`}>
                                                    <a href="#" className="btn btn-outline-dark">
                                                    Edit</a>
                                                </Link>
                                            </td>
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
                                                                .then((willDelete) => {
                                                                    if (willDelete) {

                                                                        swal("Poof! Your imaginary file has been deleted!", {
                                                                            icon: "success",
                                                                        });
                                                                        dispatch(deleteFood(item.idFood)).then(() => {
                                                                            navigate('/')
                                                                            dispatch(getFood()).then(() => {
                                                                            })

                                                                        })
                                                                    } else {
                                                                        swal("Your imaginary file is safe!");
                                                                    }
                                                                });
                                                        }}></span>
                                                </td>
                                        </tr>
                                        )
                                    )}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}