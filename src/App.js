import React from "react";
import Header from "./components/Header";
import Grid from "./components/Grid";
import Features from './components/Features';
import Tours  from './components/Tours';
import Stories from './components/Stories';
import Booking from './components/Booking';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Popup from './components/Popup';

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <main>
        <Grid />
        <Features />
        <Tours />
        <Stories />
        <Booking />
      </main>
      <Footer />
      <Popup tarjet='popup'>
        <div className='popup__left'>
            <img src='/image/nat-8.jpg' alt='Tour photo' className='popup__img' />
            <img src='/image/nat-9.jpg' alt='Tour photo' className='popup__img' />
        </div>
        <div className='popup__right'>
            <h2 className='heading-secondary u-margin-bottom-small'>Start booking now</h2>
            <h3 className='heading-tertiary u-margin-bottom-small'>Important &ndash; Please read these terms before booking</h3>
            <p className='popup__text'>
                Est sint voluptate velit enim minim ad id. Cupidatat non aliqua enim cillum in proident enim et tempor amet reprehenderit excepteur laboris nulla. Id nulla nulla do cillum do in dolor excepteur irure ut culpa.
                Sint pariatur deserunt ex quis in officia id et sunt voluptate ullamco. Incididunt nostrud occaecat culpa nisi id nisi labore. Velit adipisicing officia tempor nulla dolor. Laborum ullamco esse et in eiusmod fugiat.
            </p>
            <a href='#' className='btn btn--green'>Book now</a>
        </div>
      </Popup>
    </div>
  );
}

export default App;
