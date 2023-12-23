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
import { Helmet } from 'react-helmet'

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Essay Writing Service in UK - My Perfect Writing</title>
                <meta name="description" content="Welcome to My Perfect Writing, where academic excellence meets personalised support. Discover our range of academic assistance services for UK students. Experience quality, integrity, and bespoke solutions for your educational needs. Start your journey to academic success here." />

                {/* Facebook meta description */}

                <meta property="og:type" content="profile" />
                <meta property="og:title" content="My Perfect Writing UK" />
                <meta property="og:description" content="We offer top-quality essay writing services to help you with academic writing needs." />
                <meta property="og:url" content="https://www.facebook.com/MyPerfectWritingUK" />
                <meta property="og:image" content="https://www.facebook.com/photo/?fbid=304777308888913&set=a.163706819662630" />

                {/* TikTok Meta Description */}
                <meta property="og:type" content="profile" />
                <meta property="og:title" content="myperfectwriting.co.uk" />
                <meta property="og:description" content="Essay writing services to help you with any academic writing needs." />
                <meta property="og:url" content="https://www.tiktok.com/@myperfectwriting.co.uk" />
                <meta property="og:image" content="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/036924512fd5ce2234dd790f90fae7d1.jpeg?lk3s=a5d48078&x-expires=1703412000&x-signature=Q3tNIYMUWroaSe5tgOtswVVVTvw%3D" />

                {/* Instagram MetaDescription */}

                <meta property="og:type" content="profile" />
                <meta property="og:title" content="MyPerfectWriting" />
                <meta property="og:description" content="Writing Service - Do not trust us; TEST us. MyPerfectWriting is the only essay writing service with a fixed rate for every deadline and educational level." />
                <meta property="og:url" content="https://www.instagram.com/myperfectwriting/" />
                <meta property="og:image" content="https://scontent.cdninstagram.com/v/t51.2885-19/375491376_6848625268501075_5955990304385974527_n.jpg?stp=dst-jpg_s120x120&_nc_cat=101&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=6fKNsbS7p7AAX_8-bxn&_nc_ht=scontent.cdninstagram.com&oh=00_AfBJyWa2LNO7fMiQI9c48pyXgUacyz93p88Fsm1zGVq4jA&oe=658ADFB1" />

                
            </Helmet>

                

                <script type="application/ld+json">
                    {`
{
    "@context": "http://schema.org/",
    "@type": "product",
    "name": "MyPerfectWriting.co.uk",
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "9983"
    }
}`}
                </script>
           
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