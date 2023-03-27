import {useDispatch, useSelector} from "react-redux";
import React, {useEffect,} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {
    countOrderByCancelled,
    countOrderByDelivery,
    countOrderByPending,
    countOrderBySuccess,
    findOrderByCancelled, findOrderByDelivery,
    findOrderByPending, findOrderSuccess,
    getOrder,
    searchOrder,
    setStatusCancelled,
    setStatusConfirm,
} from "../../service/orderService";
import swal from "sweetalert";
import {Field, Form, Formik} from "formik";
import FoodOfOrder from "../merchant/foodOfOrder";
import FoodOfOrderMerchant from "../merchant/foodOfOrder";
import {saveNotification} from "../../service/notificationService";
import {setStatus} from "../../service/merchantService";


export default function ManagerOrder() {
    const {idMerchant} = useParams()
    const status = new URLSearchParams(window.location.search).get("status");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams();
    const handle=async (status)=>{
        searchParams.append('status', status);
        const queryString = searchParams.toString();
        navigate('/merchants/manager-order/4?' + queryString)
    }
    const order = useSelector(state => {
        return state.orders.orders
    })
    const countPending=useSelector((state)=>{
        return state.orders.countPending
    })
    const countSuccess=useSelector((state)=>{
        return state.orders.countSuccess
    })
    const countCancelled=useSelector((state)=>{
        return state.orders.countCancelled
    })
    const countDelivery=useSelector((state)=>{
        return state.orders.countDelivery
    })

    const handleSearch = (values) => {
        let data = [values, idMerchant]
        dispatch(searchOrder(data));

    }
    useEffect(() => {
        dispatch(countOrderByCancelled(idMerchant))
        dispatch(countOrderBySuccess(idMerchant))
        dispatch(countOrderByDelivery(idMerchant))
        dispatch(countOrderByPending(idMerchant))
        dispatch(getOrder(idMerchant))
    }, [status])


    return (
        <>
            <div className="container" style={{marginTop: 40}}>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="breadcrumb__text">
                            <h2>Order</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="shop__option__search" style={{width: 500, marginTop: 10}}>
                            <Formik initialValues={{
                                value: ''
                            }} onSubmit={(values) => {
                                handleSearch(values.value)
                            }}>
                                <Form>
                                    <Field type="text" name={'value'} placeholder="Search"/>
                                    <button type="submit"><i className="fa fa-search"></i></button>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="breadcrumb__links">
                            <Link to={'/'}>Home</Link>
                            <span>Order</span>
                        </div>
                    </div>
                </div>
                <div className="_0obGFe" style={{
                    width: '100%',
                    marginBottom: 12,
                    display: 'flex',
                    overflow: 'hidden',
                    top: 0,
                    zIndex: 10,
                    background: '#fff',
                    borderTopLeftRadius: 2,
                    textTransform: 'uppercase',
                    borderTopRightRadius: 2
                }}>

                    <div className="vAkdD0 r-S3nG" style={{
                        cursor: 'pointer',
                        userSelect: 'none',
                        padding: '16px 0',
                        fontSize: 16,
                        textAlign: 'center',
                        color: 'rgba(0,0,0,.8)',
                        background: '#fff',
                        borderBottom: '2px solid rgba(0,0,0,.09)',
                        display: 'flex',
                        flex: 1,
                        overflow: 'hidden',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }} >
                                <span onClick={()=>{
                                    handle('pending').then(()=>{
                                        dispatch(findOrderByPending(idMerchant))

                                    })
                                }} className="_0rjE9m" style={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                }}>pending[{countPending}]</span>
                    </div>
                    <div className="vAkdD0 r-S3nG" style={{
                        cursor: 'pointer',
                        userSelect: 'none',
                        padding: '16px 0',
                        fontSize: 16,
                        textAlign: 'center',
                        color: 'rgba(0,0,0,.8)',
                        background: '#fff',
                        borderBottom: '2px solid rgba(0,0,0,.09)',
                        display: 'flex',
                        flex: 1,
                        overflow: 'hidden',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} >
                                <span onClick={()=>{
                                    handle('delivery').then(()=>{
                                        dispatch(findOrderByDelivery(idMerchant))
                                    })
                                }}  className="_0rjE9m" style={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                }}>delivery[{countDelivery}]</span>
                    </div>
                    <div className="vAkdD0 r-S3nG" style={{
                        cursor: 'pointer',
                        userSelect: 'none',
                        padding: '16px 0',
                        fontSize: 16,
                        textAlign: 'center',
                        color: 'rgba(0,0,0,.8)',
                        background: '#fff',
                        borderBottom: '2px solid rgba(0,0,0,.09)',
                        display: 'flex',
                        flex: 1,
                        overflow: 'hidden',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    >
                                <span onClick={()=>{
                                    handle('success').then(()=>{
                                        dispatch(findOrderSuccess(idMerchant))
                                    })
                                }}  className="_0rjE9m" style={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                }}>success[{countSuccess}]</span>
                    </div>
                    <div className="vAkdD0 r-S3nG" style={{
                        cursor: 'pointer',
                        userSelect: 'none',
                        padding: '16px 0',
                        fontSize: 16,
                        textAlign: 'center',
                        color: 'rgba(0,0,0,.8)',
                        background: '#fff',
                        borderBottom: '2px solid rgba(0,0,0,.09)',
                        display: 'flex',
                        flex: 1,
                        overflow: 'hidden',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                                <span onClick={()=>{
                                    handle('cancelled').then(()=>{
                                        dispatch(findOrderByCancelled(idMerchant))
                                    })
                                }}  className="_0rjE9m" style={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                }}>cancelled[{countCancelled}]</span>
                    </div>
                </div>
                {order && order.map((item, index) => (
                    <>

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
                                                    <span className="-XHRLL">{item.username}</span>
                                                </div>
                                            </div>
                                            <FoodOfOrderMerchant id={item.idOrder}></FoodOfOrderMerchant>

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
                                        <div style={{
                                            cursor: 'pointer',
                                            justifyContent: 'flex-end',
                                            border: 0,
                                            background: '#ee4d2d',
                                            outline: 'none',
                                            padding: 4,
                                            color: 'white',
                                            textTransform: 'none',
                                            overflow: 'visible',
                                            marginRight: 10
                                        }}
                                             onClick={() => {
                                                 swal({
                                                     title: "Are you sure?",
                                                     icon: "warning",
                                                     buttons: true,
                                                     dangerMode: true,
                                                 })
                                                     .then(async (willConfirm) => {
                                                         if (willConfirm) {
                                                             handle('delivery').then()
                                                             await dispatch(setStatusConfirm(item.idOrder)).then(async () => {
                                                                 let data = {
                                                                     id_User: item.idUser,
                                                                     id_Order: item.idOrder,
                                                                     setStatus: 'delivery'
                                                                 }
                                                                 await dispatch(saveNotification(data))
                                                                 await dispatch(getOrder(idMerchant)).then(() => {
                                                                     navigate('/merchants/manager-order/' + idMerchant)
                                                                 })
                                                             })
                                                             swal("Your account has been active!", {
                                                                 icon: "success",
                                                             });
                                                         } else {
                                                             swal("Your account is safe!");
                                                         }
                                                     });
                                             }}>
                                            Confirm
                                        </div>
                                        <div style={{
                                            cursor: 'pointer',
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
                                                        handle('cancelled').then()
                                                        let data = {
                                                            id_User: item.idUser,
                                                            id_Order: item.idOrder,
                                                            setStatus: 'cancelled',
                                                        }
                                                        await dispatch(saveNotification(data))
                                                        await dispatch(setStatusCancelled(item.idOrder)).then(async () => {
                                                            await dispatch(getOrder(idMerchant)).then(() => {
                                                                navigate('/merchants/manager-order/' + idMerchant)
                                                            })
                                                        })
                                                        swal("Your account has been active!", {
                                                            icon: "success",
                                                        });
                                                    } else {
                                                        swal("Your account is safe!");
                                                    }
                                                });
                                        }}>
                                            Cancel
                                        </div>
                                    </>}
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
                    </>
                ))}
            </div>
        </>)
}