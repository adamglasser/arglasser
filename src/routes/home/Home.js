import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Party from './assets/Success.png'

const Home = () => {
    const navigate = useNavigate();
    return (<>
<div style={{minHeight: '100vh'}} className="bg-white">
        <Header />
        <div className="container position-relative py-5">
          <div class="row justify-content-md-start justify-content-center">
            <div className="col-md-6 col-sm-8 order-md-1 order-2 d-flex flex-column justify-content-between mt-4 pt-2 text-md-start text-center">
              <div class="mb-md-5 pb-xl-5 mb-4">


                <h1 class="display-2 mb-3 pb-3">
                  Hi! I Am <br /> <span class="text-purple fw-bold">Adam Glasser</span>
                </h1>
                <p className="lead mb-4">Designing engaging digital experiences for for <span className="fw-bold">4 years</span> as a solutions architect</p>
                <div class="d-md-flex align-items-md-start">
                  <div onClick={() => navigate('/contact')} class="btn btn-lg btn-orange text-white rounded-0 flex-shrink-0 me-md-4 mb-md-0 mb-sm-4 mb-3">Hire me</div>
                  <div onClick={() => navigate('/contact')} class="btn btn-white btn-lg rounded-0 text-dark me-md-4 mb-md-0 mb-sm-4 mb-3 fw-bold">Work</div>
                </div>
              </div>

            </div>

            <div className="col-sm-6 col-sm-6 col-9 order-md-2 order-1">
              <img className="img-fluid" alt="Party Graphic" src={Party}></img>
            </div>
          </div>
        </div>
</div>
</>)}

export default Home;