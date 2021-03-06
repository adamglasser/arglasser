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
        <div style={{ minHeight: '100vh', backgroundImage: `url(https://arglasser.azureedge.net/public/Waihou.png)`, backgroundSize: 'cover', backgroundPosition: 'bottom' }} className="bg-black d-flex flex-column">
            <Header />
            <MainSlice />
        </div>
    </>
    )
}

export default Home;