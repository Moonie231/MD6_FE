import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import customAxios from "../../service/api";

export default function FoodOfOrderMerchant({id}) {
    let {idUser} = useParams()
    const dispatch = useDispatch()
    const [foodOrder, setFoodOrder] = useState([])

    console.log(1)
    useEffect(() => {
        console.log(1)
        customAxios.get('orders/my-order-food/' + id).then(res => {
            console.log(1)
            setFoodOrder(res.data)
        })
    }, [])

    return (
        <>

            {foodOrder && foodOrder.map((item, index) => (
                <div key={index}>

                    <div className="CqYika" style={{
                        width: '100%',
                        height: 0,
                        borderBottom: '1px dotted rgba(0,0,0,.09)',
                        position: 'relative'
                    }}>
                    </div>
                    <Link to={`/merchants/orderDetail/${id}`}>
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
                        </div>
                    </span>
                    </Link>
                </div>
            ))}
        </>
    )
}