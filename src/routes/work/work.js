// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import './styles/work.scss'

import Computer from './gen-assets/3d-Computer.png'

import Audience from './nimbl/nimbl-audience.PNG'
import Email from './nimbl/nimbl-email.PNG'
import Page from './nimbl/nimbl-page.PNG'
import Gift from './nimbl/nimbl-gift.PNG'
import Review from './nimbl/nimbl-review.PNG'

import ViasatLogin from './viasat/Viasat-Login.PNG'
import ViasatLookup from './viasat/Viasat-Lookup.PNG'
import ViasatReporting from './viasat/Viasat-Reporting.PNG'

import PacSfdc from './preferred-address/Preferred-Address-Capture.PNG'
import PacZoom from './preferred-address/Preferred-Address-Capture-Zoom.PNG'
import PacMsoft from './preferred-address/Preferred-Address-Capture-Microsoft.PNG'

import HotdoggerHome from './hotdogger/Hotdogger-Home.PNG'
import HotdoggerOverview from './hotdogger/Hotdogger-Overview.PNG'
import HotdoggerTeam from './hotdogger/Hotdogger-Team.PNG'
import HotdoggerManagement from './hotdogger/Hotdogger-Management.PNG'

import Header from "../../components/header/header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Work = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    const navigate = useNavigate()
    return (
        <div>
            <Header textClassName={'dark-nav-link'} />
            <div className="spacer my-5"></div>
            <section className="container align-items-center justify-content-between">
                <h1 className="mb-sm-0 me-sm-3 fw-bold text-black display-3">Portfolio</h1>
                <p className="text-muted">Take a look at some of my past work below</p>
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
                            <p className="pb-3 mb-2 mb-md-3">Malesuada eu cursus natoque purus ipsum nunc, velit cras tellus. Maecenas viverra pellentesque at ultrices purus vitae quis erat volutpat. Turpis auctor neque bibendum id pellentesque ut egestas. Donec ut faucibus nisl nec at purus. Cursus vel gravida gravida purus varius feugiat.Semper mauris id adipiscing est. Nam leo rutrum gravida curabitur at vel risus.</p>
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
                            <p className="pb-3 mb-2 mb-md-3">Malesuada eu cursus natoque purus ipsum nunc, velit cras tellus. Maecenas viverra pellentesque at ultrices purus vitae quis erat volutpat. Turpis auctor neque bibendum id pellentesque ut egestas. Donec ut faucibus nisl nec at purus. Cursus vel gravida gravida purus varius feugiat.Semper mauris id adipiscing est. Nam leo rutrum gravida curabitur at vel risus.</p>
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
                            <p className="pb-3 mb-2 mb-md-3">Malesuada eu cursus natoque purus ipsum nunc, velit cras tellus. Maecenas viverra pellentesque at ultrices purus vitae quis erat volutpat. Turpis auctor neque bibendum id pellentesque ut egestas. Donec ut faucibus nisl nec at purus. Cursus vel gravida gravida purus varius feugiat.Semper mauris id adipiscing est. Nam leo rutrum gravida curabitur at vel risus.</p>
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
                            <p className="pb-3 mb-2 mb-md-3">Malesuada eu cursus natoque purus ipsum nunc, velit cras tellus. Maecenas viverra pellentesque at ultrices purus vitae quis erat volutpat. Turpis auctor neque bibendum id pellentesque ut egestas. Donec ut faucibus nisl nec at purus. Cursus vel gravida gravida purus varius feugiat.Semper mauris id adipiscing est. Nam leo rutrum gravida curabitur at vel risus.</p>
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
                                <p>Want to chat about a new or existing project?</p>
                                <h2 class="h1 pb-3 pb-sm-4 fw-bold">Take your project to the next level</h2>
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