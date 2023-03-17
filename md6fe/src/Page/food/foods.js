import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import swal from 'sweetalert'
import {deleteFood, getFood} from "../../service/foodsService";



export default function ListFood(){
    // const navigate = useNavigate();

    const dispatch = useDispatch();

    const foods = useSelector(state => {
        return state.foods.foods
    });

    useEffect(()=>{
        dispatch(getFood())
    },[]);

    return(
        <>
            <div className="row">
                <div className="col-12">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">NameFood</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Img</th>
                            <th scope="col">nameMerchant</th>
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
                                <th scope="col">{item.nameMerchant}</th>
                                <th>
                                    <Link to={`edit-food/${item.idFood}`}><button className="btn btn-outline-success" style={{marginRight: 10}}>
                                        <i className="fa-solid fa-pen-to-square"></i></button></Link>
                                    <button className="btn btn-outline-danger" onClick={() => {

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