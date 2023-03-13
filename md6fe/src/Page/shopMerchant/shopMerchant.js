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
        </>
    )
}