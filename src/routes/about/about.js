import Header from '../../components/header/header';
import AdamPeep from './assets/AG-Open-Peep.svg'

const About = () => (
    <div className="bg-white h-100 d-flex flex-column" style={{ minHeight: '100vh' }}>
        <Header textClassName={'dark-nav-link'} />
        <div className='container d-flex flex-column py-lg-5'>
            <div className='row w-100 mx-auto'>
                <div className='col-auto col-lg-5 d-flex flex-column'>
                    <div className='my-auto'>
                        <img src={AdamPeep} className="img-fluid" alt="Adam Glasser" />
                        <p className='text-muted text-center mt-1'><small>*Illustration not to scale</small></p>
                    </div>
                </div>
                <div className='col-auto col-lg-7 d-flex flex-column'>
                    <div className='my-auto'>
                        <h1 className='display-1 text-slate fw-bolder'>Hey There!</h1>
                        <h3 className='text-slate my-3'>Thanks for checking out my site, you can learn a little more about me below
                        </h3>
                        <p className='text-slate lead'>I am currently the Senior Solutions Architect at PFL where I specialize in creating engaging, responsive, and visually striking digital experiences and SAAS applications for all kinds of businesses, from enterprise corporations to budding startups.</p>
                        <p className='text-slate lead'>I have a wide range of technical expertise, from constructing point solutions to solve discrete data processing or software integration issues, to managing and consulting on digital marketing initiatives, to creating full-stack applications using a range of technologies.  Whether you're looking to improve your digital marketing KPIs, or construct a new product or service to support your brand, I can probably help.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default About;