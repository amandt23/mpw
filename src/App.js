import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import TermsAndCondition from "./pages/TermAndConditions/TermsAndCondition";
import RefundPolicy from "./pages/RefundPolicy/RefundPolicy";
import CookiePolicy from "./pages/CookiePolicy/CookiePolicy";
import AcademicIntegrity from "./pages/AcademicIntegrity/AcademicIntegrity";
import Home from "./pages/home/Home";
import Blog from "./pages/Blogs/Blog";
// import AboutUs from "./pages/AboutUs/AboutUs";
import SingleBlog from "./pages/Blogs/SingleBlog/SingleBlog";
import WhyUs from "./pages/WhyUs/WhyUs";
import Privacy from "./pages/PrivacyPolicy/Privacy";
import ContactUs from "./components/ContactUs/ContactUs";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
// services pages
import PeerResponse from "./pages/Services/PeerResponse";
import AnnotatedBibliography from "./pages/Services/AnnotatedBibliography ";
import Academicessays from "./pages/Services/Academicessays";
import LiteratureReview from "./pages/Services/LiteratureReview ";
import ResearchPapers from "./pages/Services/ResearchPapers";
import ThesisWriting from "./pages/Services/ThesisWriting";
import DissertationWriting from "./pages/Services/DissertationWriting ";
import CVWriting from "./pages/Services/CVWriting";
import ResumeWriting from "./pages/Services/ResumeWriting";
import ProofreadingService from "./pages/Services/ProofreadingService";
import EditingFormatting from "./pages/Services/EditingFormatting ";

import EnglishAssignment from "./pages/Services/EnglishAssignment";
import PhilosphyAssignment from "./pages/Services/PhilosphyAssignment";
import LiteratureAssignment from "./pages/Services/LiteratureAssignment";
import HistoryAssignment from "./pages/Services/HistoryAssignment";
import GeographyAssignment from "./pages/Services/GeographyAssignment";
import DissertionAssignment from "./pages/Services/DissertionAssignment";
import ScrollToTop from "./components/ScrollToTop";
import SociologyAssignmentHelp from "./pages/Services/SociologyAssignmentHelp";
import PublicRelationsAssignmentHelp from "./pages/Services/PublicRelationsAssignmentHelp";
import SocialWorkAssignmentHelp from "./pages/Services/SocialWorkAssignmentHelp";
import ReligionAssignmentHelpinUK from "./pages/Services/ReligionAssignmentHelpinUK";
import PsychologyAssignmentHelp from "./pages/Services/PsychologyAssignmentHelp";
import PoliticalAssignmentHelp from "./pages/Services/PoliticalAssignmentHelp";
import HRMAssignmentHelp from "./pages/Services/HRMAssignmentHelp";
import NursingAssignmentHelpinUK from "./pages/Services/NursingAssignmentHelpinUK";
import CriminalJusticeAssignmentHelp from "./pages/Services/CriminalJusticeAssignmentHelp";
import NutritionAssignmentHelp from "./pages/Services/NutritionAssignmentHelp";
import DiscussionPostpage from "./pages/Services/DiscussionPostpage";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
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
          {/* <Route path="/about-our-service" element={<AboutUs />} /> */}
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<PageNotFound />} />

          {/* Services pages  */}
  
          <Route path="/peer-responses-service" element={<PeerResponse />} />
          <Route
            path="/annotated-bibliography-service"
            element={<AnnotatedBibliography />}
          />
          <Route path="/academic-essays-service" element={<Academicessays />} />
          <Route
            path="/literature-review-service"
            element={<LiteratureReview />}
          />
          <Route path="/research-papers-service" element={<ResearchPapers />} />
          <Route path="/thesis-writing-service" element={<ThesisWriting />} />
          <Route
            path="/dissertation-writing-service"
            element={<DissertationWriting />}
          />
          <Route path="/cv-writing-service" element={<CVWriting />} />
          <Route path="/resume-writing-service" element={<ResumeWriting />} />
          <Route
            path="/proofreading-service"
            element={<ProofreadingService />}
          />
          <Route
            path="/editing-formatting-service"
            element={<EditingFormatting />}
          />

          <Route
            path="/english-assignment-help"
            element={<EnglishAssignment />}
          />
          <Route
            path="/philosphy-assignment-help"
            element={<PhilosphyAssignment />}
          />
          <Route
            path="/literature-assignment-help"
            element={<LiteratureAssignment />}
          />
          <Route
            path="/history-assignment-help"
            element={<HistoryAssignment />}
          />
          <Route
            path="/geography-assignment-help"
            element={<GeographyAssignment />}
          />
          <Route
            path="/dissertation-assignment-help"
            element={<DissertionAssignment />}
          />
          <Route
            path="/sociology-assignment-help"
            element={<SociologyAssignmentHelp />}
          />
           <Route
            path="/public-relations-assignment-help"
            element={<PublicRelationsAssignmentHelp/>}
          />
          <Route
            path="/social-work-assignment-help"
            element={<SocialWorkAssignmentHelp/>}
          />
           <Route
            path="/religion-assignment-help-in-uk"
            element={<ReligionAssignmentHelpinUK/>}
          />
          <Route
            path="/psychology-assignment-help"
            element={<PsychologyAssignmentHelp/>}
          />
          <Route
            path="/political-assignment-help"
            element={<PoliticalAssignmentHelp/>}
          />
          <Route
            path="/hrm-assignment-help"
            element={<HRMAssignmentHelp/>}
          />
           <Route
            path="/nursing-assignment-help"
            element={<NursingAssignmentHelpinUK/>}
          />
           <Route
            path="/criminal-justice-assignment-help"
            element={<CriminalJusticeAssignmentHelp/>}
          />
          <Route
            path="/nutrition-assignment-help"
            element={<NutritionAssignmentHelp/>}
          />
          <Route
            path="/discussion-post-page"
            element={<DiscussionPostpage/>}
          />
          
          
          
        </Routes>
        <Footer />
        {/* <SingleBlog /> */}
      </Router>
    </>
  );
}

export default App;
