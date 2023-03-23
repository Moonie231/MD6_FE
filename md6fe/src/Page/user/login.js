import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import swal from "sweetalert";
import {Link, useNavigate} from "react-router-dom";
import {login} from "../../service/userService";

const validateSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email format")
        .required("Required"),
    password: Yup.string()
        .min(2, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
});

export default function LoginUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = async (values) => {
        await dispatch(login(values)).then((e) => {
            console.log(e.payload)
            if (e.payload === "Account not ready") {
                swal("Account not ready");
            } else if (e.payload === "User not found") {
                swal("User not found");
            } else if (e.payload === "Wrong password") {
                swal("Wrong password");
            }else if (e.payload.status === false ||e.payload.status ==='false'){
                swal('Account not verified')
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
                                                <img src="/img/loginBuyer.jpg" alt=""/>
                                                <h4 className="mt-1 mb-5 pb-1"></h4>
                                            </div>
                                            <Formik initialValues={{
                                                email: "",
                                                password: ""
                                            }}
                                                    validationSchema={validateSchema}
                                                    onSubmit={(values) => {
                                                        handleLogin(values)
                                                    }}>
                                                <Form>
                                                    <p>Please login to your account <a href="" style={{color:'rgb(240,134,40)'}} target="_blank">Buyer</a></p>
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
                                                               htmlFor="form2Example22">Password</label>
                                                        <Field type="password" id="form2Example22" name={'password'}
                                                               placeholder="Password"
                                                               className="form-control"/>
                                                        <alert className="text-danger">
                                                            <ErrorMessage name={"password"}></ErrorMessage>
                                                        </alert>
                                                    </div>
                                                    <div className="text-center pt-1 mb-5 pb-1">
                                                        <button
                                                            style={{backgroundColor:"rgb(240,134,40)",border:'none',color:"white",width:300}}                                                            type="submit">Login
                                                        </button>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-center pb-4">
                                                        <p className="mb-0 me-2">Don't have an account?</p>
                                                        <Link to={"/register-user"}><button type="button" style={{backgroundColor:"rgb(240,134,40)",border:'none',color:"white",width:150}}>Create new</button></Link>
                                                    </div>
                                                </Form>
                                            </Formik>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <img style={{width: '459px', height: '100%'}} src="/img/hamburger.jpg" alt=""/>
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