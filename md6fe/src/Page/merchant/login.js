import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import swal from "sweetalert";
import {Link, useNavigate} from "react-router-dom";
import {login} from "../../service/merchantService";

const validateSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email format")
        .required("Required"),
    merchantPassword: Yup.string()
        .min(1, "Too short!")
        .max(18, "Too long!")
        .required("Required"),
});

export default function LoginMerchant() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = async (values) => {
        await dispatch(login(values))
            .then((e) => {
                if (e.payload === "Account not ready") {
                    swal("Account not ready");
                } else if (e.payload === "Merchant not found") {
                    swal("Merchant not found");
                } else if (e.payload === "Wrong password") {
                    swal("Wrong password");
                } else if (e.payload === "Account locked") {
                    swal("Account locked");
                }else {
                    navigate("/")
                }
            });
    };

    return (
        <>
            <body>
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
                                            <Formik initialValues={{
                                                email: "",
                                                merchantPassword: ""
                                            }}
                                                    validationSchema={validateSchema}
                                                    onSubmit={handleLogin}>
                                                <Form>
                                                    <p>Please login to your account merchant</p>
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label"
                                                               htmlFor="form2Example11">Email</label>
                                                        <Field type="email" id="form2Example11" name={'email'}
                                                               className="form-control"
                                                               placeholder="Email"/>

                                                        <alert className="text-danger">
                                                            <ErrorMessage name={"email"}></ErrorMessage>
                                                        </alert>
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label"
                                                               htmlFor="form2Example">Password</label>
                                                        <Field type="password" id="form2Example22"
                                                               name={'merchantPassword'}
                                                               placeholder="Password"
                                                               className="form-control"/>
                                                        <alert className="text-danger">
                                                            <ErrorMessage name={"merchantPassword"}></ErrorMessage>
                                                        </alert>
                                                    </div>
                                                    <div className="text-center pt-1 mb-5 pb-1">
                                                        <button
                                                            className="btn btn-outline-primary btn-block fa-lg gradient-custom-2 mb-3"
                                                            type="submit">Login
                                                        </button>
                                                    </div>
                                                    <div
                                                        className="d-flex align-items-center justify-content-center pb-4">
                                                        <p className="mb-0 me-2">Don't have an account?</p>
                                                        <Link to={"/register-merchant"}>
                                                            <button type="button"
                                                                    className="btn btn-outline-danger">Create new
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </Form>
                                            </Formik>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <img style={{width: '459px', height: '100%'}} src="/img/fish-and-chips.jpeg"
                                             alt=""/>
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </body>
        </>
    )
}