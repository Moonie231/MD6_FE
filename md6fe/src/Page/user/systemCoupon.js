import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import swal from "sweetalert";
import {adminCoupon} from "../../service/couponService";
import {updateCouponPriceAdmin} from "../../service/orderService";

export default function SystemCoupon() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const coupon = useSelector((state) => {
        console.log(state.coupons.coupons)
        return state.coupons.coupons
    })

    useEffect(() => {
        dispatch(adminCoupon())
    }, [])
    return (
        <>
            <div className="container">
                <div className="xMDeox" style={{
                    position: 'relative',
                    flexGrow: 1,
                    width: '100%',
                    boxSizing: 'border-box',
                    marginLeft: '1.6875rem',
                    minwidth: 0,
                    background: '#fff',
                    boxShadow: '0 1px 2px 0 rgb(0 0 0 / 13%)',
                    borderRadius: '0.125rem',
                }}>
                    <div style={{"display": "contents"}}>
                        <div>
                            <div></div>
                            <div className="_2+xiBC" style={{
                                boxShadow: '0 1px 1px 0 rgb(0 0 0 / 5%)',
                                borderRadius: '0.125rem',
                                overflow: 'hidden',
                                flexGrow: 1,
                                padding: '1.5625rem 2rem',
                                background: '#fff',
                            }}>
                                <div className="RCVyH2" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    <div className="VoFc+2" style={{
                                        fontSize: '1.25rem',
                                        fontWeight: 500,
                                        textransform: 'capitalize',
                                        color: 'rgba(0,0,0,.8)'
                                    }}> Coupon can use
                                    </div>
                                    <div className="WO0t3c" style={{
                                        display: 'flex'
                                    }}>
                                        <div className="qZnY9m" style={{
                                            paddingLeft: '0.625rem',
                                            marginleft: '0.625rem',
                                        }}>
                                        </div>
                                    </div>
                                </div>
                                <div className="coOw9l" style={{
                                    marginTop: 16
                                }}>
                                    <div className="TMCf0u" style={{
                                        display: 'flex',
                                        flexWrap: 'wrap'
                                    }}>
                                        {coupon.map((item) => (
                                            <div className="LUGhvJ">
                                                <div className="d6WhVp" style={{
                                                    height: '100%',
                                                    position: 'relative',
                                                    paddingLeft: '55px',
                                                    paddingBottom: 20
                                                }}>
                                                    <div
                                                        className="vc_Card_container vc_my-wallet-page-vouchers_pc vc_my-wallet-page-vouchers_shopeeVoucher"
                                                        style={{
                                                            width: 'var(--vc-card-width,28.375rem)',
                                                            backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/blog-825b4.appspot.com/o/images%2Fz4208192846814_eed40058b74e34f87fd4633088f2bbb8.jpg?alt=media&token=76f34cda-68b2-4c36-94be-5ecf8db124ed)'
                                                        }} onClick={() => {
                                                        swal({
                                                            title: "Choose this coupon?",
                                                            buttons: true,
                                                            dangerMode: true,
                                                        })
                                                            .then(async (willChoose) => {
                                                                if (willChoose) {
                                                                    let data = [localStorage.getItem('OrderDetails'), {value: Number(item.value)}]
                                                                     dispatch(updateCouponPriceAdmin(data))
                                                                    navigate('/my-cart/' + localStorage.getItem('idOrder'))

                                                                    swal("coupon has been selected!", {
                                                                        icon: "success",
                                                                    });
                                                                } else {
                                                                    swal("coupon has been removed!");
                                                                }
                                                            });
                                                    }
                                                    }>
                                                        <div className="vc_Card_card" style={{
                                                            height: 'var(--vc-card-height,7.375rem)',
                                                            position: 'relative',
                                                            width: 'var(--vc-card-width,28.375rem)'
                                                        }}>
                                                            <div className="vc_Card_right" style={{
                                                                borderBottomRightRadius: '0.125rem',
                                                                borderLeft: 'none',
                                                                borderTopRightRadius: '0.125rem',
                                                                boxSizing: 'border-box',
                                                                height: '100%',
                                                                position: 'absolute',
                                                                right: 0,
                                                                top: 0,
                                                                width: 'calc(100% - var(--vc-card-height, 7.375rem))',
                                                            }}></div>
                                                            <div className="vc_VoucherStandardTemplate_hideOverflow"
                                                                 style={{
                                                                     borderRadius: '0.125rem',
                                                                     bottom: 0,
                                                                     left: 0,
                                                                     overflow: 'hidden',
                                                                     position: 'absolute',
                                                                     right: 0,
                                                                     top: 0,
                                                                 }}></div>
                                                            <div className="vc_VoucherStandardTemplate_template"
                                                                 style={{
                                                                     borderLeft: 'none',
                                                                     boxShadow: 'var(--vc-template-box-shadow,.125rem .125rem .3125rem rgba(0,0,0,.07))',
                                                                     boxSizing: 'border-box',
                                                                     display: 'flex',
                                                                     height: '100%',
                                                                     position: 'relative',
                                                                     transition: 'background 1s ease'
                                                                 }}>

                                                                <div className="vc_VoucherStandardTemplate_middle"
                                                                     style={{
                                                                         display: 'flex',
                                                                         flex: 1,
                                                                         flexDirection: 'column',
                                                                         justifyContent: 'center',
                                                                         overflow: 'hidden',
                                                                         paddingLeft: '0.75rem',
                                                                         position: 'relative'
                                                                     }}>
                                                                    <div className="vc_MainTitle_mainTitle" style={{
                                                                        display: 'flex'
                                                                    }}>
                                                                        <div
                                                                            className="vc_MainTitle_text vc_MainTitle_defaultLine"
                                                                            style={{
                                                                                overflow: 'hidden',
                                                                                textOverflow: 'ellipsis',
                                                                                fontSize: 'var(--vc-main-title-font-size,1rem)',
                                                                                fontWeight: 500,
                                                                                lineHeight: 'var(--vc-main-title-line-height,1.25rem)'
                                                                            }}>Discount {item.value}%
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="vc_Subtitle_subTitle vc_Subtitle_defaultLine"
                                                                    >{item.value}% discount on food
                                                                    </div>
                                                                </div>
                                                                <div className="vc_VoucherStandardTemplate_right"
                                                                     style={{
                                                                         alignItems: 'flex-end',
                                                                         display: 'flex',
                                                                         flexDirection: 'column',
                                                                         justifyContent: 'space-between',
                                                                         padding: '0.75rem',
                                                                         position: 'relative'
                                                                     }}>
                                                                    <div>
                                                                        <div className="vc_UseLink_useLink" style={{
                                                                            cursor: 'pointer',
                                                                            display: 'inline'
                                                                        }}>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}