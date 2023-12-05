import React, { useState } from 'react'
import './navbar.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import logo from '../../BlogImages/logo.png'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const Navbar = () => {

  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  const scrollToPricing = () => {
    scroll.scrollTo(1450, {
      smooth: true,
      duration: 500,
    });
  };

  return (
    // <div className="NavbarContainer">

    <div class="topnavBar">
      <div className="navLeft">

        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className={`navLinks ${isNavVisible ? 'visible' : ''}`}>
        <RxCross2 className='crossIcon' onClick={toggleNav} />
        <a onClick={scrollToPricing} className='aLink' >Pricing</a>
        <div className="dropdown dropdown1">
          <a href="#contact" >Company</a>
          <IoMdArrowDropdown className='navArroIcon' />
          <div className="dropdown-content">
            <Link to="about-our-service">About Us</Link>
            <Link to="why-us">Why us</Link>
          </div>
        </div>
        <div className="dropdown ">
          <a className='aLink' href="#contact">Services</a>
          <IoMdArrowDropdown className='navArroIcon' />
          <div className="dropdown-content dropdown-content2">
            <div className="service">
              <div className="subService">
                <a href="#service1">Essay Writing</a>
                <div className="subService-services">
                  <a href="#">Annotated Bibliography Service</a>
                  <a href="#">Dissertation Writing Service</a>
                  <a href="#">Literature Review Service</a>
                  <Link to="/discussion-post-service">Discussion Post Service</Link>
                  <a href="#">Academic Essays Service</a>
                  <a href="#">Peer Responses Service</a>
                  <a href="#">Research Papers Service</a>
                  <a href="#">Thesis Writing Service</a>
                </div>
              </div>
            </div>
            <div className="service service5">
              <a href="#service1">Applied & Professional Sciences</a>
              <div className=" SubService5">
                <Link to="#">Nursing Assignment Help</Link>
                <a href="#">Criminal Justice Assignment Help</a>
                <a href="#">Proofreading Service</a>
                <a href="#">Nutrition Assignment Help</a>
              </div>
            </div>
            <div className="service service3">
              <a href="#service1">Custom Essay Writing</a>
              <div className=" SubService3">
                <a href="#">Dissertation Proofreading Service</a>
                <a href="#">CV Writing Service</a>
                <a href="#">Resume Writing Service</a>
                <a href="#">Proofreading Service</a>
                <a href="#">Editing & Formatting Service</a>
              </div>
            </div>

            <div className="service service2 ">
              <a href="#service1">Humanities</a>
              <div className=" SubService2">
                <a href="#">English Assignment Help</a>
                <a href="#">Philosophy Assignment Help</a>
                <a href="#">Literature Assignment Help</a>
                <a href="#">History Assignment Help</a>
                <a href="#">Geography Assignment Help</a>
              </div>
            </div>

            <div className="service service4">
              <a href="#service1">Social Sciences</a>
              <div className=" SubService4">
                <a href="#">Communication Assignment Help</a>
                <a href="#">Public Relations Assignment Help</a>
                <a href="#">Sociology Assignment Help</a>
                <a href="#">Social Work Assignment Help</a>
                <a href="#">Religion Assignment Help</a>
                <a href="#">Psychology Assignment Help</a>
                <a href="#">Political Assignment Help</a>
                <a href="#">HRM Assignment Help</a>
              </div>
            </div>

            {/* <div className="service service6">
              <a href="#service1">Formal Science</a>
              <div className=" SubService6">
                <a href="#">Do My Statistics Homework Help</a>
                <a href="#">Do My Calculus Homework Help</a>
                <a href="#">Macroeconomics Assignment Help</a>
                <a href="#">Precalculus Homework Help</a>
                <a href="#">Calculus Homework Help</a>

              </div>
            </div>
            <div className="service service7">
              <a href="#service1">Natural Sciences</a>
              <div className=" SubService7">
                <a href="#">Chemistry Assignment Help</a>
                <a href="#">Chemistry Assignment Help</a>
                <a href="#">Physics Assignment Help</a>

              </div>
            </div>
            <div className="service service8">
              <a href="#service1">Social Sciences</a>
              <div className=" SubService8">
                <a href="#">Public Relations Assignment Help</a>
                <a href="#">Communication Assignment Help</a>
                <a href="#">Social Work Assignment Help </a>
                <a href="#">Psychology Assignment Help</a>
                <a href="#">Religion Assignment Help</a>
                <a href="#">Political Assignment Help</a>
                <a href="#">Sociology Assignment Help </a>
                <a href="#">HRM Assignment Help</a>
              </div>
            </div>
            <div className="service service9">
              <a href="#service1">Humanities</a>
              <div className=" SubService9">
                <a href="#">English Assignment Help</a>
                <a href="#">Philosophy Assignment Help</a>
                <a href="#">Literature Assignment Help </a>
                <a href="#">History Assignment Help</a>
                <a href="#">Geography Assignment Help</a>
              </div>
            </div> */}

          </div>
        </div>
        <Link className='aLink' to="blog">Blog</Link>
      </div>

      <div className="navRight">
        <a href="https://myperfectwriting.co.uk/portal/public/login">
          <button class="NavOrderbtn pulse-button">Order Now</button>
        </a>
        <div className="profileIcon">
          <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0001 9.3099C22.9684 9.30934 19.9896 10.104 17.3609 11.6144C14.7323 13.1249 12.5459 15.2984 11.0198 17.918C9.49367 20.5375 8.68134 23.5116 8.66384 26.5432C8.64635 29.5748 9.4243 32.558 10.9201 35.1951C11.9311 33.8811 13.2307 32.8173 14.7184 32.0859C16.2062 31.3544 17.8422 30.9748 19.5001 30.9766H32.5001C34.1579 30.9748 35.794 31.3544 37.2817 32.0859C38.7695 32.8173 40.0691 33.8811 41.0801 35.1951C42.5758 32.558 43.3538 29.5748 43.3363 26.5432C43.3188 23.5116 42.5065 20.5375 40.9804 17.918C39.4543 15.2984 37.2678 13.1249 34.6392 11.6144C32.0106 10.104 29.0318 9.30934 26.0001 9.3099ZM43.2099 39.8079C46.1068 36.0313 47.6737 31.4029 47.6667 26.6432C47.6667 14.6767 37.9666 4.97656 26.0001 4.97656C14.0336 4.97656 4.3334 14.6767 4.3334 26.6432C4.32625 31.4029 5.89319 36.0314 8.79023 39.8079L8.7794 39.8469L9.54856 40.7417C11.5806 43.1175 14.1037 45.0244 16.9439 46.3309C19.7841 47.6375 22.8738 48.3127 26.0001 48.3099C30.3926 48.318 34.6828 46.9837 38.2959 44.4857C39.8362 43.4215 41.233 42.1631 42.4516 40.7417L43.2207 39.8469L43.2099 39.8079ZM26.0001 13.6432C24.2762 13.6432 22.6229 14.328 21.4039 15.547C20.1849 16.766 19.5001 18.4193 19.5001 20.1432C19.5001 21.8671 20.1849 23.5204 21.4039 24.7394C22.6229 25.9584 24.2762 26.6432 26.0001 26.6432C27.724 26.6432 29.3773 25.9584 30.5963 24.7394C31.8152 23.5204 32.5001 21.8671 32.5001 20.1432C32.5001 18.4193 31.8152 16.766 30.5963 15.547C29.3773 14.328 27.724 13.6432 26.0001 13.6432Z" fill="#A2C515" />
          </svg>
          <div className="hamburgerDropdown">
            <a href="https://myperfectwriting.co.uk/portal/public/login">LogIn</a>
            <a href="https://myperfectwriting.co.uk/portal/public/register">SignUp</a>
          </div>

        </div>
        <RxHamburgerMenu onClick={toggleNav} className='hamburgur' style={{ color: "white", fontSize: "50px" }} />
      </div>

    </div>

  )
}

export default Navbar;
