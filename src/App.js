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

function App() {
  return (
    <>
      <Router >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/termsAndConditions" element={<TermsAndCondition />} />
          <Route path="/refundpolicy" element={<RefundPolicy />} />
          <Route path="/cookiepolicy" element={<CookiePolicy />} />
          <Route path="/academicintegrity" element={<AcademicIntegrity />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/singl-blog" element={<SingleBlog />} /> */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
        {/* <SingleBlog /> */}
      </Router>


    </>
  );
}

export default App;
