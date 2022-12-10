import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BackToTopButton from './components/BackToTopButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter} from 'react-router-dom';
import NavBarOffCanvas from './components/NavBarOffCanvas';
import Footer from './components/Footer';
import {Offline, Online} from 'react-detect-offline';
// eslint-disable-next-line
import 'swiper/css/bundle';

const root = ReactDOM.createRoot (document.getElementById ('root'));
root.render (
  <React.StrictMode>
    <BrowserRouter>
      {/* <Online> */}
          <App />
        <BackToTopButton />
        {/* </Online> */}
        {/* <Offline>
          <NavBarOffCanvas/>
          <div className="max-w-sm mr-2 ml-2 px-3 py-5 shadow mx-auto white-bg text-center black-text rounded-lg" style={{marginTop:"30px"}}>
          <p className="mt-5">You are currently offline, please turn on your internet and refresh the browser connection to continue..</p>
          </div>
          <Footer />
          <BackToTopButton />
        </Offline> */}
    </BrowserRouter>
    <BackToTopButton />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals ();
