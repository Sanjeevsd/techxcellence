import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ProjectsStyleOne from '../components/Projects/ProjectsStyleOne';
import SubscribeStyleTwo from '../components/Common/SubscribeStyleTwo';
import PartnerLogos from '../components/Common/PartnerLogos';
import Footer from '../components/Layouts/Footer';

class Projects extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Projects" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Projects" 
                    breadcrumbUrl="/" 
                />

                <ProjectsStyleOne />

                <SubscribeStyleTwo />

                <div className='ptb-100'>
                    <PartnerLogos />
                </div>
                
                <Footer />
            </>
        );
    }
}

export default Projects;