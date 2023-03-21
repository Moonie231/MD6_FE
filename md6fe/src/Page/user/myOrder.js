import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getOrder, myOrder, orderFood, setStatusCancelled, setStatusSuccess} from "../../service/orderService";
import FoodOfOrder from "./foodOfOrder";
import swal from "sweetalert";
import {getMerchantActive, setStatus} from "../../service/merchantService";

export default function MyOrder() {
    const {idUser} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const order = useSelector((state) => {
        let list = []
        state.orders.orders.map((item) => {
            list.push(item.idOrder)

        })
        let obj = {
            list: state.orders.orders,
            listIdOrder: list
        }
        return obj
    })
    useEffect(() => {
        dispatch(myOrder(idUser)).then((e) => {
        })
    }, [])
    return (
        <>
            <div className="container" style={{backgroundColor: 'lightgray'}}>
                {order.list.map((item, index) => (
                    <div key={index} className="" style={{
                        margin: '12px 0',
                        boxShadow: '0 1px 1px 0 rgb(0 0 0 / 5%)',
                        borderRadius: '0.125rem',
                    }}>
                        <div>
                            <div className="" style={{
                                paddingTop: 24,
                                padding: '12px 24px',
                                background: '#fff'
                            }}>

                                <div className="" style={{
                                    padding: '0 0 0px',
                                    justifyContent: 'space-between',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <div className="" style={{
                                        padding: '0 0 0 10px',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                    </div>
                                    <div className="" style={{
                                        color: '#ee4d2d',
                                        textAlign: 'right',
                                        textTransform: 'uppercase',
                                        whiteSpace: 'nowrap',
                                    }}>{item.status}
                                    </div>

                                </div>
                                <div className="" style={{
                                    borderBottom: '1px solid rgba(0,0,0,.09)',
                                }}></div>
                                <div className="">
                                    <div className="" style={{
                                        margin: 0,
                                        border: 0
                                    }}>
                                        <FoodOfOrder id={item.idOrder}></FoodOfOrder>
                                        <div className=""></div>
                                    </div>
                                </div>
                                <div className=""></div>
                            </div>

                        </div>
                        <div className="" style={{
                            width: '100%',
                            height: 0,
                            borderBottom: '1px dotted rgba(0,0,0,.09)',
                            position: 'relative'
                        }}>
                        </div>
                        <div className="" style={{
                            padding: '24px 24px 12px',
                            background: '#fffefb',
                        }}>


                            <div className="" style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'center'
                            }}>
                                {item.status === 'pending' && <>
                                    <button style={{
                                        justifyContent: 'flex-end',
                                        border: 0,
                                        background: '#ee4d2d',
                                        outline: 'none',
                                        padding: 4,
                                        color: 'white',
                                        textTransform: 'none',
                                        overflow: 'visible',
                                        marginRight: 10
                                    }} onClick={() => {
                                        swal({
                                            title: "Are you sure?",
                                            icon: "warning",
                                            buttons: true,
                                            dangerMode: true,
                                        })
                                            .then(async (willCancelled) => {
                                                if (willCancelled) {
                                                    await dispatch(setStatusCancelled(item.idOrder)).then(async () => {
                                                        await dispatch(myOrder(idUser)).then(() => {
                                                            navigate('/users/my-order/' + idUser)
                                                        })
                                                    })
                                                    swal("Your order has been cencel!", {
                                                        icon: "success",
                                                    });
                                                } else {
                                                    swal("Your order is safe!");
                                                }
                                            });
                                    }}> Cancel
                                    </button>
                                </>
                                }
                                {item.status === 'delivery' && <>
                                    <button style={{
                                        justifyContent: 'flex-end',
                                        border: 0,
                                        background: '#ee4d2d',
                                        outline: 'none',
                                        padding: 4,
                                        color: 'white',
                                        textTransform: 'none',
                                        overflow: 'visible',
                                        marginRight: 10
                                    }} onClick={() => {
                                        swal({
                                            title: "Are you sure?",
                                            icon: "warning",
                                            buttons: true,
                                            dangerMode: true,
                                        })
                                            .then(async (willSuccess) => {
                                                if (willSuccess) {
                                                    await dispatch(setStatusSuccess(item.idOrder)).then(async () => {
                                                        await dispatch(myOrder(idUser)).then(() => {
                                                            navigate('/users/my-order/' + idUser)
                                                        })
                                                    })
                                                    swal("Your order has been success!", {
                                                        icon: "success",
                                                    });
                                                } else {
                                                    swal("Your order is safe!");
                                                }
                                            });
                                    }}> Success
                                    </button>
                                </>
                                }
                                <div className="" style={{
                                    margin: '0 10px 0 0',
                                    fontSize: 14,
                                    color: 'rgba(0,0,0,.8)'
                                }}>Total Money:
                                </div>
                                <div className="" style={{
                                    color: '#ee4d2d',
                                    fontSize: 24,
                                }}>${item.totalMoney}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}