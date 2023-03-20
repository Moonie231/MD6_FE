import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findByIdFood} from "../../service/foodsService";

export default function Food() {
    const {idFood} = useParams()
    const dispatch = useDispatch()
    const food = useSelector(state => {
        console.log(state)
        return state.foods.food
    })

    useEffect(() =>{
        dispatch(findByIdFood(idFood))
    }, [])
    return(
        <>
            <section className="product-details spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="product__details__img">
                                <div className="product__details__big__img">
                                    <img style={{width: "50%", height: "50%"}} src={food.img} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product__details__text">
                                <div className="product__label">{food.nameCategory}</div>
                                <h4>{food.nameFood}</h4>
                                <h5>${food.price}</h5>
                                <p>Quantity: {food.quantityFood}</p>
                                <p>Desciption: {food.description}</p>
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