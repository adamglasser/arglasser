import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import AdamPeep from './assets/AG-Open-Peep-min.svg'
import AdamPeepMobile from './assets/AG-Open-Peep-Mobile-min.svg'
import './styles/About.scss'

import ReactLogo from './assets/react-logo.png'
import TsLogo from './assets/ts-logo.png'
import GqlLogo from './assets/gql-logo.png'
import AzureLogo from './assets/azure-logo.png'




const About = () => {
    const startAbout = useRef(null)

    const executeScroll = () => startAbout.current.scrollIntoView()
    // run this function from an event handler or an effect to execute scroll 
    return (
        <>
            <div className='funky-wrapper'>
                <div className="funky-pattern h-100 d-flex flex-column adam-wrapper">
                    <Header textClassName={'dark-nav-link'} />
                    <div className='row flex-row-reverse mx-auto w-100 d-flex flex-grow-1 flex-column'>
                        <div className='mobile-peep-col col-12 d-flex flex-column d-md-none'>
                            <div className='my-auto'>
                                <img className="img-fluid adam-peep-mobile" src={AdamPeepMobile} alt="Adam Glasser" />
                                <h1 className='display-text-mobile text-slate text-leckerli text-center'>Hey<br></br> There!</h1>
                                <p className='lead-text-mobile text-center col-10 mx-auto mb-5'>I{`'`}m Adam Glasser, I create engaging digital experiences to solve complex business challenges
                                    <br></br>
                                    <button onClick={executeScroll} className='btn btn-slate btn-lg mt-4 btn-lg fs-6'>
                                        More <i className="fa-solid fa-circle-arrow-down"></i>
                                    </button>
                                </p>
                            </div>
                        </div>
                        <div className='d-none d-md-flex col d-flex flex-column flex-grow-1'>
                            <div className='mb-auto p-4 p-lg-0'>
                                <h1 className='display-text-desktop text-slate text-leckerli ps-lg-5'>Hey<br></br> There!</h1>
                                <p className='lead-text-desktop col-7 col-xxl-4 mb-5 ps-lg-5'>
                                    I{`'`}m Adam Glasser, I create engaging digital experiences to solve complex business challenges
                                    <br></br>
                                    <button onClick={executeScroll} className='btn btn-slate btn-lg mt-4 btn-lg fs-5 rounded rounded-3'>
                                        More <i className="fa-solid fa-caret-down ms-2"></i>
                                    </button>
                                </p>
                                <img className="adam-peep-desktop" src={AdamPeep} alt="Adam Glasser" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-slate about-slice-1 text-white p-5'>
                <div ref={startAbout} className="container position-relative zindex-5 pt-5">
                    <div className="row py-3">
                        <div className="col-lg-8">

                            <h1 className="pb-2 pb-md-3 fw-bold">About Me</h1>
                            <p className="fs-xl pb-4 mb-1 mb-md-2 mb-lg-3" >
                                I am a passionate developer, marketer, designer, and problem solver with experience across a wide range of technologies and industries. I've worked clients of all sizes, from large corporations to budding startups, and helped them design, build, and implement solutions to drive business KPIs and engage customers.</p>
                            <div className="row row-cols-3 pt-4 pt-md-5 mt-2 mt-xl-4">
                                <div className="col">
                                    <h3 className="h2 mb-2">
                                        <i className="fa-solid fa-rocket"></i>
                                    </h3>
                                    <p className="mb-0"><strong>Solution</strong> Consulting</p>
                                </div>
                                <div className="col">
                                    <h3 className="h2 mb-2">
                                        <i className="fa-solid fa-laptop-code"></i>
                                    </h3>
                                    <p className="mb-0"><strong>Web</strong> Development</p>
                                </div>
                                <div className="col">
                                    <h3 className="h2 mb-2">
                                        <i className="fa-solid fa-chart-line"></i>
                                    </h3>
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
        <section class="bg-slate mt-n2 p-5">
        <div class="card border-0 container ripple-container bg-black">
          <div class="card-body p-md-5 p-4 bg-size-cover ">
            <div class="py-md-5 py-4 text-center">
              <h3 class="h4 my-3 fw-normal text-white opacity-75">Want to work with me? Let{`'`}s talk</h3>
              <a href="mailto:hello@arglasser.com" class="fs-2 fw-bold text-light">hello@arglasser.com</a>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default About;
