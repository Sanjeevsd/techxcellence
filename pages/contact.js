import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ContactForm from '../components/Contact/ContactForm';
import SubscribeStyleTwo from '../components/Common/SubscribeStyleTwo';
import Footer from '../components/Layouts/Footer';

class Contact extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Contact" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Contact Us" 
                    breadcrumbUrl="/" 
                />

                <ContactForm />

                <SubscribeStyleTwo />
                
                <Footer />
            </>
        );
    }
}

export default Contact;