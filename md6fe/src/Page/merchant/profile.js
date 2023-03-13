import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {editProfile, getProfile} from "../../service/merchantService";
import swal from "sweetalert";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useEffect} from "react";

const validateSchema = Yup.object().shape({
    nameMerchant: Yup.string()
        .min(2, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
    address: Yup.string()
        .min(2, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
    phone: Yup.string()
        .min(2, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
})
export default function Profile() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let {idMerchant} = useParams()
    const merchant = useSelector((state) => {
        return state.merchant.profile
    })
    const handleEdit = async (values) => {
        let data = [{...values}, idMerchant];
        await dispatch(editProfile(data)).then(() => {
            swal("Edit Success !!!");
            navigate("/");
        });
    };
    useEffect(() => {
        dispatch(getProfile(idMerchant))
    }, [])
    return (
        <>
            <section className="h-100 gradient-form" style={{backgroundColor: ''}}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">

                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">
                                            <div className="text-center">
                                                <img src="/img/logo.png" alt=""/>
                                                <h4 className="mt-1 mb-5 pb-1"></h4>
                                            </div>
                                            <Formik
                                                initialValues={{
                                                    nameMerchant: merchant.nameMerchant,
                                                    address: merchant.address,
                                                    phone: merchant.phone,
                                                    image: merchant.image
                                                }}
                                                validationSchema={validateSchema}
                                                onSubmit={(values) => {
                                                    handleEdit(values).then(
                                                        navigate("/"));
                                                }}
                                                enableReinitialize={true}
                                            >
                                                <Form>
                                                    <div className="row g-3">
                                                        <div className="col-12">
                                                            <div className="form-floating">
                                                                <Field type="text" class="form-control"
                                                                       name={'nameMerchant'} id="nameMerchant"
                                                                       placeholder="Name"/>
                                                                <alert className="text-danger">
                                                                    <ErrorMessage name={"nameMerchant"}></ErrorMessage>
                                                                </alert>
                                                            </div>
                                                            <div className="form-floating">
                                                                <Field type="text" class="form-control" name={'address'}
                                                                       id="address" placeholder="Address"/>
                                                            </div>
                                                            <div className="form-floating">
                                                                <Field type="text" class="form-control" name={'phone'}
                                                                       id="phone" placeholder="Phone"/>
                                                                <alert className="text-danger">
                                                                    <ErrorMessage name={"phone"}></ErrorMessage>
                                                                </alert>
                                                            </div>
                                                            <div className="form-floating">
                                                                <Field type="text" class="form-control" name={'image'}
                                                                       id="image" placeholder="Image"/>
                                                                <alert className="text-danger">
                                                                    <ErrorMessage name={"image"}></ErrorMessage>
                                                                </alert>
                                                            </div>
                                                        </div>

                                                        <div className="col-12">
                                                            <button className="btn btn-outline-primary w-100 py-3"
                                                                    type="submit">Save changes
                                                            </button>
                                                        </div>
                                                    </div>
                                                </Form>
                                            </Formik>
                                        </div>
                                    </div>
                                    {/*<div className="col-lg-6 d-flex align-items-center gradient-custom-2">*/}
                                    {/*    <img style={{width: '460px', height: '100%'}} src="src={urls} alt={urls}" alt=""/>*/}
                                    {/*    <div className="text-white px-3 py-4 p-md-5 mx-md-4">*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}