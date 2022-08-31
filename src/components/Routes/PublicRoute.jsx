import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

export default function PublicRoute() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  //   const shouldRedirect = isLoggedIn && restricted;

  return isLoggedIn ? <Navigate to="/home" /> : <Outlet />;
}
