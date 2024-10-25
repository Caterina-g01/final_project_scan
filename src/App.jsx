import React, { useEffect } from "react";
import {
  HashRouter,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import AutorizationPage from "./pages/AutorizationPage/AutorizationPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import SearchResultPage from "./pages/SearchResultPage/SearchResultPage";
import Footer from "./components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { userAuth, userInfo, userLogout } from "./store/userSlice";
import { getInfo } from "./requests/authActions";

function App() {
  const dispatch = useDispatch();
  let location = useLocation();

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    const expire = localStorage.getItem("expire");
    const token = localStorage.getItem("token");
    const expireDate = new Date(expire);
    const now = new Date();
    if (token && now < expireDate) {
      dispatch(userAuth());
      dispatch(getInfo());
    } else {
      dispatch(userLogout());
    }
  }, [dispatch, location.pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AutorizationPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/results" element={<SearchResultPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
