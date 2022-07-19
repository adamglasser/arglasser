import Header from "../../components/header/header"


const Resume = () => {
    return (
        <>
            <Header textClassName={'dark-nav-link'} />
            <div className="container py-5">
                {/** Name */}
                <div className="row w-100 mx-auto g-md-5">
                    <div className="col-md-8">
                        <h1 className="display-3 fw-bold text-black"> Adam Glasser</h1>
                        <p>Fullstack developer, solutions architect, and problem solver</p>
                    </div>
                    <div className="col-md-4 d-flex">
                        <div className="my-auto">
                            <p className="mb-0">422 W Olive st</p>
                            <p className="mb-0">Bozeman, MT, 59715</p>
                            <p className="mb-0 fw-bold">(301) 807-6590</p>
                        </div>
                    </div>
                </div>
                {/** Main */}
                <div className="row w-100 mx-auto pt-4 g-md-5">
                    <div className="col-md-8">
                        <h4 className="fw-bold text-primary mb-3">Experience</h4>
                        <div className="row">
                            <div className="col">
                                <h5><span className="fw-bold">Lead Solutions Architect</span> - PFL</h5>
                            </div>
                            <div className="col-lg-auto text-muted">
                                <p>(Aug 2018 - PRESENT)</p>
                            </div>
                        </div>
                        <div className="row">
                            <p className="text-muted">
                                Responsible for application architecture, solution development, UI/UX
                                design, pre-sales technical support, customer onboarding, custom
                                integrations, reporting/analysis, and implementation consulting. Architected
                                and delivered automated solutions to integrate disparate platforms/data
                                sources with PFL technologies to meet customer needs within tight timelines.
                            </p>
                            <ul className="text-muted">
                                <li className="my-3">
                                    Technically architected/developed and visually designed a
                                    typescript/node application using a custom Graph QL API which
                                    enables PFL clients to securely login using Firebase Magic Link
                                    authorization, construct custom emails, forms, and personalize
                                    direct mail pieces using custom designed WYSIWYG interfaces and
                                    launch “Hybrid Experiences” hosted in a Next JS application which
                                    enables order completion through the PFL Generic API. The
                                    application and API are both hosted and managed through
                                    Microsoft’s Azure Cloud.
                                </li>
                                <li className="my-3">
                                    Created an automated process to match customer prospects from a
                                    third party data source against a NoSQL database and provide data on
                                    the direct mail offers they received. Analyzed results through Tableau
                                    and provided recommendations for additional
                                    optimization/targeting.
                                </li>
                                <li className="my-3">
                                    Architected a number of solutions designed to drive customer
                                    prospects to PFL hosted microsites built with React/Node and
                                    deployed to Azure hosted serverless web apps to collect preferred
                                    address data and report on conversions.
                                </li>
                                <li className="my-3">
                                    Constructed a templating solution to pick up on unique parameters in
                                    a referral URL and dynamically render fully customer branded web
                                    pages/emails server side to provide highly personalized individual
                                    experiences to customer prospects.
                                </li>
                                <li className="my-3">
                                    Guide customers in the integration, implementation, and reporting
                                    with PFL’s Marketo, Salesforce, and Oracle Eloqua native
                                    integrations.
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h5><span className="fw-bold">Customer Care Specialist</span> - Marketo</h5>
                            </div>
                            <div className="col-lg-auto text-muted">
                                <p>(Aug 2017 - Aug 2018)</p>
                            </div>
                        </div>
                        <div className="row">
                            <ul className="text-muted">
                                <li className="my-3">
                                    Drove increased customer satisfaction/retention across the largest
                                    customer segment.
                                </li>
                                <li className="my-3">
                                    Developed and implemented a program to provide technical support for customers who experience significant internal turnover
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4 className="fw-bold text-primary">Bio</h4>
                        <p className="text-muted">
                            Adam Glasser is a Lead
                            Solutions Architect at PFL, the
                            leader in Tactile Marketing
                            Automation. He enjoys
                            solving complex business
                            problems through automation
                            and is passionate about
                            learning new technologies.
                        </p>
                        <p className="text-muted">
                            Adam graduated from the
                            University of Denver where he
                            developed an interest in
                            technology, and data driven
                            storytelling. He currently
                            resides in Bozeman
                            where he works to deliver
                            engaging multi-channel
                            experiences.
                        </p>
                        <h4 className="fw-bold text-primary">Skills</h4>
                        <p className="m-1 badge text-bg-dark text-white">Marketo Certified Expert</p>
                        <p className="m-1 badge text-bg-dark text-white">Salesforce CRM</p>
                        <p className="m-1 badge text-bg-dark text-white">Oracle Eloqua</p>
                        <p className="m-1 badge text-bg-dark text-white">Transact SQL</p>
                        <p className="m-1 badge text-bg-dark text-white">Azure Logic Apps</p>
                        <p className="m-1 badge text-bg-dark text-white">Azure Functions</p>
                        <p className="m-1 badge text-bg-dark text-white">Azure Data Factory</p>
                        <p className="m-1 badge text-bg-dark text-white">React JS</p>
                        <p className="m-1 badge text-bg-dark text-white">Node JS</p>
                        <p className="m-1 badge text-bg-dark text-white">Bootstrap/React Bootstrap</p>
                        <p className="m-1 badge text-bg-dark text-white">Tableau</p>
                        <p className="m-1 badge text-bg-dark text-white">Power BI</p>
                        <p className="m-1 badge text-bg-dark text-white">Chart JS</p>
                        <p className="m-1 badge text-bg-dark text-white">JIRA</p>
                        <p className="m-1 badge text-bg-dark text-white">Git</p>
                    </div>
                </div>
                {/** Education */}
                <div className="row w-100 mx-auto pt-4 g-md-5">
                    <div className="col-md-8">
                        <h4 className="fw-bold text-primary mb-3">Education</h4>
                        <div className="row">
                            <div className="col">
                                <h5><span className="fw-bold">University of Denver</span> - BA</h5>
                            </div>
                            <div className="col-lg-auto text-muted">
                                <p>(2013 - 2017)</p>
                            </div>
                        </div>
                        <div className="row">
                            <p className="text-muted">
                                BA in journalism with a minor in anthropology. Concentration in digital
                                media.
                            </p>
                        </div>
                    </div>
                </div>
                {/** Download */}
                <a href="https://arglasser.azureedge.net/public/AG%20-%20Resume.pdf" download="Adam Glasser Resume" className="mt-3 ms-md-4 btn btn-primary">Download Resume</a>
            </div>
        </>
    )
}

export default Resume