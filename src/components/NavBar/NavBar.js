import styles from './NavBar.module.scss';
import clsx from 'clsx';
import Container from '../Container/Container';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.wrapper}>
          <Link to='/'>
            <span className={clsx(styles.icon, ' fa fa-tasks')} />
          </Link>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to='/'
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to='/about'
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to='/favorite'
              >
                Favorite
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
