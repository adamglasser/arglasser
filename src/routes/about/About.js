import { useRef } from 'react';



// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

import NavBar from '../../components/NavBars/NavBar';
import AboutLead from './AboutLead';
import Me from './Me';

import ReactLogo from './assets/react-logo.png'
import TsLogo from './assets/ts-logo.png'
import GqlLogo from './assets/gql-logo.png'
import AzureLogo from './assets/azure-logo.png'

import Chart from './assets/3dChart-min.png'
import Computer from './assets/3dComputer-min.png'
import Task from './assets/3dTask-min.png'
import Folder from './assets/3dFolder-min.png'

import Pie from './assets/Diagram-min.png'
import Magnifier from './assets/Magnifier-min.png'
import ComputerAlt from './assets/Computer-min.png'
import { useNavigate } from 'react-router-dom';



const About = () => {
    const navigate = useNavigate();

    const startAbout = useRef(null)

    const executeScroll = () => startAbout.current.scrollIntoView()
    // run this function from an event handler or an effect to execute scroll 
    return (
        <>
        <NavBar />
        <Me />
        <AboutLead />
        
        </>
    )
}

export default About;
