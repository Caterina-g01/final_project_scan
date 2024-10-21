import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from "../src/pages/MainPage/MainPage";
import AutorizationPage from './pages/AutorizationPage/AutorizationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AutorizationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
