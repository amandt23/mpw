import React from 'react';
import { Helmet } from 'react-helmet'
import price from '../../pricecard.json';
import reviews from '../../review.json';
import headerData from '../../header.json';

import Header from '../../components/Header/Header';
import MyTeam from '../../components/CardCrousel/MyTeam';
import Price from '../../components/Price/Price';
import Faqs from '../../components/FAQS/Faqs';
import OnlineAcademic from '../../components/onlineAcademic/OnlineAcademic';
import MidSection from '../../components/MidSection/MidSection';
import Social from '../../components/Social/Social';
import Review from '../../components/Reviews/Review';
import PlaceOrder from '../../components/PlaceOrder/PlaceOrder';
import MyWriting from '../../components/MyPerfectWritting/MyWriting';
import LazyHydrate from 'react-lazy-hydration';




const Home = () => {
  const HomePrice = price.home_pricecard;
  const HomeReview = reviews.home_page_reviews;
  const homeHeaderData = headerData.home_page_header[0]; 
//   console.log(headerData); // Check the imported data
// console.log(homeHeaderData); // Check the data being passed to the Header component

    return (
        <>
            <Helmet>
                <title>My Perfect Writing | Premier Essay Writing Service in UK</title>
                <meta name="description" content="Explore top-tier Essay Writing Service in UK with My Perfect Writing. Custom academic solutions for students seeking excellence in their studies." />

                <meta name="keywords" content="My Perfect Writing - Home, Essay Writing Service UK, Custom Academic Assistance UK, UK Expert Writers Service"></meta>

                <link rel="canonical" href="https://www.myperfectwriting.co.uk/" />

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
                    "@context": "https://schema.org",
                    "@type": "ProfessionalService",
                    "name": "My Perfect Writing",
                    "description": "My Perfect Writing is a premier academic assistance service providing a wide range of professional writing services to students and researchers. With a focus on quality and detail, we offer everything from essay writing and thesis support to proofreading and custom writing services, catering to all academic levels and subjects.",
                    "url": "https://myperfectwriting.co.uk/",
                    "logo": "https://myperfectwriting.co.uk/static/media/logo.c7b997f3c932270a4106.png",
                    "sameAs": [
                      "https://www.facebook.com/MyPerfectWritingUK",
                      "https://www.instagram.com/myperfectwriting",
                      "https://www.tiktok.com/@myperfectwriting.co.uk"
                    ],
                    "contactPoint": [
                      {
                        "@type": "ContactPoint",
                        "telephone": "+447488818219",
                        "contactType": "customer service",
                        "areaServed": "United Kingdom",
                        "availableLanguage": "English"
                      },
                      {
                        "@type": "ContactPoint",
                        "email": "support@myperfectwriting.co.uk",
                        "contactType": "customer support"
                      }
                    ],
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "124 City Road",
                      "addressLocality": "London",
                      "postalCode": "EC1V 2NX",
                      "addressCountry": "United Kingdom"
                    },
                    "keywords": "Essay Writing Service in UK",
                    "hasOfferCatalog": {
                      "@type": "OfferCatalog",
                      "name": "Services Catalog",
                      "itemListElement": [
                        {
                          "@type": "OfferCatalog",
                          "name": "Essay Writing",
                          "itemListElement": [
                            {
                              "@type": "Offer",
                              "itemOffered": {
                                "@type": "Service",
                                "name": "Essay Writing",
                                "description": "Comprehensive essay writing services for a wide range of topics."
                              }
                            },
                            {
                              "@type": "Offer",
                              "itemOffered": {
                                "@type": "Service",
                                "name": "Custom Essay Writing",
                                "description": "Tailored essays written to meet individual requirements and standards."
                              }
                            }
                          ]
                        },
                        {
                          "@type": "OfferCatalog",
                          "name": "Applied and Professional Sciences",
                          "itemListElement": [
                            {
                              "@type": "Offer",
                              "itemOffered": {
                                "@type": "Service",
                                "name": "Professional Science Writing",
                                "description": "Expert writing services for scientific and technical disciplines."
                              }
                            }
                          ]
                        },
                        {
                          "@type": "OfferCatalog",
                          "name": "Humanities",
                          "itemListElement": [
                            {
                              "@type": "Offer",
                              "itemOffered": {
                                "@type": "Service",
                                "name": "Humanities Writing Services",
                                "description": "Comprehensive writing support covering all areas of the humanities."
                              }
                            }
                          ]
                        },
                        {
                          "@type": "OfferCatalog",
                          "name": "Social Sciences",
                          "itemListElement": [
                            {
                              "@type": "Offer",
                              "itemOffered": {
                                "@type": "Service",
                                "name": "Social Sciences Writing Services",
                                "description": "Specialized writing assistance for social science papers and research."
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                  
                  {
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "MyPerfectWriting Services",
                    "description": "Pricing per page for our services.",
                    "keywords": "Essay Writing Service",
                    "brand": {
                      "@type": "Organization",
                      "name": "My Perfect Writing"
                    },
                    "offers": {
                      "@type": "Offer",
                      "priceCurrency": "GBP",
                      "price": "6.99",
                      "description": "Pricing per page for our services."
                    },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.8",
                      "ratingCount": "9983"
                    }
                  }
`}
                </script>
                  {/* header Section */}     
            <Header header={homeHeaderData} />
            <LazyHydrate whenVisible>
            <MyTeam />
            <div id="priceEmpty" style={{paddingBottom:"60px", backgroundColor:"#F2F2F2"}}></div>
            {/* pricecard Section */}
            <div className="price " id="pricing-section">
            <div className="pricTop">
                <h2>Why Choose My Perfect Writing?</h2>
                <p>Unlock unparalleled academic support with My Perfect Writing, where quality meets affordability, backed by a dedicated team ensuring your academic success.</p>
            </div>
            <Price  details={HomePrice}/>
            </div>
            <Faqs />
            <OnlineAcademic />
            <MidSection />
            <Social />
            {/* Review section */}
            <div className="review">
            <div className="reviewTop">
                <h2>Client Testimonials</h2>
                <p>Explore the positive experiences of our valued clients and understand why My Perfect Writing is the preferred choice for academic excellence and professional support.</p>
            </div>
            <Review reviews={HomeReview}/>
            </div>
            <PlaceOrder />
            </LazyHydrate>
             <LazyHydrate whenIdle>
            <MyWriting />
            </LazyHydrate>

        </>
    )
}

export default Home