import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeTwo/MainBanner';
import PartnerLogos from '../components/HomeTwo/PartnerLogos';
import FeaturesArea from '../components/HomeTwo/FeaturesArea';
import AboutContent from '../components/HomeTwo/AboutContent';
import WhyChooseUs from '../components/HomeTwo/WhyChooseUs';
import ServicesContent from '../components/Common/ServicesContent';
import PricingContent from '../components/PricingPlans/PricingContent';
import ProjectsStyleTwo from '../components/Projects/ProjectsStyleTwo';
import TestimonialSection from '../components/HomeTwo/TestimonialSection';
import FaqSection from '../components/Faq/FaqSection';
import TeamCard from '../components/Common/TeamCard';
import BlogCardSection from '../components/Common/BlogCardSection';
import SubscribeStyleTwo from '../components/Common/SubscribeStyleTwo';
import Footer from '../components/Layouts/Footer';

class Index2 extends Component {
    render() {
        return (
            <>
                <Navbar />

                <MainBanner />

                <PartnerLogos />

                <FeaturesArea />

                <div className="pb-100">
                    <AboutContent />
                </div>

                <WhyChooseUs />

                <ServicesContent />

                <PricingContent />

                <ProjectsStyleTwo />

                <TestimonialSection />

                <FaqSection />

                <TeamCard />

                <BlogCardSection />

                <SubscribeStyleTwo />
                
                <Footer />
            </>
        );
    }
}

export default Index2;