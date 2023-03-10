import './App.css';
import Home from "./Page/home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import {Route, Routes} from "react-router-dom";
import LoginMerchant from "./Page/merchant/login";
import RegisterMerchant from "./Page/merchant/register";
import LoginUser from "./Page/user/login";
import RegisterUser from "./Page/user/register";
import VerifyEmail from "./Page/user/verifyEmail";
import Profile from "./Page/merchant/profile";
import ShopMerchant from "./Page/shopMerchant/shopMerchant";
import MerchantActive from "./admin/merchantActive";
import MerchantPending from "./admin/merchantPending";

function App() {

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
    <Route path={'merchants'}>
        <Route path={`edit/:idMerchant`} element={<Profile></Profile>}></Route>
    </Route>
    <Route path={'my-shop'} element={<ShopMerchant/>}></Route>
    <Route path={'admin'}>
      <Route path={'merchant-active'} element={<MerchantActive></MerchantActive>}></Route>
      <Route path={'merchant-pending'} element={<MerchantPending></MerchantPending>}></Route>
    </Route>

  </Routes>
  <Footer></Footer>

</>
  );
}

export default App;
