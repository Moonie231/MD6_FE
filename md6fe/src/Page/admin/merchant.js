import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMerchant} from "../../service/merchantService";

export default function Merchant() {
    const {idMerchant} = useParams()
    const dispatch = useDispatch()
    const merchant = useSelector(state => {
        return state.merchant.merchantDetail
    })

    useEffect(() => {
        dispatch(getMerchant(idMerchant))
    }, [])
    return (
        <>
            <section className="product-details spad">
                <div className="container">
                    <div className="row">
                        <img style={{width: "50%", height: 700, paddingBottom: 100}} src={merchant.image} alt=""/>

                        <div className="col-lg-6">
                            <div className="product__details__text">
                                <div className="product__label">{merchant.status}</div>
                                <h4>{merchant.nameMerchant}</h4>
                                <h5><i className="fa-solid fa-envelope"></i> {merchant.email}</h5>
                                <p><i className="fa-solid fa-location-dot"></i> {merchant.address}</p>
                                <p><i className="fa-solid fa-phone"></i> {merchant.phone}</p>
                                <div className="product__details__option">
                                    <div className="quantity">
                                        <div className="pro-qty">
                                            <input type="text" value="2"/>
                                        </div>
                                    </div>
                                    <a href="#" className="primary-btn">Add to cart</a>
                                    <a href="#" className="heart__btn"><span className="icon_heart_alt"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}