// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import './styles/work.scss'

import Computer from './gen-assets/3d-Computer-min.png'

import Audience from './nimbl/nimbl-audience-min.PNG'
import Email from './nimbl/nimbl-email-min.PNG'
import Page from './nimbl/nimbl-page-min.PNG'
import Gift from './nimbl/nimbl-gift-min.PNG'
import Review from './nimbl/nimbl-review-min.PNG'

import ViasatLogin from './viasat/Viasat-Login-min.PNG'
import ViasatLookup from './viasat/Viasat-Lookup-min.PNG'
import ViasatReporting from './viasat/Viasat-Reporting-min.PNG'

import PacSfdc from './preferred-address/Preferred-Address-Capture-min.PNG'
import PacZoom from './preferred-address/Preferred-Address-Capture-Zoom-min.PNG'
import PacMsoft from './preferred-address/Preferred-Address-Capture-Microsoft-min.PNG'

import HotdoggerHome from './hotdogger/Hotdogger-Home-min.PNG'
import HotdoggerOverview from './hotdogger/Hotdogger-Overview-min.PNG'
import HotdoggerTeam from './hotdogger/Hotdogger-Team-min.PNG'
import HotdoggerManagement from './hotdogger/Hotdogger-Management-min.PNG'

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Work = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const navigate = useNavigate()
    return (
        <div>
            <div className="spacer my-5"></div>
            <section className="container align-items-center justify-content-between">
                <h1 className="mb-sm-0 me-sm-3 fw-bold text-black display-3">Portfolio</h1>
                <p className="text-muted">Take a look at some of my previous work below</p>
            </section>
            <section className="container pb-2 pb-lg-3">
                {/** Nimbl */}
                <div className="row mb-md-4 mb-lg-5">
                    <div className="col-lg-5 pb-1 mb-3 pb-md-0 mb-md-0">
                        <div className='d-flex flex-column h-100'>
                            <div className='d-flex h-100'>
                                <Swiper

                                    slidesPerView={1}
                                    spaceBetween={10}
                                    navigation={true}
                                    pagination={{
                                        clickable: true,
                                    }}

                                    modules={[Pagination]}

                                >
                                    <SwiperSlide>
                                        <div className="h-100 d-flex flex-column py-4 col">
                                            <div className="swiper-work d-flex bg-pink rounded mb-3 h-100 p-4">
                                                <img className="mx-auto my-auto img-fluid rounded" src={Audience} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="h-100 d-flex flex-column py-4 col">
                                            <div className="swiper-work d-flex bg-pink rounded mb-3 h-100 p-4">
                                                <img className="mx-auto my-auto img-fluid rounded" src={Email} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="h-100 d-flex flex-column py-4 col">
                                            <div className="swiper-work d-flex bg-pink rounded mb-3 h-100 p-4">
                                                <img className="mx-auto my-auto img-fluid rounded" src={Page} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="h-100 d-flex flex-column py-4 col">
                                            <div className="swiper-work d-flex bg-pink rounded mb-3 h-100 p-4">
                                                <img className="mx-auto my-auto img-fluid rounded" src={Gift} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="h-100 d-flex flex-column py-4 col">
                                            <div className="swiper-work d-flex bg-pink rounded mb-3 h-100 p-4">
                                                <img className="mx-auto my-auto img-fluid rounded" src={Review} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7" >
                        <div className="ps-md-4 ms-md-2 py-5">

                            <h2 className="h3">Nimbl - SAAS Marketing Application</h2>
                            <div className="d-flex flex-wrap my-3">
                                <span className="m-1 badge text-bg-purple text-white">Web Application</span>
                                <span className="m-1 badge text-bg-purple text-white">GraphQL</span>
                                <span className="m-1 badge text-bg-purple text-white">React</span>
                                <span className="m-1 badge text-bg-purple text-white">Typescript</span>
                                <span className="m-1 badge text-bg-purple text-white">Cosmos Db</span>
                                <span className="m-1 badge text-bg-purple text-white">Firebase</span>
                                <span className="m-1 badge text-bg-purple text-white">Jest</span>
                                <span className="m-1 badge text-bg-purple text-white">Cypress</span>
                            </div>
                            <p className="pb-3 mb-2 mb-md-3">Nimbl is a web based application that allows a user to configure a promotional email, webpage for address collection, and a direct mail gift to be sent to a list of recipients. It was written in React Typescript on the frontend and Node in the back, and uses a GraphQl API. This API contains a number of external datasources including Azure Cosmos Db/Table Storage, PFL's own Generic API, and some third party services like Firebase for authentication and Mailgun for email communications. This application was designed and architected by me, and built by myself and a couple other PFL developers over a period of around 8 months.  </p>
                            <a href="https://nimbl.pfl.com/home" target={"_blank"} className="btn btn-dark text-white px-3">View Project</a>
                        </div>
                    </div>
                </div>

                {/** Viasat */}
                <div className="row mb-md-4 mb-lg-5">
                    <div className="order-md-1 col-lg-5 pb-1 mb-3 pb-md-0 mb-md-0">
                        <div className='d-flex flex-column h-100'>
                            <div className='d-flex h-100'>
                                <Swiper

                                    slidesPerView={1}
                                    spaceBetween={10}
                                    navigation={true}
                                    pagination={{
                                        clickable: true,
                                    }}

                                    modules={[Pagination]}

                                >
                                    <SwiperSlide>
                                        <div className="h-100 d-flex flex-column py-4 col">
                                            <div className="swiper-work d-flex bg-peach rounded mb-3 h-100 p-4">
                                                <img className="mx-auto my-auto img-fluid rounded" src={ViasatLogin} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="h-100 d-flex flex-column py-4 col">
                                            <div className="swiper-work d-flex bg-peach rounded mb-3 h-100 p-4">
                                                <img className="mx-auto my-auto img-fluid rounded" src={ViasatLookup} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="h-100 d-flex flex-column py-4 col">
                                            <div className="swiper-work d-flex bg-peach rounded mb-3 h-100 p-4">
                                                <img className="mx-auto my-auto img-fluid rounded" src={ViasatReporting} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7" >
                        <div className="ps-md-4 ms-md-2 py-5">

                            <h2 className="h3">Viasat - Giftcard Sampling Program</h2>
                            <div className="d-flex flex-wrap my-3">
                                <span className="m-1 badge text-bg-purple text-white">Web Application</span>
                                <span className="m-1 badge text-bg-purple text-white">Data Analytics</span>
                                <span className="m-1 badge text-bg-purple text-white">MAP Integration</span>
                                <span className="m-1 badge text-bg-purple text-white">Rest API</span>
                                <span className="m-1 badge text-bg-purple text-white">React</span>
                                <span className="m-1 badge text-bg-purple text-white">Microsoft SQL</span>
                                <span className="m-1 badge text-bg-purple text-white">Magic Auth</span>
                            </div>
                            <p className="pb-3 mb-2 mb-md-3">This initiative came about as a result of a number of conversations with stakeholders across Viasat's marketing, data analytics, and compliance teams, who were searching for a better way to reward their customers for staying up to date on service payments, and attract new clients. This project consisted of a custom integration to the Client's Marketo instance that allowed us to pull down eligible recipients, a customer and agent facing portal that allowed reps and clients to check on their program status in real time, as well as a custom Tableau dashboard that gave the data and marketing teams insight into the effectiveness of the program.</p>
                            <a href="https://viasatrewards.directmail.tech/" target={"_blank"} className="btn btn-dark text-white px-3">View Project</a>
                        </div>
                    </div>
                </div>

                {/** PAC */}
                <div className="row mb-md-4 mb-lg-5">
                    <div className="col-lg-5 pb-1 mb-3 pb-md-0 mb-md-0">
                        <div className='d-flex flex-column h-100'>
                            <div className='d-flex h-100'>
                                <Swiper

                                    slidesPerView={1}
                                    spaceBetween={10}
                                    navigation={true}
                                    pagination={{
                                        clickable: true,
                                    }}

                                    modules={[Pagination]}

                                >
                                    <SwiperSlide>
                                        <div className="h-100 d-flex flex-column py-4 col">
                                            <div className="swiper-work d-flex bg-blue rounded mb-3 h-100 p-4">
                                                <img className="mx-auto my-auto img-fluid rounded" src={PacSfdc} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="h-100 d-flex flex-column py-4 col">
                                            <div className="swiper-work d-flex bg-blue rounded mb-3 h-100 p-4">
                                                <img className="mx-auto my-auto img-fluid rounded" src={PacZoom} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="h-100 d-flex flex-column py-4 col">
                                            <div className="swiper-work d-flex bg-blue rounded mb-3 h-100 p-4">
                                                <img className="mx-auto my-auto img-fluid rounded" src={PacMsoft} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7" >
                        <div className="ps-md-4 ms-md-2 py-5">

                            <h2 className="h3">Preferred Address Capture - Webforms</h2>
                            <div className="d-flex flex-wrap my-3">
                                <span className="m-1 badge text-bg-purple text-white">React</span>
                                <span className="m-1 badge text-bg-purple text-white">Azure Table Storage</span>
                                <span className="m-1 badge text-bg-purple text-white">Azure Logic Apps</span>
                                <span className="m-1 badge text-bg-purple text-white">Azure Function Apps</span>
                                <span className="m-1 badge text-bg-purple text-white">Salesforce</span>
                                <span className="m-1 badge text-bg-purple text-white">Marketo</span>
                                <span className="m-1 badge text-bg-purple text-white">Mailgun</span>
                            </div>
                            <p className="pb-3 mb-2 mb-md-3">As a result of the Covid-19 pandemic driving employees towards remote work, the vast majority of PFL's clients were not able to continue sending Direct Mail to customers and prospects using the corporate address data contained within their CRM/MA platforms. In addition, a host of compliance and data integrity issues prevented these customers from collecting address data within those CRM/MA instances, leaving them without a solution to break through the digital noise. To solve this problem I created the preferred address capture service that PFL now offers to a significant number of their clients. This is a whitelabeled service that can be customized to meet a customer's needs and allow PFL to act as a middle-man to capture address data and facilitate the send of direct mail. </p>
                        </div>
                    </div>
                </div>

                {/** Hotdogger */}
                <div className="row mb-md-4 mb-lg-5">
                    <div className="order-md-1 col-lg-5 pb-1 mb-3 pb-md-0 mb-md-0">
                        <div className='d-flex flex-column h-100'>
                            <div className='d-flex h-100'>
                                <Swiper

                                    slidesPerView={1}
                                    spaceBetween={10}
                                    navigation={true}
                                    pagination={{
                                        clickable: true,
                                    }}

                                    modules={[Pagination]}

                                >
                                    <SwiperSlide>
                                        <div className="h-100 d-flex flex-column py-4 col">
                                            <div className="swiper-work d-flex bg-yellow rounded mb-3 h-100 p-4">
                                                <img className="mx-auto my-auto img-fluid rounded" src={HotdoggerHome} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="h-100 d-flex flex-column py-4 col">
                                            <div className="swiper-work d-flex bg-yellow rounded mb-3 h-100 p-4">
                                                <img className="mx-auto my-auto img-fluid rounded" src={HotdoggerOverview} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="h-100 d-flex flex-column py-4 col">
                                            <div className="swiper-work d-flex bg-yellow rounded mb-3 h-100 p-4">
                                                <img className="mx-auto my-auto img-fluid rounded" src={HotdoggerTeam} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="h-100 d-flex flex-column py-4 col">
                                            <div className="swiper-work d-flex bg-yellow rounded mb-3 h-100 p-4">
                                                <img className="mx-auto my-auto img-fluid rounded" src={HotdoggerManagement} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7" >
                        <div className="ps-md-4 ms-md-2 py-5">

                            <h2 className="h3">The Hotdogger</h2>
                            <div className="d-flex flex-wrap my-3">
                                <span className="m-1 badge text-bg-purple text-white">Web Application</span>
                                <span className="m-1 badge text-bg-purple text-white">React</span>
                                <span className="m-1 badge text-bg-purple text-white">Azure Functions</span>
                                <span className="m-1 badge text-bg-purple text-white">Rest API</span>
                            </div>
                            <p className="pb-3 mb-2 mb-md-3">The Hotdogger is a personal project I created to promote an event I help run every year in the desert of Western Colorado. The Hotdogger is a biathlon mountain biking and hotdog eating competition where teams of up to 6 people compete to bike as many laps and eat as many hotdogs as they can. This project involved both creating a frontend to promote the event and provide instructions to attendees on how to participate, but also a team management system that allows users to register for the event and manage their team.</p>
                            <a href="https://www.hotdogger.org/Home" target={"_blank"} className="btn btn-dark text-white px-3">View Project</a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="container mb-1 mb-md-3 mb-lg-4">
                <div class="bg-purple-light rounded-3 overflow-hidden">
                    <div class="row align-items-center">
                        <div class="col-xl-4 col-md-5 offset-lg-1">
                            <div class="pt-5 pb-3 pb-md-5 px-4 px-lg-0 text-center text-md-start">
                                <p>Want to chat about a new or existing challenge?</p>
                                <h2 class="h1 pb-3 pb-sm-4 fw-bold">I can help <span className="text-purple">elevate</span> your digital strategy</h2>
                                <button onClick={() => navigate('/Contact')} class="btn btn-purple text-white btn-lg">Contact Me</button>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-7 offset-xl-1">
                            <div class="position-relative d-flex flex-column align-items-center justify-content-center h-100">
                                <svg class="d-none d-md-block position-absolute top-50 start-0 translate-middle-y" width="868" height="868" viewBox="0 0 868 868" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.15" cx="434" cy="434" r="434" fill="#6366F1"></circle></svg>
                                <img src={Computer} class="border border-0 position-relative zindex-3 mb-2 my-lg-4" alt="Illustration" width="382" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Work;
