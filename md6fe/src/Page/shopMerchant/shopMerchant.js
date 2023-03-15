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
            <section className="ftco-section ftco-cart">
                <div className="row">
                    <div className="col-md-12 ftco-animate">
                        <div className="cart-list">
                            <table className="table">
                                <thead className="thead-primary">
                                <tr className="text-center" >
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Name Food</th>
                                    <th>Price</th>
                                    <th>Description</th>
                                    <th>Category</th>
                                    <th colSpan={2}>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {foods.map((item, ind) => (
                                    <tr>
                                        <th scope="col">{ind + 1}</th>
                                        <th scope="col"><img src={item.img} style={{height: 100, width: 150}} alt=""/></th>
                                        <td scope="col">{item.nameFood}</td>
                                        <td scope="col">{item.price}</td>
                                        <td scope="col">{item.description}</td>
                                        <td scope="col">{item.nameCategory}</td>
                                        <td>
                                            <Link className="btn btn-outline-success" to={`/edit-food/${item.idFood}`}>
                                                Edit
                                            </Link>
                                            <button className="btn btn-outline-danger" style={{marginLeft: 30}}
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
                                                    }}><i className="fa-solid fa-trash"></i></button>
                                        </td>

                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}