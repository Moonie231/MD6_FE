import {useDispatch} from "react-redux";
import {verifyEmail} from "../../service/userService";
import {Link} from "react-router-dom";

export default function VerifyEmail(){
    const dispatch=useDispatch()
   dispatch(verifyEmail())
    return(
        <>
            <section className="h-100 gradient-form" style={{backgroundColor: ''}}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="">
                                <div className="card-body p-md-5 mx-md-4" style={{textAlign: 'center'}}>
                                    <h1>Welcome {localStorage.getItem('name')}!</h1>
                                    <img src="/img/logo.png" width="125" height="120" style={{border: 0}}/>
                                    <p>We're excited to have you get started. First, you need to confirm your account. Just press the button below.</p>
                                    <Link to={'/login-user'}>
                                        <button type="button" style={{backgroundColor:"rgb(240,134,40)",border:'none',color:"white",width:150}}>Verify</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}