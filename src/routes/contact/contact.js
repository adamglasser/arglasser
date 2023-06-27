import { useCallback, useRef, useState } from "react";
import axios from 'axios'
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3';

import toast from 'react-hot-toast'

import './styles/contact.scss'

const Contact = () => {

    const formEl = useRef();

    const [token, setToken] = useState();
    const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

    const onVerify = useCallback((token) => {
        setToken(token);
    });

    const [buttonDisabled, setButtonDisabled] = useState(false);


    const onFormSubmit = (e) => {
        e.preventDefault();
        setButtonDisabled(true);
        onVerify();
        setRefreshReCaptcha(r => !r);
        if (formEl.current.checkValidity()) {

            axios.post('https://prod-86.westus.logic.azure.com:443/workflows/64cb43df8dff4de384be60e25743b581/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=ZDXPnUuCdbIKYqG_-9twqjn8m77LMEkOkfl8_oIuH74', {
                token: token,
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            })
                .then(() => {
                    toast.success('Form submitted successfully!')
                })
                .catch(error => {
                    toast.error('There was an error submitting your form, please try again')
                    console.log(error)
                    setButtonDisabled(false);
                })
        }
        else {
            formEl.current.classList.add('was-validated')
            setButtonDisabled(false);
        }
    }


    return (
        <GoogleReCaptchaProvider
            reCaptchaKey="6LfqJuAZAAAAAAKu31LfFuSDg5-rDgnKVBap1Vpc"
            scriptProps={{
                async: false, // optional, default to false,
                defer: false, // optional, default to false
                appendTo: 'head', // optional, default to "head", can be "head" or "body",
                nonce: undefined // optional, default undefined
            }}
        >
            <GoogleReCaptcha
                onVerify={token => {
                    setToken(token);
                }}
            />
            <div className="contact-blobs d-flex flex-column" style={{ minHeight: '100vh' }}>
                <div className="my-auto container p-4 pb-5">
                    <div className="row">
                        <div className="col-lg mb-4 d-flex">
                            <div className="my-auto">
                                <h1 className="d-flex display-2 text-black">
                                    Hey There <div>👋</div>
                                </h1>
                                <h4 className="mb-0 mt-3 mt-lg-4">
                                    <a href="mailto:hello@arglasser.com" className="fs-2 fw-bold text-dark">hello@arglasser.com</a>
                                </h4>
                                <div className="row mt-3 mt-lg-4">
                                    <div className="col-1 mx-2">
                                        <a className="text-dark" href="https://www.instagram.com/arglasser/" target="blank">
                                            <i className="nav-link fa-2x fab fa-instagram" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div className="col-1 mx-2">
                                        <a className="text-dark" href="https://www.linkedin.com/in/adam-glasser-109148142/" target="blank">
                                            <i className="nav-link fa-2x fab fa-linkedin-in" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div className="col-1 mx-2">
                                        <a className="text-dark" href="https://codepen.io/adamglasser" target="blank">
                                            <i className="nav-link fa-2x fab fa-codepen" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg h-100">
                            <div className="card border-light shadow-lg py-3 p-sm-4 p-md-5">
                                <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 rounded-3 d-none d-dark-mode-block"></div>
                                <div className="card-body position-relative zindex-2">
                                    <h2 className="card-title pb-3 mb-4 fw-bold">Contact Form</h2>
                                    <form ref={formEl} onSubmit={onFormSubmit} novalidate="">
                                        <div className="row mt-3">
                                            <div className="col-md-6 mb-3">
                                                <label className="sr-only" for="firstName">First name</label>
                                                <input type="text" className="form-control" id="firstName" placeholder="First Name" required="true" />
                                                <div className="invalid-feedback">
                                                    Please provide your first name
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-1">
                                                <label className="sr-only" for="lastName">Last name</label>
                                                <input type="text" className="form-control" id="lastName" placeholder="Last Name" required="true" />
                                                <div className="invalid-feedback">
                                                    Please provide your last name
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-12">
                                                <label className="sr-only" for="email">Email address</label>
                                                <div className="input-group">
                                                    <input type="email" className="form-control" id="email" placeholder="Email Address" required="true" />
                                                    <div className="invalid-feedback">
                                                        Please provide a valid email address
                                                    </div>
                                                </div>
                                                <div className="invalid-feedback">
                                                    Please provide a valid email address
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <p className="mb-1 text-center text-muted">Message:</p>
                                                    <label className="sr-only" for="message">Message:</label>
                                                    <textarea required="true" className="form-control" id="message" rows="3"></textarea>
                                                    <div className="invalid-feedback">
                                                        What do you want to chat about?
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row w-100 mx-auto mt-2 justify-content-center">
                                            <button type="submit" disabled={buttonDisabled} className="my-3 btn btn-dark submit"><i className="fas fa-inbox" aria-hidden="true"></i> Submit</button>

                                        </div>
                                        <p className="col-10 mt-3 mb-0 text-center mx-auto text-muted"><small >
                                            This form is protected by reCAPTCHA and the Google {` `}
                                            <a target="blank" href="https://policies.google.com/privacy">Privacy Policy</a> and
                                            {` `}
                                            <a target="blank" href="https://policies.google.com/terms">Terms of Service</a> apply.
                                        </small></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GoogleReCaptchaProvider>
    )
}

export default Contact;