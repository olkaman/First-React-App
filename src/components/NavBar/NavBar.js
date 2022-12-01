import styles from './NavBar.module.scss';
import clsx from 'clsx';
import Container from '../Container/Container';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.wrapper}>
          <a href='/'>
            <span className={clsx(styles.icon, ' fa fa-tasks')} />
          </a>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/favorite'>Favorite</a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
