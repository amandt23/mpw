import { React, useState } from 'react'
import './Contactus.css'
import axios from "axios";
import Navbar from '../../components/Navbar/Navbar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                "https://settletogether.com/api/sendEmail1.php",
                formData
            );

            toast.success('Message sent successfully!', {
                position: toast.POSITION.TOP_CENTER,
              });

            // console.log(response.data);
            // if (response.data[0] === '200') {
            //     // Registration was successful
               
            // } else if (response.data[0] === '400') {

            // }
        } catch (error) {
            console.error("Error submitting the form:", error);
        }

    };
    return (
        <>
            <ToastContainer />
            <div className="contactUs-container">

                <div class="container">
                    <div class="content">
                        <div class="left-side">
                            <div class="address details">
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="topic">Address</div>
                                <div class="text-one">Surkhet, NP12</div>
                                <div class="text-two">Birendranagar 06</div>
                            </div>
                            <div class="phone details">
                                <i class="fas fa-phone-alt"></i>
                                <div class="topic">Phone</div>
                                <div class="text-one">+0098 9893 5647</div>
                                <div class="text-two">+0096 3434 5678</div>
                            </div>
                            <div class="email details">
                                <i class="fas fa-envelope"></i>
                                <div class="topic">Email</div>
                                <div class="text-one">codinglab@gmail.com</div>
                                <div class="text-two">info.codinglab@gmail.com</div>
                            </div>
                        </div>
                        <div class="right-side">
                            <div class="topic-text">Send us a message</div>
                            <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
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
                                    <textarea name="message" value={formData.message}
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