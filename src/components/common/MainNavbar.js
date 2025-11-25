import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import Logo from './Logo';

const MainNavbar = (props) => (
  <AppBar
    elevation={0}
    style={{
      backgroundColor: '#ffffff',
      color: '#000000',
      boxShadow: 'none'
    }}
    {...props}
  >
    <Toolbar
      style={{
        height: 64,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 16,
      }}
    >
      <RouterLink to="/" style={{ textDecoration: 'none' }}>
        <Logo />
      </RouterLink>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;
