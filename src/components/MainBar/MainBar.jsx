import { Outlet } from 'react-router-dom';
import { Header, Container } from './MainBar.styled';
import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import { Suspense } from 'react';
// import UserMenue from 'components/UserMenue/userMenue';
import User from 'pages/user';

export default function MainBar() {
  return (
    <div>
      <Container>
        <Header>
          <Navigation />
          <AuthNav />
          <User />
        </Header>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
}
