import { Outlet } from "react-router-dom";
import { HeaderStyled, NavStyled, StyledNavLink } from "./Layout.style";

const Layout = () => {
    return (
      <>
        <HeaderStyled>
          <NavStyled>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </NavStyled>
        </HeaderStyled>
  
        <main>
          <Outlet />
        </main>
{/*   
        <footer>
          <Footer />
        </footer> */}
      </>
    );
  };
  
  export default Layout;