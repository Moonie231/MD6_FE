import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {editOrder, getOrder, showCart} from "../../service/orderService";

export default function ManagerOrder() {
    const {idMerchant} = useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const order = useSelector(state => {
        return state.orders.order
    })

    useEffect(() => {
        dispatch(getOrder(idMerchant))
    }, [])

    return (
        <>
            <div className="container" style={{backgroundColor: 'lightgray'}}>

                {order.map((item) => (
                    <>
                        <div className="" style={{
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
                                            width: 80,
                                            height: 80,
                                            flexShrink: 0,
                                            border: '1px solid #e1e1e1',
                                        }}>
                                            <div className="" style={{
                                                position: 'relative',
                                                width: '100%',
                                                height: '100%'
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
                                                    left: 0
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
                                                    <div className="" style={{
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
                                                        }}>{item.nameFood}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="" style={{
                                                        margin: '0 0 5px',
                                                        color: 'rgba(0,0,0,.54)'
                                                    }}>Category: {item.nameCategory}</div>
                                                    <div className="" style={{margin: '0 0 5px'}}>x{item.quantity}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="" style={{textAlign: 'right'}}>
                                            <div>
                                                <span className="" style={{
                                                    verticalAlign: 'middle',
                                                    fontSize: 14,
                                                    color: 'rgba(0,0,0,.87)'
                                                }}>${item.price}</span>
                                            </div>
                                            <div className="btn btn-outline-success" style={{marginTop: 20}}>
                                                   Confirm
                                            </div>
                                        <div className="btn btn-outline-danger" style={{marginLeft: 10, marginTop: 20}}>
                                                   Cancel
                                            </div>
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
                                padding: '24px 24px 12px',
                                background: '#fffefb',
                            }}>
                                <div className="" style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center'
                                }}>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}
