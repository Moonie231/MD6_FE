import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getOrder, myOrder, orderFood, setStatusCancelled, setStatusSuccess} from "../../service/orderService";
import FoodOfOrder from "./foodOfOrder";
import swal from "sweetalert";
import {getMerchantActive, setStatus} from "../../service/merchantService";
import {getFoods} from "../../service/foodsService";
import {saveNotification} from "../../service/notificationService";

export default function MyOrder() {
    const {idUser} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const order = useSelector((state) => {
     return state.orders.orders.order
    })
    const [page, setPage] = useSearchParams()
    const page1 = page.get('page') || 1;
    const totalPages = useSelector(state => {
        if (state.orders.orders !== undefined) {
            return state.orders.orders.totalPage;
        }
    })
    useEffect(() => {
        let data=[idUser,Number(page1)]
        dispatch(myOrder(data)).then((e) => {
        })
    }, [])
    return (
        <>
            <div className="container" style={{backgroundColor: 'white'}}>
                {order!==undefined && order.map((item, index) => (
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
                                        <div className="Zrxery" style={{
                                            padding: '20px 24px',
                                            fontSize: 14,
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}>
                                            <div className="K8h4Ws" style={{
                                                color: 'rgba(0,0,0,.54)'
                                            }}>
                                            </div>
                                            <div>
                                                <span className="-XHRLL">{item.nameMerchant}</span>
                                            </div>
                                        </div>
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
                                                    let data={
                                                        id_User:localStorage.getItem('idUser'),
                                                        id_Order:item.idOrder,
                                                        setStatus:'cancelled',
                                                        time:new Date().toISOString()
                                                    }
                                                    await dispatch(saveNotification(data))
                                                    await dispatch(setStatusCancelled(item.idOrder)).then(async () => {
                                                        let data=[idUser,page1]
                                                        await dispatch(myOrder(data)).then(() => {
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
                                                    let data={
                                                        id_User:localStorage.getItem('idUser'),
                                                        id_Order:item.idOrder,
                                                        setStatus:'success',
                                                        time:new Date().toISOString(),

                                                    }
                                                    await dispatch(saveNotification(data))
                                                    await dispatch(setStatusSuccess(item.idOrder)).then(async () => {
                                                        let data=[idUser,page1]
                                                        await dispatch(myOrder(data)).then(() => {
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
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        {(page1 === 1) ?
                            <>
                                <div className="page-link"><span aria-hidden="true"
                                                                 style={{color: 'black'}}>&laquo;</span>
                                </div>
                            </>
                            :
                            <>
                                <div className="page-link" onClick={() => {
                                    let data=[idUser,Number(page1-1)]
                                    if(Number(page1-1)>0){
                                        dispatch(myOrder(data));
                                        navigate('/users/my-order/' + data[0]+'?page='+data[1])
                                    }
                                }
                                }><span aria-hidden="true">&laquo;</span>
                                </div>
                            </>
                        }
                    </li>
                    <li className="page-item"><a className="page-link">{page1}/{totalPages}</a></li>
                    <li className="page-item">
                        {(page1 === totalPages) ?
                            <>
                                <div className="page-link"><span aria-hidden="true"
                                                                 style={{color: 'black'}}>&raquo;</span>
                                </div>
                            </>
                            :
                            <>
                                <div className="page-link" onClick={() => {
                                    if((Number(page1)+1)<=totalPages){
                                        let data=[idUser,(Number(page1)+1)]
                                        dispatch(myOrder(data));
                                        navigate('/users/my-order/' + data[0]+'?page='+data[1])
                                    }
                                }
                                }><span aria-hidden="true">&raquo;</span>
                                </div>
                            </>
                        }
                    </li>
                </ul>
            </nav>

        </>
    )
}