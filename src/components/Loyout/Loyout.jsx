import { NavLink } from 'react-router-dom';

const Layout = () => {
    return (
      <div>
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
          </nav>
        </header>
  
        <main>
       
        </main>
{/*   
        <footer>
          <Footer />
        </footer> */}
      </div>
    );
  };
  
  export default Layout;