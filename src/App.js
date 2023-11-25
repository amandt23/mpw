import './App.css';
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

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <MyTeam />
      <Price />
      <Faqs />
      <OnlineAcademic />
      <Social />
      <Review />
      <PlaceOrder />
      <MyWriting />
      <Footer />
    </>
  );
}

export default App;
