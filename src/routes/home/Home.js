import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Desk from './assets/desk-illustration.svg'

const MainSlice = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="container py-5 h-100 d-flex flex-column flex-grow-1">
                <div class="row justify-content-md-start justify-content-center my-auto">
                    <div className="col-md-6 col-sm-8 order-md-1 order-2 d-flex flex-column justify-content-between mt-4 pt-2 text-md-start text-center">
                        <div class="pb-xl-5 my-auto">


                            <h1 class="display-1 mb-3 pb-3 fw-bold text-slate">
                                Hi! I Am <br /> <span>Adam Glasser</span>
                            </h1>
                            <h3 className="mb-4">Designing engaging digital experiences for <span className="fw-bold">4 years</span> as a solutions architect</h3>
                            <div class="d-md-flex align-items-md-start mt-5">
                                <div onClick={() => navigate('/contact')} class="fs-4 btn btn-lg btn-orange text-white rounded-0 flex-shrink-0 me-md-4 mb-md-0 mb-sm-4 mb-3">Hire me</div>
                                <div onClick={() => navigate('/contact')} class="fs-4 btn btn-white btn-lg rounded-0 text-dark ms-1 ms-md-4 mb-md-0 mb-sm-4 mb-3 fw-bold">Work</div>
                            </div>
                        </div>

                    </div>

                    <div className="col-sm-6 col-9 order-md-2 order-1 d-flex">
                        <img className="img-fluid text-center" alt="Party Graphic" src={Desk}></img>
                    </div>
                </div>
            </div>
        </>
    )
}

const Home = () => {
    return (<>
        <div style={{ minHeight: '100vh' }} className="bg-white d-flex flex-column">
            <Header />
            <MainSlice />
            
        </div>
    </>
    )
}

export default Home;