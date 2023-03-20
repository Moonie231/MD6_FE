import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMerchant} from "../../service/merchantService";

export default function Merchant (){
    const {idMerchant} = useParams()
    const dispatch = useDispatch()
    const merchant = useSelector(state => {
        return state.merchant.merchantDetail
    })

    useEffect(() => {
        dispatch(getMerchant(idMerchant))
    }, [])
 return(
     <>
         <section className="product-details spad">
             <div className="container">
                 <div className="row">
                     <div className="col-lg-6">
                         <div className="product__details__img">
                             <div className="product__details__big__img">
                                 <img style={{width: "50%", height: "50%"}} src={merchant.image} alt=""/>
                             </div>
                         </div>
                     </div>
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
                 <div className="product__details__tab">
                     <div className="col-lg-12">
                         <ul className="nav nav-tabs" role="tablist">
                             <li className="nav-item">
                                 <a className="nav-link active" data-toggle="tab" href="#tabs-1"
                                    role="tab">Description</a>
                             </li>
                             <li className="nav-item">
                                 <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Additional
                                     information</a>
                             </li>
                             <li className="nav-item">
                                 <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Previews(1)</a>
                             </li>
                         </ul>
                         <div className="tab-content">
                             <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                 <div className="row d-flex justify-content-center">
                                     <div className="col-lg-8">
                                         <p>This delectable Strawberry Pie is an extraordinary treat filled with sweet
                                             and
                                             tasty chunks of delicious strawberries. Made with the freshest ingredients,
                                             one
                                             bite will send you to summertime. Each gift arrives in an elegant gift box
                                             and
                                             arrives with a greeting card of your choice that you can personalize
                                             online!</p>
                                     </div>
                                 </div>
                             </div>
                             <div className="tab-pane" id="tabs-2" role="tabpanel">
                                 <div className="row d-flex justify-content-center">
                                     <div className="col-lg-8">
                                         <p>This delectable Strawberry Pie is an extraordinary treat filled with sweet
                                             and
                                             tasty chunks of delicious strawberries. Made with the freshest ingredients,
                                             one
                                             bite will send you to summertime. Each gift arrives in an elegant gift box
                                             and
                                             arrives with a greeting card of your choice that you can personalize
                                             online!2
                                         </p>
                                     </div>
                                 </div>
                             </div>
                             <div className="tab-pane" id="tabs-3" role="tabpanel">
                                 <div className="row d-flex justify-content-center">
                                     <div className="col-lg-8">
                                         <p>This delectable Strawberry Pie is an extraordinary treat filled with sweet
                                             and
                                             tasty chunks of delicious strawberries. Made with the freshest ingredients,
                                             one
                                             bite will send you to summertime. Each gift arrives in an elegant gift box
                                             and
                                             arrives with a greeting card of your choice that you can personalize
                                             online!3
                                         </p>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </section>
     </>
 )
}