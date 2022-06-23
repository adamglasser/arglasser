import Header from '../../components/header/header';
import AdamPeep from './assets/AG-Open-Peep.svg'

const About = () => (
    <div className="bg-light h-100 d-flex flex-column" style={{minHeight: '100vh'}}>
        <Header textClassName={'dark-nav-link'} />
        <div className='container d-flex flex-column'>
            <div className='row w-100 mx-auto'>
                <div className='col-5 d-flex flex-column'>
                    <div className='my-auto'>
                    <h1 className='display-1 text-slate fw-bolder'>Hey There!</h1>
                    <h3 className='text-slate my-3'>Thanks for checking out my site, you can learn a little more about me below.</h3>
                    <p className='lead text-slate'>I am currently the Senior Solutions Architect at PFL, and specialize in creating engaging, responsive, and visually striking work for brave and ambitious startups through to international global brands, to help them achieve new success and change the way their customers see them, for the better.</p>
                    </div>
                </div>
                <div className='col-6' style={{overflow: 'hidden'}}>
                    <img src={AdamPeep} className="img-fluid" alt="Adam Glasser" />
                </div>
            </div>
        </div>
    </div>
)

export default About;