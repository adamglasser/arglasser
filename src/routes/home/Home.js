import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Blobs from './assets/Waihou-min.png'

const MainSlice = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="container-fluid  py-5 h-100 d-flex flex-column flex-grow-1">
                <div className="row justify-content-md-start justify-content-center my-auto">
                    <div className="col-auto order-md-1 order-2 d-flex flex-column justify-content-between mt-4 pt-2 text-md-start text-left">
                        <div className="p-5 w-100 bg-black rounded rounded-5">


                            <h1 className="display-2 fw-bold text-light">
                                Adam Glasser
                            </h1>
                            <h3 className="text-white">
                                <span style={{ color: '#ff9fd6' }}>developer</span>, {' '}
                                <span style={{ color: '#61dafb' }}>marketer</span>, {' '}
                                <span style={{ color: '#4ca96d' }}>creator</span>,{' '}
                                <br />
                                {' '} and <span style={{ color: '#ffd049' }}>problem solver</span>.
                            </h3>

                            <div className="d-md-flex align-items-md-start mt-5">
                                <div onClick={() => navigate('/Contact')} className="fs-4 btn btn-lg btn-purple fw-bold text-white rounded-0 flex-shrink-0 me-md-4 mb-md-0 mb-sm-4 mb-3">Get In Touch</div>
                                <div onClick={() => navigate('/Work')} className="fs-4 btn btn-white btn-lg rounded-0 text-light ms-2 ms-md-4 mb-md-0 mb-sm-4 mb-3 fw-bold">Work</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

const Home = () => {
    return (<>


        <div class="bg-neutral-900 h-screen w-screen flex items-center" style={{ overflow: 'hidden', backgroundImage: `url(${Blobs})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
            <div class="w-full">
                <div class="max-w-xl lg:max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8 items-center bg-neutral-900 sm:rounded-xl ">

                    <div class="max-w-3xl text-left">
                        <h1 className="block font-bold text-5xl md:text-6xl lg:text-7xl text-slate-200">
                            Adam Glasser
                        </h1>
                        <h3 className="block font-medium text-3xl md:text-4xl lg:text-5xl text-slate-200">
                            <span style={{ color: '#ff9fd6' }}>developer</span>, {' '}
                            <span style={{ color: '#61dafb' }}>marketer</span>, {' '}
                            <span style={{ color: '#4ca96d' }}>creator</span>,{' '}
                            <br />
                            {' '} and <span style={{ color: '#ffd049' }}>problem solver</span>.
                        </h3>
                    </div>

                    <a
                        class="group relative inline-block focus:outline-none focus:ring-slate-200"
                        href="/download"
                    >
                        <span
                            class="absolute inset-0 translate-x-0 translate-y-0 bg-neutral-600 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"
                        ></span>

                        <span
                            class="relative inline-block border-2 border-slate-200 px-8 py-3 text-sm font-bold uppercase tracking-widest text-slate-200"
                        >
                            Get In Touch
                        </span>
                    </a>
                    <a
                        class="ms-5 group relative inline-block focus:outline-none focus:ring-slate-200"
                        href="/download"
                    >

                        <span
                            class="relative inline-block border-2 border-slate-200 px-8 py-3 text-sm font-bold uppercase tracking-widest text-slate-200 flex"
                        >
                            Work
                            <svg
                                class="ms-2 h-5 w-5 rtl:rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </span>
                    </a>

                </div>
            </div>
        </div>


        {/** 
        <div style={{ minHeight: '100vh', backgroundImage: `url(https://arglasser.azureedge.net/public/Waihou.png)`, backgroundSize: 'cover', backgroundPosition: 'bottom' }} className="bg-black d-flex flex-column">
            <Header />
            <MainSlice />
        </div>
     */}
    </>
    )
}

export default Home;