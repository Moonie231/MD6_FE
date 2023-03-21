import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {
    editOrder, getOrder, searchOrder, setStatusCancelled, setStatusConfirm, showCart
} from "../../service/orderService";
import swal from "sweetalert";
import {getMerchantPending, setStatus} from "../../service/merchantService";
import {Field, Form, Formik} from "formik";


export default function ManagerOrder() {
    const {idMerchant} = useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const order = useSelector(state => {
        return state.orders.order
    })

    const handleSearch = (values) => {
        dispatch(searchOrder(values));

    }
    useEffect(() => {
        dispatch(getOrder(idMerchant))
    }, [])


    return (<>

            <div className="container" style={{backgroundColor: 'lightgray', marginTop: 40}}>
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
                {order.map((item) => (<>
                        <div className="" style={{
                            margin: '12px 0', boxShadow: '0 1px 1px 0 rgb(0 0 0 / 5%)', borderRadius: '0.125rem',
                        }}>
                            <div>
                                <div className="" style={{
                                    paddingTop: 24, padding: '12px 24px', background: '#fff'
                                }}>
                                    <div className="" style={{
                                        padding: '0 0 0px',
                                        justifyContent: 'space-between',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <div className="" style={{
                                            padding: '0 0 0 10px', display: 'flex', alignItems: 'center'
                                        }}>
                                        </div>
                                        <div className="" style={{
                                            color: 'black',
                                            textAlign: 'right',
                                            textTransform: 'uppercase',
                                            whiteSpace: 'nowrap',
                                            marginRight: 900
                                        }}>{item.username}
                                        </div>
                                        <div className="" style={{
                                            color: 'black',
                                            textAlign: 'left',
                                            textTransform: 'uppercase',
                                            whiteSpace: 'nowrap',
                                            marginLeft: '-170px'
                                        }}>{item.phone}
                                        </div>
                                        <div className="" style={{
                                            color: 'red',
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
                                            margin: 0, border: 0
                                        }}>
                                            <div>
                                    <span className="" style={{
                                        display: 'flex',
                                        wordWrap: 'break-word',
                                        padding: '12px 0 0',
                                        alignItems: 'center',
                                        flexWrap: 'nowrap',
                                        color: 'rgba(0,0,0,.87)'
                                    }}>
                                        <div className="" style={{
                                            padding: '0 12px 0 0',
                                            flex: 1,
                                            alignItems: 'flex-start',
                                            flexWrap: 'nowrap',
                                            display: 'flex',
                                            wordWrap: 'break-word'
                                        }}>
                                        <div className="" style={{
                                            width: 80, height: 80, flexShrink: 0, border: '1px solid #e1e1e1',
                                        }}>
                                            <div className="" style={{
                                                position: 'relative', width: 80, height: 80
                                            }}>
                                            <div
                                                className=""
                                                style={{
                                                    backgroundImage: `url(${item.img})`,
                                                    backgroundPosition: '50%',
                                                    backgroundSize: 'cover',
                                                    backgroundRepeat: 'no-repeat',
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '100%'

                                                }}>
                                                <div className=""></div>
                                            </div>
                                            </div>
                                        </div>
                                            <div className="" style={{
                                                minWidth: 0,
                                                padding: '0 0 0 12px',
                                                display: 'flex',
                                                flex: 1,
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                wordWrap: 'break-word'
                                            }}>
                                                <div>
                                                    <Link to={`orderDetail/${item.idOrder}`} className="" style={{
                                                        overflow: 'hidden',
                                                        display: '-webkit-box',
                                                        textOverflow: 'ellipsis',
                                                        margin: ' 0 0 5px',
                                                        fontSize: 16,
                                                        lineHeight: 22,
                                                        maxHeight: 48
                                                    }}>
                                                        <p className="" style={{
                                                            verticalAlign: 'middle',
                                                        }}>{item.nameFood}</p></Link>

                                                </div>
                                                <div>
                                                    <div className="" style={{
                                                        margin: '0 0 5px', color: 'rgba(0,0,0,.54)'
                                                    }}>Category: {item.nameCategory}</div>
                                                    <div className="" style={{margin: '0 0 5px'}}>x{item.quantity}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="" style={{textAlign: 'right'}}>
                                            <div>
                                                <span className="" style={{
                                                    verticalAlign: 'middle', fontSize: 14, color: 'rgba(0,0,0,.87)'
                                                }}>${item.price}</span>
                                            </div>
                                            {item.status === 'pending' && <>
                                                <div className="btn btn-outline-success" style={{marginTop: 20}}
                                                     onClick={() => {
                                                         swal({
                                                             title: "Are you sure?",
                                                             icon: "warning",
                                                             buttons: true,
                                                             dangerMode: true,
                                                         })
                                                             .then(async (willConfirm) => {
                                                                 if (willConfirm) {
                                                                     console.log(item.idOrder)
                                                                     await dispatch(setStatusConfirm(item.idOrder)).then(async () => {
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
                                                <div className="btn btn-outline-danger"
                                                     style={{marginLeft: 10, marginTop: 20}} onClick={() => {
                                                    swal({
                                                        title: "Are you sure?",
                                                        icon: "warning",
                                                        buttons: true,
                                                        dangerMode: true,
                                                    })
                                                        .then(async (willCancelled) => {
                                                            if (willCancelled) {
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
                                        </div>
                                    </span>
                                            </div>
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
                                padding: '24px 24px 12px', background: '#fffefb',
                            }}>
                                <div className="" style={{
                                    display: 'flex', justifyContent: 'flex-end', alignItems: 'center'
                                }}>
                                </div>
                            </div>
                        </div>
                    </>))}
            </div>
        </>)
}
