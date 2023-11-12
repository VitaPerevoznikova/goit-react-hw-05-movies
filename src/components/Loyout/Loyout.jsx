import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  StyledHeader,
  StyledItem,
  StyledList,
  StyledNavLink,
} from './Layout.style';
import Footer from 'components/Footer/Footer';


const Layout = ({children}) => {
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
        {children}
       </main>
       <footer>
         <Footer/>
       </footer>
      
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
