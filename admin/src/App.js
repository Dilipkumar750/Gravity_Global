import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin";
import Login from "./Components/Login";
import Register from "./Components/Register";
import HomeLayout from "./layout/HomeLayout";
import AddProduct from "./Components/AddProduct/AddProduct";
import ListProduct from "./Components/ListProduct/ListProduct";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} /> {/* Use element for v6 */}
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<HomeLayout />}>
          <Route path="addproduct" element={<AddProduct />} /> {/* Nested route example */}
          <Route path="listproduct" element={<ListProduct />} /> {/* Nested route example */}
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
