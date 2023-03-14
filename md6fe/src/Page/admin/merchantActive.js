import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMerchantActive, setStatus} from "../../service/merchantService";
import swal from "sweetalert";

export default function MerchantActive() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const merchants = useSelector((state) => {
        console.log(state.merchant.merchant)
        return state.merchant.merchant
    })
    useEffect(() => {
        dispatch(getMerchantActive())
    }, [])
    return (
        <>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name Merchant</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Status</th>
                    <th scope="col">Image</th>
                    <th scope="col">Email</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {merchants !== undefined && merchants.map((item, key) => (
                    <>
                        <tr>
                            <th scope="row">{key + 1}</th>
                            <td>{item.nameMerchant}</td>
                            <td>{item.address}</td>
                            <td>{item.phone}</td>
                            <td>{item.status}</td>
                            <td><img style={{height:100,width:100}} src={item.image} alt=""/></td>
                            <td>{item.email}</td>
                            <td>
                                {item.status === 'locked' && <>
                                    <button
                                        className="btn-danger rounded text-white position-absolute start-0 top-0 m-1 py-1 px-2"
                                        onClick={() => {
                                            swal({
                                                title: "Are you sure?",
                                                text: "Once deleted, you will not be able to recover this imaginary file!",
                                                icon: "warning",
                                                buttons: true,
                                                dangerMode: true,
                                            })
                                                .then( async (willActive) => {
                                                    if (willActive) {
                                                       await dispatch(setStatus(item.idMerchant)).then(async ()=>{
                                                          await  dispatch(getMerchantActive()).then(()=>{
                                                                navigate('/admin/merchant-active')
                                                            })
                                                        })
                                                        swal("Poof! Your imaginary file has been deleted!", {
                                                            icon: "success",
                                                        });
                                                    } else {
                                                        swal("Your imaginary file is safe!");
                                                    }
                                                });
                                        }}
                                    >
                                        Active
                                    </button>
                                </>}
                                {item.status === 'active' && <>
                                    <button
                                        className="btn-danger rounded text-white position-absolute start-0 top-0 m-1 py-1 px-2"
                                        onClick={() => {
                                            swal({
                                                title: "Are you sure?",
                                                text: "Once deleted, you will not be able to recover this imaginary file!",
                                                icon: "warning",
                                                buttons: true,
                                                dangerMode: true,
                                            })
                                                .then( async (willLock) => {
                                                    if (willLock) {
                                                       await dispatch(setStatus(item.idMerchant)).then(async ()=>{
                                                           await dispatch(getMerchantActive()).then(()=>{
                                                                navigate('/admin/merchant-active')
                                                            })
                                                        })
                                                        swal("Poof! Your imaginary file has been deleted!", {
                                                            icon: "success",
                                                        });
                                                    } else {
                                                        swal("Your imaginary file is safe!");
                                                    }
                                                });
                                        }}
                                    >
                                        Locked
                                    </button>
                                </>}

                            </td>
                        </tr>
                    </>
                ))}

                </tbody>
            </table>
        </>
    )
}