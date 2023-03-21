import FoodOfOrder from "./foodOfOrder";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {orderDetail} from "../../service/orderService";

export default function OrderDetail() {
    const {idOrder} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const order = useSelector((state) => {
        console.log(state.orders.orderDetail)
        return state.orders.orderDetail
    })

    useEffect(() => {
        dispatch(orderDetail(idOrder))
    }, [])
    return (
        <>
            <div className="container" style={{backgroundColor: 'lightgray'}}>
                <div className="xMDeox" style={{
                    position: 'relative',
                    flexGrow: 1,
                    width: '100%',
                    boxSizing: 'border-box',
                    marginleft: '1.6875rem',
                    minWidth: 0,
                    background: '#fff',
                    boxShadow: '0 1px 2px 0 rgb(0 0 0 / 13%)',
                    borderRadius: '0.125rem',
                }}>
                    <div className="GBcYbK" style={{
                        minHeight: 740,
                        background: '#f5f5f5',
                        boxShadow: '0 0 0 2px #f5f5f5'
                    }}>

                        <div className="BRCaAU" style={{
                            borderRadius: 2,
                            backgroundColor: '#fff',
                            boxShadow: '0 1px 1px 0 rgb(0 0 0 / 5%)'
                        }}>
                            <div className="Zrxery" style={{
                                padding: '20px 24px',
                                fontSize: 14,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}><Link to={'/users/my-order/' + localStorage.getItem('idUser')}><h4><i
                                className="fa-solid fa-arrow-rotate-left"></i> Back</h4></Link>
                                <div className="K8h4Ws" style={{
                                    color: 'rgba(0,0,0,.54)'
                                }}>
                                </div>
                                <div>
                                <span className="-XHRLL" style={{
                                    color: '#ee4d2d',
                                    textTransform: 'uppercase'
                                }}>{order.status}</span>
                                </div>
                            </div>
                            <div className="CqYika" style={{
                                width: '100%',
                                height: 0,
                                borderBottom: '1px dotted rgba(0,0,0,.09)',
                                position: 'relative'
                            }}>
                            </div>
                            <div>
                                <div className="rU5kQ6" style={{
                                    padding: '20px 24px 24px',
                                }}>
                                    <div className="ASGNe9" style={{
                                        padding: '0 0 12px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-end'
                                    }}>
                                        <div className="ver7Tm" style={{
                                            textTransform: 'capitalize',
                                            color: 'rgba(0,0,0,.8)',
                                            fontSize: 20,
                                        }}>order information
                                        </div>
                                    </div>
                                    <div className="RKBD1x" style={{
                                        display: 'flex'
                                    }}>
                                        <div className="ikpx1p" style={{
                                            maxWidth: '100%',
                                            padding: '10px 24px 0 0',
                                            flex: 1
                                        }}>
                                            <div className="D+2WM2" style={{
                                                maxWidth: '100%',
                                                margin: '0 0 7px',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                color: 'rgba(0,0,0,.8)'
                                            }}>{order.username}
                                            </div>
                                            <div className="IqSKNq" style={{
                                                color: 'rgba(0,0,0,.54)',
                                                fontSize: 12,
                                                whiteSpace: 'pre-line'
                                            }}>
                                                <p><i className="fa-solid fa-phone"></i> {order.phone}</p>
                                                <p><i className="fa-solid fa-location-dot"></i> {order.nameAddress}</p>
                                            </div>
                                        </div>
                                        <div className="w5KHDc">
                                            <div>
                                            </div>
                                            <p className="yqEat5" style={{
                                                color: '#05a',
                                                fontWeight: 700,
                                                paddingLeft: 170,
                                                cursor: 'pointer'
                                            }}>{order.Date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div className="z1upOh" style={{
                                        padding: '12px 24px'
                                    }}>
                                        <FoodOfOrder id={idOrder}></FoodOfOrder>
                                    </div>
                                    <div className="QZ4vFF" style={{
                                        backgroundColor: ' #fafafa',
                                        borderTop: '1px solid rgba(0,0,0,.09)'
                                    }}>
                                        <div className="MqHNeD fF6WqS" style={{
                                            alignItems: 'flex-start',
                                            border: 0,
                                            display: 'flex',
                                            justifyContent: 'flex-end'
                                        }}>
                                            <div className="vXeTuK _4I0y7U" style={{
                                                paddingTop: 20,
                                                padding: '13px 10px',
                                                color: 'rgba(0,0,0,.54)',
                                                fontSize: 12
                                            }}>
                                                <span>Total Money</span>
                                            </div>
                                            <div className="_30Hj4X" style={{
                                                padding: '13px 0 13px 10px',
                                                width: 240,
                                                borderLeft: '1px dotted rgba(0,0,0,.09)',
                                                justifyContent: 'flex-end',
                                                wordWrap: 'break-word',
                                                color: 'rgba(0,0,0,.8)'
                                            }}>
                                                <div className="fqySNq" style={{
                                                    color: '#ee4d2d',
                                                    fontSize: 24
                                                }}>${order.totalMoney}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="QFUBut">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}