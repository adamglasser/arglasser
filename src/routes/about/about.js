import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import AdamPeep from './assets/AG-Open-Peep.svg'
import './styles/About.scss'


const About = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="funky-pattern bg-light h-100 d-flex flex-column adam-wrapper">
                <Header textClassName={'dark-nav-link'} />
                <div className='mx-auto intro-text-box px-5 col col-lg-8 col-xl-11 col-xxl-6'>
                    <h1 className='mb-3 col-xl-10 ms-auto ms-xxl-0 text-slate fw-bolder text-leckerli'>Hey<br></br> There!</h1>
                </div>
                <img className="adam-peep" src={AdamPeep} alt="Adam Glasser" />
            </div>
        </>
    )
}

export default About;