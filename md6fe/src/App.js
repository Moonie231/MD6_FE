import './App.css';
import Home from "./Page/home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import {Route, Routes} from "react-router-dom";
import ListFood from "./Page/food/foods";
import AddFood from "./Page/food/addFood";
import EditFood from "./Page/food/editFood";
import {useSelector} from "react-redux";


function App() {


  return (
<>
  <Header></Header>
<Routes>
  <Route path={'home'} element={<Home/>}>
  <Route path={''} element={<ListFood/>}/>
  <Route path={'add-food'} element={<AddFood/>}/>
  <Route path={`edit-food/:idFood`} element={<EditFood/>}/>
  </Route>
</Routes>
  {/*<Footer></Footer>*/}
</>
  )
}

export default App;
