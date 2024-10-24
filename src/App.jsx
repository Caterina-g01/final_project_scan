import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "../src/pages/MainPage/MainPage";
import AutorizationPage from "./pages/AutorizationPage/AutorizationPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import SearchResultPage from "./pages/SearchResultPage/SearchResultPage";
import { AuthProvider } from "../src/context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/auth" element={<AutorizationPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/results" element={<SearchResultPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
