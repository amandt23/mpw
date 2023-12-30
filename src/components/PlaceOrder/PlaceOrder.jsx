import React from 'react'
import './placeorder.css'
import { LuLogIn } from "react-icons/lu";
import { MdOutlineShoppingCart  } from "react-icons/md";

const PlaceOrder = () => {
    return (
        <div className='place-order'>
            <div className="order-top">
                <h2>How to Use Our Service</h2>
                <p>Experience seamless academic support with our user-friendly platform, designed to ensure confidentiality and quality at every step.</p>
            </div>
            <div className="order-bottom">
                <div className="form">
                    <div className="form-one">
                        <div className="form-left">
                            <LuLogIn className='Form-icons' />

                        </div>
                        <div className="form-bottom">
                            <p><strong>1. Login</strong></p>
                            <p>Log in to our client portal and choose a pseudonym to safeguard your privacy.</p>
                        </div>
                    </div>
                    <div className="form-one">
                        <div className="form-left">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                                <path d="M32.6835 2.86359L33.5685 3.74859C34.788 4.96959 34.6035 7.13409 33.153 8.58309L14.9025 26.8336L8.98952 28.9966C8.24702 29.2696 7.52402 28.9156 7.37702 28.2091C7.32734 27.9528 7.35073 27.6877 7.44452 27.4441L9.64952 21.4801L27.849 3.27909C29.2995 1.83009 31.464 1.64259 32.6835 2.86359ZM14.106 4.67859C14.303 4.67859 14.4981 4.71739 14.68 4.79277C14.862 4.86816 15.0274 4.97864 15.1667 5.11793C15.306 5.25722 15.4165 5.42258 15.4918 5.60457C15.5672 5.78656 15.606 5.98161 15.606 6.17859C15.606 6.37558 15.5672 6.57063 15.4918 6.75262C15.4165 6.93461 15.306 7.09997 15.1667 7.23925C15.0274 7.37854 14.862 7.48903 14.68 7.56441C14.4981 7.63979 14.303 7.67859 14.106 7.67859H8.10602C7.31037 7.67859 6.54731 7.99466 5.9847 8.55727C5.42209 9.11988 5.10602 9.88294 5.10602 10.6786V28.6786C5.10602 29.4742 5.42209 30.2373 5.9847 30.7999C6.54731 31.3625 7.31037 31.6786 8.10602 31.6786H26.106C26.9017 31.6786 27.6647 31.3625 28.2273 30.7999C28.7899 30.2373 29.106 29.4742 29.106 28.6786V22.6786C29.106 22.2808 29.2641 21.8992 29.5454 21.6179C29.8267 21.3366 30.2082 21.1786 30.606 21.1786C31.0038 21.1786 31.3854 21.3366 31.6667 21.6179C31.948 21.8992 32.106 22.2808 32.106 22.6786V28.6786C32.106 30.2699 31.4739 31.796 30.3487 32.9212C29.2234 34.0464 27.6973 34.6786 26.106 34.6786H8.10602C6.51472 34.6786 4.9886 34.0464 3.86338 32.9212C2.73816 31.796 2.10602 30.2699 2.10602 28.6786V10.6786C2.10602 9.08729 2.73816 7.56117 3.86338 6.43595C4.9886 5.31073 6.51472 4.67859 8.10602 4.67859H14.106Z" fill="#01593A" />
                            </svg>
                        </div>
                        <div className="form-bottom">
                            <p><strong>1. Provide order details</strong></p>
                            <p>Provide your order details and upload any necessary instruction files</p>
                        </div>
                    </div>
                    <div className="form-one">
                        <div className="form-left">
                            <MdOutlineShoppingCart  className='Form-icons'/>

                        </div>
                        <div className="form-bottom">
                            <p><strong>1. Proceed to checkout</strong></p>
                            <p>Proceed to checkout, and our top-tier writers will commence work on your order promptly</p>
                        </div>
                    </div>
                </div>
                <div className="video" >
                    <video controls autoplay>
                        <source src="./images/orderPlace.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrder