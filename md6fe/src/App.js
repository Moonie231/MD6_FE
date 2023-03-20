import './App.css';
import Home from "./Page/home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import {Route, Routes} from "react-router-dom";
import AddFood from "./Page/food/addFood";
import EditFood from "./Page/food/editFood";
import LoginMerchant from "./Page/merchant/login";
import RegisterMerchant from "./Page/merchant/register";
import LoginUser from "./Page/user/login";
import RegisterUser from "./Page/user/register";
import VerifyEmail from "./Page/user/verifyEmail";
import ShopMerchant from "./Page/shopMerchant/shopMerchant";
import MerchantActive from "./Page/admin/merchantActive";
import MerchantPending from "./Page/admin/merchantPending";
import Shop from "./Page/shopMerchant/shop";
import ProfileMerchant from "./Page/merchant/profile";
import ProfileUser from "./Page/user/profile";
import Address from "./Page/address/address";
import StatisticsByUser from "./Page/shopMerchant/statisticsByUser";
import Cart from "./Page/user/cart";
import Merchant from "./Page/admin/merchant";
import Food from "./Page/food/food";
import Checkout from "./Page/user/checkOut";
import ManagerOrder from "./Page/merchant/managerOrder";
import OrderDetail from "./Page/merchant/orderDetail";

function App() {
    localStorage.getItem('NameStatus')
    localStorage.getItem('role')
    localStorage.getItem('status')
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path={''} element={<Home/>}></Route>
                <Route path={'login-merchant'} element={<LoginMerchant/>}></Route>
                <Route path={'my-cart/:id'} element={<Cart/>}></Route>
                <Route path={'check-out/:id'} element={<Checkout/>}></Route>
                <Route path={'verify-email/' + localStorage.getItem('email-token')} element={<VerifyEmail/>}></Route>
                <Route path={'register-merchant'} element={<RegisterMerchant/>}></Route>
                <Route path={'login-user'} element={<LoginUser/>}></Route>
                <Route path={'register-user'} element={<RegisterUser/>}></Route>
                <Route path={'add-food'} element={<AddFood/>}/>
                <Route path={'shop'} element={<Shop/>}/>
                <Route path={`edit-food/:idFood`} element={<EditFood/>}/>
                <Route path={`food/:idFood`} element={<Food/>}/>
                <Route path={'merchants'}>
                    <Route path={`:idMerchant`} element={<ProfileMerchant></ProfileMerchant>}></Route>
                    <Route path={'my-shop/:idMerchant'} element={<ShopMerchant/>}>
                    </Route>
                    <Route path={`manager-order/:idMerchant`} element={<ManagerOrder/>}/>
                    <Route path={'statistics/:id'} element={<StatisticsByUser/>}>
                    </Route>
                </Route>
                <Route path={'users'}>
                    <Route path={`:idUser`} element={<ProfileUser></ProfileUser>}></Route>
                    <Route path={'address'}>
                        <Route path={`:idUser`} element={<Address></Address>}></Route>>
                    </Route>
                </Route>
                <Route path={'admin'}>
                    <Route path={'merchant-active'} element={<MerchantActive></MerchantActive>}></Route>
                    <Route path={'merchant-pending'} element={<MerchantPending></MerchantPending>}></Route>
                    <Route path={'merchant/:idMerchant'} element={<Merchant></Merchant>}></Route>
                </Route>
                <Route path={'*'} element={<Home/>}></Route>
            </Routes>
            <Footer></Footer>

        </>
    )
}

export default App;
