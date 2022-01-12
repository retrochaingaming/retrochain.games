import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleHome from '../blocks/page-title/PageTitleHome';
import ContactsUs from "../blocks/contacts/ContactUs";
import ServicesHome from '../blocks/services/ServicesHome';
import AboutsUs from '../blocks/about/AboutUs';
import News from '../blocks/news/News';
import Newsletter from '../blocks/newsletter/Newsletter';


const Home = () => {
    document.body.classList.add( 'home' );
    document.body.classList.add( 'header-absolute-true' );

    return (
        <Fragment>
            <Loading />

            <Header logoColor="light" />

            <main id="main" className="site-main content-no-spacing">
                <div className="content">
                    <div className="clearfix">
                        <PageTitleHome />

                        <ContactsUs />

                        <AboutsUs />
	    <div style={{ height: '200px' }}></div>

                    </div>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default Home;
