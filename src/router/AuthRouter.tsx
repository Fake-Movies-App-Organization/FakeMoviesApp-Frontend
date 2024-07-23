import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Login} from '../pages/Auth/Login/Login';
import {Register} from '../pages/Auth/Register/Register';

const AuthRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default AuthRouter;