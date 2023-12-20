import React from "react";
import { createRoot } from 'react-dom/client'
import Header from "../components/Header";
import ItemsAd from "../components/ItemsAd";
import NewsletterSignUp from "../components/NewsletterSignUp";
import Banner1Section from "../components/Banner1Section";
import Banner2Section from "../components/Banner2Section";
import Social from "../components/Social";
import Footer from "../components/footer";

const HomePage: React.FC = () => {
    return <div style={{position: 'relative', width: '100%', height: '100%'}}>
        <Header />
        <ItemsAd />
        <NewsletterSignUp />
        <Banner1Section />
        <Banner2Section />
        <Social />
        <Footer />
    </div>
}

if(document.getElementById('homePage')){
    createRoot(document.getElementById('homePage')!).render(<HomePage />)
}