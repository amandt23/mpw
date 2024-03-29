import React from 'react'
import '../TermAndConditions/termcondition.css';
import Navbar from '../../components/Navbar/Navbar';
import { Helmet } from 'react-helmet';

const CookiePolicy = () => {
    return (
        <>
            <Helmet>
                <title>Cookies Policy | My Perfect Writing Online Services</title>
                <meta name="description" content="Learn about our Cookies Policy at My Perfect Writing. Understand how we enhance user experience and protect your privacy on our UK website" />

                <meta name="keywords" content="My Perfect Writing Cookies Policy, Website Cookie Usage UK,Online Privacy Settings My Perfect Writing, User Experience Enhancement Cookies"></meta>

                <link rel="canonical" href="https://www.myperfectwriting.co.uk/cookies-policy" />

                <script type="application/ld+json">
                    {`
   {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://myperfectwriting.co.uk/"
    }, {
        "@type": "ListItem",
        "position": 2,
        "name": "Cookies Policy",
        "item": "https://myperfectwriting.co.uk/cookies-policy"
    }]
}`}
                </script>
            </Helmet>
            <div className="termsMain">
                <div className="termsContents">

                    <div className="termTop">
                        <h1>Cookies Policy For My Perfect Writing</h1>
                        <p>This Cookies Policy serves as an integral part of our Terms and Conditions and Privacy Policy, collectively forming the agreement between you and My Perfect Writing, accessible via <a href="https://www.myperfectwriting.co.uk">myperfectwriting.co.uk</a>. By utilising our services and interacting with the banners on our website, you explicitly consent to the use of cookies in accordance with the stipulations outlined in this policy.
                            <br />This document aims to elucidate the nature of cookies, the various types utilised by our website, and the purposes they serve. It also provides guidance on how you can manage your cookie preferences.</p>
                    </div>
                    <hr />

                    <div className="termSection">
                        <h2>Definition Of Terms</h2>
                        <p>In the context of this policy, "Cookies" refer to small pieces of code stored on your device following a visit to our website or utilisation of our online services. These facilitate a more personalised user experience upon subsequent interactions with our services.
                            <br />Additional terms such as "Customer," "Expert," "Website," and others are defined comprehensively in our Terms and Conditions.</p>
                            
                        <h2>Scope Of The Cookies Policy</h2>
                        <p>This policy exclusively addresses the use of cookies on our website and does not extend to the processing of personal information outside the scope of cookie usage. For detailed information on how we handle personal data, please refer to our Privacy Policy.</p>
                        <h2>Types Of Cookies And Their Purposes</h2>
                        <p>
                            <b>My Perfect Writing employs various types of cookies for distinct purposes:</b><br />
                            <b>Necessary Cookies:</b> Essential for website functionality, enabling features such as authentication, security, and privacy settings.<br />
                            <b>Functional Cookies: </b> Facilitate user personalisation, remembering individual settings and preferences.<br />
                            <b>Performance Cookies: </b> Gather data on website usage patterns, aiding in performance optimisation and user experience enhancement.<br />
                            <b>Advertising Cookies: </b> Deliver tailored advertising content, enhancing relevance to individual users.<br />
                            <b>Social Media Cookies: </b> Enable content sharing through social media platforms and integration with social networking sites.<br />
                            These cookies collectively contribute to an enhanced user experience, improved service relevancy, and targeted advertising content.</p>
                    
                        <h2>Managing Cookie Preferences</h2>
                        <p>You retain control over the cookies stored on your device and can opt to delete or refuse them through your web browser settings. For guidance, please refer to the help pages of your specific browser:</p>
                        <p><b>Safari</b><br />
                        <b>Google Chrome</b><br />
                        <b>Microsoft Edge</b><br />
                        <b>Firefox</b><br />
                        <b>Opera</b><br /></p>
                        <p>Please note that restricting cookies may impact your ability to use certain features of our website, and some services may not function as intended.</p>
                 
                        <h2>Contact Information</h2>
                        <p>For inquiries or further clarification regarding our Cookies Policy, feel free to contact us at <b><a href="https://www.myperfectwriting.co.uk">myperfectwriting.co.uk</a></b></p>
                  
                    </div>
                    

                </div>
            </div>
        </>
    )
}

export default CookiePolicy