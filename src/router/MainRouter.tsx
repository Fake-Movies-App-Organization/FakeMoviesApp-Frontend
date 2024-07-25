import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/Main/HomePage/HomePage';
import { ProfilePage } from '../pages/Main/ProfilePage/ProfilePage';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

const MainRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default MainRouter;