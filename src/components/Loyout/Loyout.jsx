import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  StyledHeader,
  StyledItem,
  StyledList,
  StyledNavLink,
} from './Layout.style';
import Loader from 'components/Loader/Loader';
import Footer from 'components/Footer/Footer';
import BtnUp from 'components/BtnUp/BtnUp';


const Layout = ({ children }) => {
  return (
    <Container>
      <StyledHeader>
        <StyledList>
          <StyledItem>
            <StyledNavLink to="/">Home</StyledNavLink>
          </StyledItem>
          <StyledItem>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </StyledItem>
        </StyledList>
      </StyledHeader>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        {children}
        <BtnUp/>
      </main>
      <Footer />
    </Container>
  );
};

export default Layout;
