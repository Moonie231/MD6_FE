import './App.css';
import Home from "./Page/home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import {Route, Routes} from "react-router-dom";
import ListFood from "./Page/food/foods";
import AddFood from "./Page/food/addFood";
import EditFood from "./Page/food/editFood";
import {useSelector} from "react-redux";
import LoginMerchant from "./Page/merchant/login";
import RegisterMerchant from "./Page/merchant/register";
import LoginUser from "./Page/user/login";
import RegisterUser from "./Page/user/register";
import VerifyEmail from "./Page/user/verifyEmail";



function App() {
  return (
<>
  <Routes>
    <Route path={''} element={<Home/>}></Route>
    <Route path={'login-merchant'} element={<LoginMerchant/>}></Route>
    <Route path={'verify-email/'+localStorage.getItem('email-token')} element={<VerifyEmail/>}></Route>
    <Route path={'register-merchant'} element={<RegisterMerchant/>}></Route>
    <Route path={'login-user'} element={<LoginUser/>}></Route>
    <Route path={'register-user'} element={<RegisterUser/>}></Route>
    <Route path={'/'} element={<ListFood/>}/>
    <Route path={'add-food'} element={<AddFood/>}/>
    <Route path={`edit-food/:idFood`} element={<EditFood/>}/>
  </Routes>
</>
  )
}

export default App;
