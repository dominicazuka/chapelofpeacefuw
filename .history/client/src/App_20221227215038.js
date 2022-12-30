import './App.css';
import {createContext, useEffect, useState, lazy, Suspense} from 'react';
import ReactSwitch from 'react-switch';
import {LoadingOutlined} from '@ant-design/icons';
import NavBarOffCanvas from './components/NavBarOffCanvas.js';
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from '../src/components/Footer';

//using lazy
const Home = lazy(() => import('./pages/Home'));
const About = lazy (() => import ('./pages/About'));
const Units = lazy (() => import ('./pages/Units'));
const Projects = lazy (() => import ('./pages/Projects'));
const Partners = lazy (() => import ('./pages/Partners'));
const Contact = lazy (() => import ('./pages/Contact'));
const Givings = lazy (() => import ('./pages/Givings'));
const Membership = lazy (() => import ('./pages/Membership'));
const ResponseForm = lazy (() => import ('./pages/ResponseForm'));
const BibleStudy = lazy (() => import ('./pages/BibleStudy'));
const Prayer = lazy(() => import('./pages/Prayer'));
const ChildrenUnit = lazy(() => import('./pages/ChildrenUnit'));
const Alumni = lazy(() => import('./pages/Alumni'));
const AlumniMembership = lazy(() => import('./pages/AlumniMembership'));
const Dashboard = lazy(() => import('./admin/layouts/index.js'))
// const Admin = lazy (() => import ('./admin/dashboard-layout'));
 

export const ThemeContext = createContext (null);

function App() {
  useEffect (() => {
  window.scrollTo (0, 0);
}, []);

  const [theme, setTheme] = useState ('dark');

  const toggleTheme = () => {
    setTheme (curr => (curr === 'light' ? 'dark' : 'light'));
  };
  return (
    <Suspense
      fallback={
        <div className="col text-center p-5">
          <LoadingOutlined style={{fontSize: 50, color: 'blue'}} spin />
        </div>
      }
    >
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <div className="App" id={theme}>
          <NavBarOffCanvas />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/units" element={<Units />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/givings" element={<Givings />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/response-form" element={<ResponseForm />} />
              <Route path="/bible-study" element={<BibleStudy />} />
              <Route path="/prayer" element={<Prayer />} />
              <Route path="/children-unit" element={<ChildrenUnit />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/alumni-membership" element={<AlumniMembership />} />
              <Route path="/cp-admin" element={<Dashboard />} />
            </Routes>
          </main>
          <div className="switch">
            <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
          </div>
        </div>
      <Footer />
      </ThemeContext.Provider>
    </Suspense>
  );
}

export default App;
