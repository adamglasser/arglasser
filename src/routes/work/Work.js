import NavBar from "../../components/NavBars/NavBar";
import Hero from "./Hero";
import {LeftGalleryHolder,RightGalleryHolder} from "./GalleryHolder";
import ContactCta from "./ContactCta";


import Email from './nimbl/nimbl-email-min.PNG'
import ViasatLookup from './viasat/Viasat-Lookup-min.PNG'
import HotdoggerHome from './hotdogger/doggerCrop.png'

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Work = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const navigate = useNavigate()
    return (
        <>
            <NavBar />
            <Hero />
            <RightGalleryHolder imageUrl={Email} imageSide="right" title='Nimbl - Marketing Application' skills={['Web Application','GraphQL','React','Typescript','Cosmos Db','Firebase','Jest','Cypress']} description={`Nimbl is a web app for configuring promotional emails, address collection webpages, and direct mail gifts. It's built with React TypeScript on the frontend and Node on the backend, utilizing a GraphQl API. The API integrates various external data sources, including Azure Cosmos DB/Table Storage, PFL's Generic API, and third-party services like Firebase for authentication and Mailgun for emails. I designed and architected the app, which took around 8 months to build with the help of a few other PFL developers.`} buttonText='View Project' buttonLink='https://nimbl.pfl.com/home' />
            <LeftGalleryHolder imageUrl={ViasatLookup} imageSide="left" title='Viasat - Giftcard Sampling' skills={['Data Analytics','MAP Integration','Rest API','React','Microsoft SQL','Magic Auth']} description={`This initiative was inspired by conversations with stakeholders from Viasat's marketing, data analytics, and compliance teams. They wanted to find a more effective way to reward customers for timely service payments and attract new clients. The project involved integrating with the Client's Marketo instance to identify eligible recipients. Additionally, a customer and agent portal was developed to provide real-time program status updates, and a custom Tableau dashboard was created to provide insights into the program's effectiveness for the data and marketing teams.`} buttonText='View Project' buttonLink='https://viasatrewards.directmail.tech/'/>
            <RightGalleryHolder imageUrl={HotdoggerHome} imageSide="right" title='The Hotdogger' skills={['Web Application','React','Azure Functions','Rest API']} description={`The Hotdogger is a personal project I created to promote an event I help run every year in the desert of Western Colorado. The Hotdogger is a biathlon mountain biking and hotdog eating competition where teams of up to 6 people compete to bike as many laps and eat as many hotdogs as they can.`} buttonText='View Project' buttonLink='https://www.hotdogger.org/Home' />
            <ContactCta />
        </>
    )
}

export default Work;
