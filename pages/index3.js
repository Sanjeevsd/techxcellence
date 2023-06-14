import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import MainBanner from '../components/HomeThree/MainBanner';
import Features from '../components/HomeThree/Features';
import AboutContent from '../components/HomeThree/AboutContent';
import ServicesCard from '../components/HomeThree/ServicesCard';
import WhyChooseUs from '../components/HomeThree/WhyChooseUs';
import ProjectsCard from '../components/HomeThree/ProjectsCard';
import TeamCardTwo from './../components/Common/TeamCardTwo';
import Testimonials from '../components/Common/Testimonials';
import AnalysisFormContent from '../components/HomeThree/AnalysisFormContent';
import BlogCardSection from '../components/Common/BlogCardSection';
import PartnerLogos from '../components/Common/PartnerLogos';
import SubscribeStyleOne from '../components/Common/SubscribeStyleOne';
import Footer from '../components/Layouts/Footer';

class Index3 extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <MainBanner />

                <Features />

                <AboutContent />

                <ServicesCard />

                <WhyChooseUs />

                <ProjectsCard />
                
                <TeamCardTwo />

                <Testimonials />

                <AnalysisFormContent />

                <BlogCardSection />

                <div className='pb-100'>
                    <PartnerLogos />
                </div>

                <SubscribeStyleOne />
                
                <Footer />
            </>
        );
    }
}

export default Index3;