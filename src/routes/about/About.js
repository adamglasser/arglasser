import { useRef } from 'react';


import Header from '../../components/header/header';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

import './styles/About.scss'

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
            <div className='bg-white d-flex flex-column' style={{ minHeight: '100vh' }}>
                <Header textClassName={'dark-nav-link'} />
                <div class="container justify-content-center flex-grow-1 row mx-auto w-100 my-auto justify-content-md-start justify-content-center">
                    <div class="col d-flex p-5">
                        <div className='my-auto'>
                            <h3 className='text-muted'>Hello, I'm</h3>
                            <h1 class="display-2">
                                Adam Glasser
                            </h1>
                            <h2 className='text-muted'>A solutions architect based in Bozeman, MT</h2>
                            <button onClick={executeScroll} className='btn btn-slate btn-lg mt-4 btn-lg fs-6'>
                                More <i className="fa-solid fa-circle-arrow-down ms-2"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-xl-3 d-flex pb-5">
                        <div class="row row-cols-2 gx-3 gx-lg-4 my-auto p-xxl-5">
                            <div class="col pt-lg-5 mt-lg-1">
                                <img src="https://arglasser.azureedge.net/public/adam-min.jpg" class="img-fluid  rounded-3 mb-3 mb-lg-4" alt="Image" />
                                <img src="https://arglasser.azureedge.net/public/adam-bike-min.jpg" class="img-fluid  rounded-3" alt="Image" />
                            </div>
                            <div class="col">
                                <img src="https://arglasser.azureedge.net/public/adam-hike-min.PNG" class="img-fluid  rounded-3 mb-3 mb-lg-4" alt="Image" />
                                <img src="https://arglasser.azureedge.net/public/adam-board-min.jpg" class="img-fluid  rounded-3" alt="Image" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='bg-white about-slice-1 text-black p-lg-5'>
                <div ref={startAbout} className="container position-relative zindex-5 py-5">
                    <div className="row bg-purple-light p-5 rounded text-muted">
                        <div className="col-lg-8">

                            <h1 className="pb-2 pb-md-3 fw-bold text-dark">About Me</h1>
                            <p className="fs-xl " >
                                I am a passionate developer, marketer, designer, and problem solver with experience across a wide range of technologies and industries. I've worked clients of all sizes, from large corporations to budding startups, and helped them design, build, and implement solutions to drive business KPIs and engage customers.</p>
                            <div className="d-none d-lg-flex row row-cols-3 pt-4 pt-md-5 mt-2 mt-xl-4">
                                <div className="col">
                                    <img width={80} alt="magnifier" src={Magnifier} />
                                    <p className="mb-0"><strong>Solution</strong> Consulting</p>
                                </div>
                                <div className="col">
                                    <img width={80} alt="computer" src={ComputerAlt} />
                                    <p className="mb-0"><strong>Web</strong> Development</p>
                                </div>
                                <div className="col">
                                    <img width={80} alt="pie" src={Pie} />
                                    <p className="mb-0"><strong>Marketing</strong> {`+`} Analytics</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-xxl-3 mt-xl-3 pt-5 pt-lg-4">
                            <div className="row row-cols-4 row-cols-lg-2 gx-3 gx-lg-4 ps-lg-5">
                                <div className="col pt-lg-2 mt-lg-1">
                                    <img src={TsLogo} className="ratio ratio-1x1 img-fluid d-block rounded-3 mb-3 mb-lg-4" alt="Logo" />
                                </div>
                                <div className="col pt-lg-5 mt-lg-1">
                                    <img src={GqlLogo} className="ratio ratio-1x1 img-fluid d-block rounded-3" alt="Logo" />
                                </div>
                                <div className="col">
                                    <img src={ReactLogo} className="ratio ratio-1x1 img-fluid d-block rounded-3 mb-3 mb-lg-4" alt="Logo" />
                                </div>
                                <div className="col pt-lg-5 mt-lg-1">
                                    <img src={AzureLogo} className="ratio ratio-1x1 d-block rounded-3" alt="Logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white text-black'>
                <h2 class="h1 mb-4 text-center  fw-bold">How I can Help</h2>
                <p className='col-10 text-center mx-auto'>I've created a wide range of digital solutions for customers including point solutions to integrate data</p>
                <div className='d-flex flex-column h-100'>
                    <div className='container d-flex h-100'>
                        <Swiper

                            slidesPerView={1}
                            spaceBetween={10}
                            navigation={true}
                            pagination={{
                                clickable: true,
                            }}

                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}

                            modules={[Pagination]}

                        >
                            <SwiperSlide>
                                <div class="h-100 d-flex flex-column pb-3 col-11 mx-auto col-lg-12">
                                    <div class="text-center m-4 d-flex justify-content-center align-items-center text-black card bg-white border-0 shadow p-4 rounded rounded-3 d-flex flex-grow-1 flex-column">
                                        <img width="150" src={Computer} alt="computer" className='mb-3' />
                                        <h4 class="mb-2 pb-1">Development </h4>
                                        <p class="mx-auto" >Create anything from single page marketing forms to web based SAAS applications.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="h-100 d-flex flex-column pb-3 col-11 mx-auto col-lg-12">
                                    <div class="text-center m-4 d-flex justify-content-center align-items-center text-black card bg-white border-0 shadow p-4 rounded rounded-3 d-flex flex-grow-1 flex-column">
                                        <img width="150" src={Task} alt="computer" className='mb-3' />
                                        <h4 class="mb-2 pb-1">Process Automation</h4>
                                        <p class="mx-auto" >Automate manual process and increase efficiencies across your workflow.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="h-100 d-flex flex-column pb-3 col-11 mx-auto col-lg-12">
                                    <div class="text-center m-4 d-flex justify-content-center align-items-center text-black card bg-white border-0 shadow p-4 rounded rounded-3 d-flex flex-grow-1 flex-column">
                                        <img width="150" src={Chart} alt="computer" className='mb-3' />
                                        <h4 class="mb-2 pb-1">Analytics</h4>
                                        <p class="mx-auto" >Gain new insight from your existing data, or help integrate disparate data sources into a single source of truth.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div class="container col-xxl-8 px-4 py-5">
                        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div class="col-10 col-sm-8 col-lg-6">
                                <img src={Folder} class="d-block mx-lg-auto img-fluid" alt="Folder" loading="lazy" width="700" height="500" />
                            </div>
                            <div class="col-lg-6 text-dark">
                                <h1 class="display-5 fw-bold lh-1 mb-3 text-black">My Work</h1>
                                <p class="lead">Click the link below to take a look at my portfolio where I highlight a few projects I've recently completed. I have experience working on a wide variety of projects using a number of different tools and technologies. I pride myself on my ability to select the right tool, or tech stack, for the job.</p>
                                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                                    <button type="button" class="mt-4 btn btn-purple text-white btn-lg px-4 me-md-2" onClick={() => navigate('/Work')}>Portfolio</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="bg-white p-5">
                <div class="card border-0 container ripple-container bg-black">
                    <div class="card-body p-md-5 p-4 bg-size-cover ">
                        <div class="py-md-5 py-4 text-center">
                            <h3 class="h4 my-3 fw-normal text-white ">Want to work with me? Let{`'`}s talk</h3>
                            <a href="mailto:hello@arglasser.com" class="fs-2 fw-bold text-light">hello@arglasser.com</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
