import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Error from "./Pages/Error";
import Profile from "./Pages/Profile";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import AddAd from "./Pages/AddAd";
import ListAd from "./Pages/ListAd";
import FavoritAd from "./Pages/FavoritAd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current } from "./JS/actions/user";
import PrivateRouter from "./router/PrivateRouter";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      dispatch(current());
    }
  }, [token, dispatch]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/listad" element={<ListAd />} />
        <Route path="/*" element={<Error />} />
        {/*private router  */}
        <Route path="/profil" element={<PrivateRouter element={Profile} />} />
        <Route path="/addad" element={<PrivateRouter element={AddAd} />} />
        <Route
          path="/favoritad"
          element={<PrivateRouter element={FavoritAd} />}
        />
        {/* admin private router */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
