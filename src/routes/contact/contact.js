import Header from "../../components/header/header";

const Contact = () => {
    return (
        <div className="bg-light d-flex flex-column" style={{ minHeight: '100vh' }}>
            <div>
                <Header textClassName={'dark-nav-link'} />
            </div>
            <div className="my-auto container p-4 pb-5">
                <div className="row">
                    <div className="col-md mb-4">
                        <h1 className="d-flex display-2 text-black">
                            Hey There <div>👋</div>
                        </h1>
                        <h4 className="mb-0 mt-3 mt-lg-4">
                            <a href="mailto:hello@arglasser.com" class="fs-2 fw-bold text-dark">hello@arglasser.com</a>
                        </h4>
                        <div className="row mt-3 mt-lg-4">
                            <div className="col-1 mx-2">
                                <a className="text-dark" href="https://www.instagram.com/arglasser/" target="blank">
                                    <i className="fa-2x fab fa-instagram" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div className="col-1 mx-2">
                                <a className="text-dark" href="https://www.linkedin.com/in/adam-glasser-109148142/" target="blank">
                                    <i className="fa-2x fab fa-linkedin-in" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div className="col-1 mx-2">
                                <a className="text-dark" href="https://codepen.io/adamglasser" target="blank">
                                    <i className="fa-2x fab fa-codepen" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md h-100">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;