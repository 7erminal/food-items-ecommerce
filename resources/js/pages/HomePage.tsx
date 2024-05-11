import React, { useState, useEffect } from "react";
import { createRoot } from 'react-dom/client'
import Header from "../components/Header";
import ItemsAd from "../components/ItemsAd";
import NewsletterSignUp from "../components/NewsletterSignUp";
import Banner1Section from "../components/Banner1Section";
import Banner2Section from "../components/Banner2Section";
import Social from "../components/Social";
import Footer from "../components/Footer";
import CartButton from "../components/CartButton";
import Functions from "../utils/functions";

const HomePage: React.FC = () => {
    const [cartItemCount, setCartItemCount] = useState(0)

    useEffect(()=>{
        const x = new Functions().getNumberOfItems();
        setCartItemCount(x);
    },[])

    return <div style={{position: 'relative', width: '100%', height: '100%'}}>
        <Header />
        <ItemsAd />
        <NewsletterSignUp />
        <Banner1Section />
        <Banner2Section />
        <Social />
        <CartButton count_={cartItemCount} />
        <Footer />
    </div>
}

if(document.getElementById('homePage')){
    createRoot(document.getElementById('homePage')!).render(<HomePage />)
}