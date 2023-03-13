import {useDispatch} from "react-redux";
import {verifyEmail} from "../../service/userService";

export default function VerifyEmail(){
    const dispatch=useDispatch()
   dispatch(verifyEmail())
    return(
        <>
            <div style={{backgroundColor:"darkgray"}}>
                <p style={{color:"white"}}>{localStorage.getItem('name')}:Account is verified
                </p>
            </div>
        </>
    )
}