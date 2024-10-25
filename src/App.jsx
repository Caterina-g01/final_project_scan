import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import AutorizationPage from "./pages/AutorizationPage/AutorizationPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import SearchResultPage from "./pages/SearchResultPage/SearchResultPage";
import Footer from "./components/Footer/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { userAuth, userInfo, userLogout } from "./store/userSlice";
import { getInfo } from "./requests/authActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const expire = localStorage.getItem("expire");
    const expireDate = new Date(expire);
    const now = new Date();

    if (now < expireDate) {
      dispatch(userAuth());
      dispatch(getInfo());
    } else {
      dispatch(userLogout());
    }
  }, [dispatch]);

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AutorizationPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/results" element={<SearchResultPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
