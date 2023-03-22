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

    useEffect(() => {
        dispatch(findByIdFood(idFood))
    }, [])
    return (
        <>
            <section className="product-details spad">
                <div className="container">
                    <div className="row">


                        <img style={{width: "50%", height: "50%", paddingBottom: 100}} src={food.img} alt=""/>

                        <div className="col-lg-6">
                            <div className="product__details__text">
                                <div className="product__label">{food.nameCategory}</div>
                                <h4>{food.nameFood}</h4>
                                <h5>${food.price}</h5>
                                <p>Quantity: {food.quantityFood}</p>
                                <p>Desciption: {food.description}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}