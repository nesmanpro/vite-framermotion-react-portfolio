import Menu from './components/Menu';
import { Route, Routes, useLocation } from 'react-router-dom';
import './sass/index.scss';
import Home from './pages/Home';


function App() {

  const location = useLocation();


  return (
    <>
      <Menu />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
      </Routes>
    </>
  )
}

export default App
