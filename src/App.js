import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import TermsAndCondition from './pages/TermAndConditions/TermsAndCondition';
import RefundPolicy from './pages/RefundPolicy/RefundPolicy';
import CookiePolicy from './pages/CookiePolicy/CookiePolicy';
import AcademicIntegrity from './pages/AcademicIntegrity/AcademicIntegrity';
import Home from './pages/home/Home';
import Blog from './pages/Blogs/Blog';
import AboutUs from './pages/AboutUs/AboutUs';
import SingleBlog from './pages/Blogs/SingleBlog/SingleBlog';
import WhyUs from './pages/WhyUs/WhyUs';
import Privacy from './pages/PrivacyPolicy/Privacy';
import ContactUs from './components/ContactUs/ContactUs';
import Faqs from './pages/FAQs/Faqs';

function App() {
  return (
    <>
      <Router >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/cookies-policy" element={<CookiePolicy />} />
          <Route path="/academic-integrity" element={<AcademicIntegrity />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:title" element={<SingleBlog />} />
          {/* <Route path="/singl-blog" element={<SingleBlog />} /> */}
          <Route path="/about-our-service" element={<AboutUs />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* <Route path="/faqs" element={<Faqs />} /> */}
          
        </Routes>
        <Footer />
        {/* <SingleBlog /> */}
      </Router>


    </>
  );
}

export default App;
