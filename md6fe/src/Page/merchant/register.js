import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import swal from "sweetalert";
import {register} from "../../service/merchantService";
import {useDispatch} from "react-redux";

const validateSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email format")
        .required("Required"),
    merchantPassword: Yup.string()
        .matches(/^[a-zA-Z0-9]/)
        .min(6, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
    nameMerchant: Yup.string()
        .matches(/^[a-zA-Z0-9]/, 'Username must have characters')
        .min(2, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
});

export default function RegisterMerchant() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = (values) => {
        let data = {...values};
        dispatch(register(data)).then((value) => {
            if (value.payload === "Email already registered") {
                swal("Email already registered");
                navigate("/register-merchant");
            } else {
                swal("Register successfully")
                navigate("/login-merchant");
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
                                                nameMerchant: "",
                                                merchantPassword: "",
                                                email: ""
                                            }}
                                                    validationSchema={validateSchema}
                                                    onSubmit={(values) => {
                                                        handleRegister(values);
                                                    }}
                                            >
                                                <Form>
                                                    <p>Please register to create an account merchant</p>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label"
                                                               htmlFor="username">Name Merchant</label>
                                                        <Field type="text" id="username" className="form-control"
                                                               name={'nameMerchant'}
                                                               placeholder="Username"/>
                                                        <alert className="text-danger">
                                                            <ErrorMessage name={"nameMerchant"}></ErrorMessage>
                                                        </alert>
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label"
                                                               htmlFor="password">Password</label>
                                                        <Field type="password" id="password" className="form-control"
                                                               name={'merchantPassword'}
                                                               placeholder="Password"/>
                                                        <alert className="text-danger">
                                                            <ErrorMessage name={"merchantPassword"}></ErrorMessage>
                                                        </alert>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="name">Email</label>
                                                        <Field type="text" id="name" className="form-control"
                                                               name={'email'}
                                                               placeholder="Email"/>
                                                        <alert className="text-danger">
                                                            <ErrorMessage name={"email"}></ErrorMessage>
                                                        </alert>
                                                    </div>
                                                    <div className="text-center pt-1 mb-5 pb-1">
                                                        <button
                                                            style={{backgroundColor:"rgb(240,134,40)",border:'none',color:"white",width:300}}
                                                            type="submit">Register
                                                        </button>
                                                    </div>

                                                    <div
                                                        className="d-flex align-items-center justify-content-center pb-4">
                                                        <p className="mb-0 me-2">Already have an account?</p>
                                                        <Link to={'/login-merchant'}>
                                                            <button type="button" style={{backgroundColor:"rgb(240,134,40)",border:'none',color:"white",width:150}}>Log
                                                                in
                                                            </button>
                                                        </Link>
                                                    </div>

                                                </Form>
                                            </Formik>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <img style={{width: '460px', height: '100%'}} src="/img/sandwich.jpg" alt=""/>
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