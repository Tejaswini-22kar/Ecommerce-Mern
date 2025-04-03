import logo from './logo.svg';
import './App.css';
import Home from './componets/home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './componets/userAuth/Register';
import Login from './componets/userAuth/Login';
import Search from './componets/search/Search';
import Navbar from './componets/header/Navbar';
import Footer from './componets/footer/Footer';
import Shop from './componets/shop/Shop';

function App() {
  return (
   <>
   <Navbar/>
  
   <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/shop" element={<Shop />} />
  {/* <Route path="/cart" element={<AllCartsItem />} />
  
  <Route path="/addproduct" element={<AddUsers />} />
  <Route path="/singleproduct/:id" element={<SingleProduct />} /> */}
  <Route path="/product" element={<Search/>} />  
</Routes>
<Footer />
   </>
  );
}

export default App;
