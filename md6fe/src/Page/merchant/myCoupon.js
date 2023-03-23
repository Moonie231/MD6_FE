import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {createCoupon, deleteCoupon, myCoupon, updateCoupon} from "../../service/couponService";
import swal from "sweetalert";

export default function MyCoupon() {
    const {idMerchant} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const coupon = useSelector((state) => {
        console.log(state)
        return state.coupons.coupons
    })

    useEffect(() => {
        dispatch(myCoupon(idMerchant))
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
                                    }}>My Coupon
                                    </div>
                                    <div className="WO0t3c" style={{
                                        display: 'flex'
                                    }}>
                                        <div className="qZnY9m" style={{
                                            paddingLeft: '0.625rem',
                                            marginleft: '0.625rem',
                                        }}>
                                            <button className="AtS1UR" style={{
                                                height: 40,
                                                padding: 20,
                                                fontSize: '.875rem',
                                                fontWeight: 400,
                                                position: 'relative',
                                                overflow: 'visible',
                                                outline: 0,
                                                background: '#ee4d2d',
                                                cursor: 'pointer',
                                                lineHeight: 1,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '#fff',
                                                transition: 'opacity .2s ease',
                                                borderRadius: 2,
                                                userSelect: 'none',
                                                boxShadow: '0 1px 1px 0 rgb(0 0 0 / 9%)'
                                            }} onClick={() => {
                                                swal("New Coupon", {
                                                    content: "input",
                                                    showCancelButton: true,
                                                    confirmButtonText: 'Lưu',
                                                    cancelButtonText: 'Hủy',
                                                })
                                                    .then(async (result) => {
                                                        if (result) {
                                                            let data = {
                                                                value: result,
                                                                id_Merchant: localStorage.getItem('idMerchant')
                                                            }
                                                            await dispatch(createCoupon(data)).then(async () => {
                                                                await dispatch(myCoupon(idMerchant)).then(() => {
                                                                    navigate('/merchants/my-coupon/' + idMerchant)
                                                                })

                                                            });
                                                            swal("Add ok!", {
                                                                icon: "success",
                                                            });
                                                        } else {
                                                            swal("No coupon!");
                                                        }
                                                    });
                                            }}>New Coupon
                                            </button>
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

                                                        }}>
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
                                                                     }} onClick={() => {
                                                                    swal("Edit Your Coupon", {
                                                                        content: "input",
                                                                        inputValue: '132',
                                                                        showCancelButton: true,
                                                                        confirmButtonText: 'Lưu',
                                                                        cancelButtonText: 'Hủy',
                                                                    })
                                                                        .then(async (result) => {
                                                                            if (result) {
                                                                                let data = [{value: result}, item.idCoupon]
                                                                                console.log(data)
                                                                                await dispatch(updateCoupon(data)).then(async () =>{
                                                                                    await dispatch(myCoupon(idMerchant)).then(() => {
                                                                                        navigate('/merchants/my-coupon/'+idMerchant)
                                                                                    })

                                                                                });
                                                                                swal("Edit ok!", {
                                                                                    icon: "success",
                                                                                });
                                                                            } else {
                                                                                swal("Your address is safe!");
                                                                            }
                                                                        });
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
                                                                            }}>Discount {item.value}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="vc_Subtitle_subTitle vc_Subtitle_defaultLine"
                                                                        // style={{
                                                                        // fontSize: var(--vc-subtitle-font-size,.875rem);
                                                                        // font-weight: var(--vc-subtitle-font-weight,normal);
                                                                        // line-height: var(--vc-subtitle-line-height,1rem);
                                                                        // margin: var(--vc-sub-title-margin,0);
                                                                        // padding: var(--vc-sub-title-padding,0);
                                                                        // text-align: var(--vc-subtitle-text-align,unset);
                                                                        // white-space: var(--vc-sub-title-white-space,unset);
                                                                        // word-break: break-word
                                                                    >{item.value} discount on food
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
                                                                            <a className="vc_UseLink_link" style={{
                                                                                color: '#ee4d2d',
                                                                                fontSize: '1 rem',
                                                                                marginRight: '0.75rem',
                                                                                position: 'relative',
                                                                                textDecoration: 'none'
                                                                            }} onClick={() => {
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
                                                                                            dispatch(deleteCoupon(item.idCoupon)).then(() => {
                                                                                                navigate('/merchants/my-coupon/' + idMerchant)
                                                                                                dispatch(myCoupon(idMerchant)).then(() => {
                                                                                                })

                                                                                            })
                                                                                        } else {
                                                                                            swal("Your imaginary file is safe!");
                                                                                        }
                                                                                    });
                                                                            }}><i
                                                                                className="fa-solid fa-delete-left"></i></a>
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