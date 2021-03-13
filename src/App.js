
import React, {Component} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './App.css';
import { imgslider } from './components/sliderdata';
import { sliderdata } from './components/sliderdata';

function App() {
return <imgslider slides={sliderdata} />;
    

export default App
}