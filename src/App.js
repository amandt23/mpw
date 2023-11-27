import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyTeam from './components/CardCrousel/MyTeam';
import MyWriting from './components/MyPerfectWritting/MyWriting';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Social from './components/Social/Social';
import Header from './components/Header/Header';
import Faqs from './components/FAQS/Faqs';
import OnlineAcademic from './components/onlineAcademic/OnlineAcademic';
import Navbar from './components/Navbar/Navbar';
import Price from './components/Price/Price';
import Review from './components/Reviews/Review';
import Footer from './components/Footer/Footer';
import MidSection from './components/MidSection/MidSection';
import TermsAndCondition from './pages/TermAndConditions/TermsAndCondition';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Router >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/termsAndConditions" element={<TermsAndCondition />} />
        </Routes>
        <Footer />
      </Router>


    </>
  );
}

export default App;
