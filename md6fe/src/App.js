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
import Profile from "./Page/merchant/profile";
import ShopMerchant from "./Page/shopMerchant/shopMerchant";
import MerchantActive from "./Page/admin/merchantActive";
import MerchantPending from "./Page/admin/merchantPending";
import Shop from "./Page/shopMerchant/shop";

function App() {
  localStorage.getItem('NameStatus')
  localStorage.getItem('role')
  localStorage.getItem('status')
  console.log(  localStorage.getItem('NameStatus'),
  localStorage.getItem('role'),
  localStorage.getItem('status'))
  return (
<>
  <Header></Header>
  <Routes>
    <Route path={''} element={<Home/>}></Route>
    <Route path={'login-merchant'} element={<LoginMerchant/>}></Route>
    <Route path={'verify-email/'+localStorage.getItem('email-token')} element={<VerifyEmail/>}></Route>
    <Route path={'register-merchant'} element={<RegisterMerchant/>}></Route>
    <Route path={'login-user'} element={<LoginUser/>}></Route>
    <Route path={'register-user'} element={<RegisterUser/>}></Route>
    <Route path={'add-food'} element={<AddFood/>}/>
    <Route path={'shop'} element={<Shop/>}/>
    <Route path={`edit-food/:idFood`} element={<EditFood/>}/>
    <Route path={'merchants'}>
        <Route path={`edit/:idMerchant`} element={<Profile></Profile>}></Route>
        <Route path={'my-shop/:idMerchant'} element={<ShopMerchant/>}>
        </Route>
    </Route>
    <Route path={'admin'}>
      <Route path={'merchant-active'} element={<MerchantActive></MerchantActive>}></Route>
      <Route path={'merchant-pending'} element={<MerchantPending></MerchantPending>}></Route>
    </Route>
    <Route path={'*'} element={<Home/>}></Route>
  </Routes>
  <Footer></Footer>

</>
  )
}

export default App;
