import { useNavigate } from "react-router-dom";
import Blobs from './assets/Waihou-min.png'

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
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

                        <div
                            class="group relative inline-block focus:outline-none focus:ring-slate-200"
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate('/Contact')}
                        >
                            <span
                                class="absolute inset-0 translate-x-0 translate-y-0 bg-neutral-600 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"
                            ></span>

                            <span
                                class="relative inline-block border-2 border-slate-200 px-8 py-3 text-sm font-bold uppercase tracking-widest text-slate-200"
                            >
                                Get In Touch
                            </span>
                        </div>
                        <div
                            class="ms-5 group relative inline-block focus:outline-none focus:ring-slate-200"
                            onClick={() => navigate('/Work')}
                            style={{ cursor: 'pointer' }}
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
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;