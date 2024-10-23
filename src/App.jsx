import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from "../src/pages/MainPage/MainPage";
import AutorizationPage from './pages/AutorizationPage/AutorizationPage';
import { AuthProvider } from '../src/context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/auth" element={<AutorizationPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

