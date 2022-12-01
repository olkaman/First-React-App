import Home from '../Home/Home';
import Container from '../../components/Container/Container';
import NavBar from '../../components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import About from '../About/About';
import Favorite from '../Favorite/Favorite';
import ErrorPage from '../ErrorPage/ErrorPage';

const App = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
