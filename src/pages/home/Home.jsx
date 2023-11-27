import React from 'react'
import Header from '../../components/Header/Header'
import MyTeam from '../../components/CardCrousel/MyTeam'
import Price from '../../components/Price/Price'
import Faqs from '../../components/FAQS/Faqs'
import OnlineAcademic from '../../components/onlineAcademic/OnlineAcademic'
import MidSection from '../../components/MidSection/MidSection'
import Social from '../../components/Social/Social'
import Review from '../../components/Reviews/Review'
import PlaceOrder from '../../components/PlaceOrder/PlaceOrder'
import MyWriting from '../../components/MyPerfectWritting/MyWriting'

const Home = () => {
    return (
        <>
            <Header />
            <MyTeam />
            <Price />
            <Faqs />
            <OnlineAcademic />
            <MidSection />
            <Social />
            <Review />
            <PlaceOrder />
            <MyWriting />

        </>
    )
}

export default Home