import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import AdamPeep from './assets/AG-Open-Peep.svg'
import AdamPeepMobile from './assets/AG-Open-Peep-Mobile.svg'
import './styles/About.scss'


const About = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="funky-pattern bg-light h-100 d-flex flex-column adam-wrapper">
                <Header textClassName={'dark-nav-link'} />
                <div className='row flex-row-reverse mx-auto w-100 d-flex flex-grow-1 flex-column'>
                    <div className='mobile-peep-col col-12 d-flex flex-column d-md-none'>
                        <div className='my-auto'>
                            <img className="img-fluid adam-peep-mobile" src={AdamPeepMobile} alt="Adam Glasser" />
                            <h1 className='display-text-mobile text-slate text-leckerli text-center'>Hey<br></br> There!</h1>
                            <p className='lead-text-mobile text-center col-10 mx-auto mb-5'>I{`'`}m Adam Glasser, I create engaging digital experiences to solve complex business challenges</p>
                        </div>
                    </div>
                    <div className='d-none d-md-flex col d-flex flex-column flex-grow-1'>
                        <div className='mb-auto p-4 p-lg-0'>
                            <h1 className='display-text-desktop text-slate text-leckerli ps-lg-5'>Hey<br></br> There!</h1>
                            <p className='lead-text-desktop col-7 col-xxl-4 mb-5 ps-lg-5'>I{`'`}m Adam Glasser, I create engaging digital experiences to solve complex business challenges</p>
                            <img className="adam-peep-desktop" src={AdamPeep} alt="Adam Glasser" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
