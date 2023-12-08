import { React, useState } from 'react'
import './Contactus.css'
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

const ContactUs = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // You can add your form submission logic here
        console.log('Form submitted:', formData);



        try {
            const response = await axios.post(
                "https://myperfectwriting.co.uk/api/sendEmail.php",
                formData
            );

            toast.success('Message sent successfully!', {
                position: toast.POSITION.TOP_CENTER,
            });

        } catch (error) {
            console.error("Error submitting the form:", error);
        }

    };
    return (
        <>
            <Helmet>

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
        "name": "Contact",
        "item": "https://myperfectwriting.co.uk/contact-us"
    }]
}`}
                </script>
            </Helmet>
            <ToastContainer />
            <div className="contactUs-container">

                <div class="contact-container">
                    <div class="content">
                        <div class="left-side">
                            <div class="address details">
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="topic">Address</div>
                                <div class="text-one">124 City Road, London,</div>
                                <div class="text-two">EC1V 2NX United Kingdom</div>
                            </div>
                            <div class="phone details">
                                <i class="fas fa-phone-alt"></i>
                                <div class="topic">Phone</div>
                                <div class="text-one">+447488818219 </div>
                            </div>
                            <div class="email details">
                                <i class="fas fa-envelope"></i>
                                <div class="topic">Email</div>
                                <div class="text-one">support@myperfectwriting.co.uk</div>
                            </div>
                        </div>
                        <div class="right-side">
                            <div class="topic-text">Send us a message</div>
                            <p>Reach out to us for any inquiries or assistance – we're here to help!</p>
                            <form action="#">
                                <div class="input-box">
                                    <input name="name" value={formData.name}
                                        onChange={handleChange}
                                        required type="text" placeholder="Enter your name" />
                                </div>
                                <div class="input-box">
                                    <input name="email" value={formData.email}
                                        onChange={handleChange}
                                        required type="text" placeholder="Enter your email" />
                                </div>
                                <div class="input-box message-box">
                                    <textarea name="message" placeholder='Write your message' value={formData.message}
                                        onChange={handleChange}
                                        required></textarea>
                                </div>
                                <div class="MessagBtnbutton">
                                    <input type="button" onClick={handleSubmit} value="Send Now" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ContactUs;