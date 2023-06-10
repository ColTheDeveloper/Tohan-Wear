import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import StyledLayout from "./components/StyledLayout/StyledLayout";
import Home from './pages/Home/Home';
import Category from "./pages/Category/Category";
import Error from "./pages/Error/Error";
import Brand from "./pages/Brand/Brand";
import SingleCategory from "./pages/SingleCategory/SingleCategory";
import SingleBrand from "./pages/SingleBrand/SingleBrand";
import Profile from "./pages/Profile/Profile"
import Product from "./pages/Product/Product";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import { useEffect } from "react";
import LogIn from "./pages/LogIn/LogIn";
import Register from "./pages/Register/Register";
import Cart from "./pages/Cart/Cart";
import Admin from "./pages/Admin/Admin"
import { useDispatch, useSelector } from "react-redux";
import { fetchedProducts } from "./redux/productSlice/setProductSlice";
import AdminAllUser from "./pages/Admin/AdminAllUser/AdminAllUser";
import AdminAllProduct from "./pages/Admin/AdminAllProduct/AdminAllProduct";
import AdminAllAdmin from "./pages/Admin/AdminAllAdmin/AdminAllAdmin";
import AdminProductDetails from "./pages/Admin/AdminProductDetails/AdminProductDetails";
import 'reactjs-popup/dist/index.css';
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Checkout from "./pages/Checkout/Checkout";
import DelivaryAddress from "./components/DelivaryAddress/DelivaryAddress";
import UserProtectedRoute, { ProtectedRouteFromUser } from "./pages/ProtectedRoute/ProtectedRoute";


function App() {
  const dispatch=useDispatch();

  const user=useSelector(state=>state.login.user)
  console.log(user)

  const isAdmin=user?user.isAdmin:false
  
  
  useEffect(() => {
    dispatch(fetchedProducts())
  },[dispatch])
  
  
  
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StyledLayout />}>
            <Route index element={<Home />} />
            <Route path="category" element={<Category />} />
            <Route path="category/:category" element={<SingleCategory />} />
            <Route path="brand" element={<Brand />} />
            <Route path="product" element={<Product />} />
            <Route path="cart" element={<Cart />} /> 
            <Route path="admin" element={isAdmin ? <Admin /> : <Navigate to="/" />} />
            <Route path="admin/users" element={isAdmin ? <AdminAllUser />: <Navigate to="/" />} />
            <Route path="admin/products" element={isAdmin? <AdminAllProduct />:<Navigate to="/" />} />
            <Route path="admin/product/:productId" element={isAdmin? <AdminProductDetails /> :<Navigate to="/" />} />
            <Route path="admin/all" element={isAdmin? <AdminAllAdmin />:<Navigate to="/" />} />
            <Route path="brand/:brand" element={<SingleBrand />} />
            <Route path="product/:productId" element={<ProductDetails />} />
            <Route path="*" element={<Error />} />
            <Route element={<ProtectedRouteFromUser />} >
              <Route path="login" element={<LogIn />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route element={<UserProtectedRoute />} >
              <Route path="profile/:profileId" element={<Profile />} />
            </Route>
          </Route>
          <Route path="checkout" element={<Checkout />} >
            <Route index element={<DelivaryAddress />}  />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
