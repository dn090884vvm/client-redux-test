import { Routes, Route, Navigate } from 'react-router-dom';
import MainBar from './MainBar/MainBar';
import Register from 'pages/register';
import Login from 'pages/login';
// import User from 'pages/user';
import { Home } from 'pages/home';
import Contacts from 'pages/contacts';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainBar />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
