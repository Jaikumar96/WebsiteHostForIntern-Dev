import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Internships from './pages/Internships';
import InternshipProjectList from './pages/InternshipProjectList';
import WebDevelopment from './pages/domains/WebDevelopment';
import AndroidDevelopment from './pages/domains/AndroidDevelopment';
import DataScience from './pages/domains/DataScience';
import JavaProgramming from './pages/domains/JavaProgramming';
import CppProgramming from './pages/domains/CppProgramming';
import PythonProgramming from './pages/domains/PythonProgramming';
import ArtificialIntelligence from './pages/domains/ArtificialIntelligence';
import MachineLearning from './pages/domains/MachineLearning';
import UIUXDesign from './pages/domains/UIUXDesign';
import FlutterDevelopment from './pages/domains/FlutterDevelopment';
import ReactJSDevelopment from './pages/domains/ReactJSDevelopment';
import JavaScriptDevelopment from './pages/domains/JavaScriptDevelopment';
import DevOps from './pages/domains/DevOps';
import DigitalMarketing from './pages/domains/DigitalMarketing';
import EmbeddedSystems from './pages/domains/EmbeddedSystems';
import CertificateVerification from './components/CertificateVerification';




function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/internship-project-list" element={<InternshipProjectList />} />
          <Route path="/internships/web-development" element={<WebDevelopment />} />
          <Route path="/internships/android-development" element={<AndroidDevelopment />} />
          <Route path="/internships/data-science" element={<DataScience />} />
          <Route path="/internships/java-programming" element={<JavaProgramming />} />
          <Route path="/internships/cpp-programming" element={<CppProgramming />} />
          <Route path="/internships/python-programming" element={<PythonProgramming />} />
          <Route path="/internships/artificial-intelligence" element={<ArtificialIntelligence />} />
          <Route path="/internships/machine-learning" element={<MachineLearning />} />
          <Route path="/internships/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/internships/flutter-development" element={<FlutterDevelopment />} />
          <Route path="/internships/reactjs-development" element={<ReactJSDevelopment />} />
          <Route path="/internships/javascript-development" element={<JavaScriptDevelopment />} />
          <Route path="/internships/devops" element={<DevOps />} />
          <Route path="/internships/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/internships/embedded-systems" element={<EmbeddedSystems />} />
          // Add this route in your Routes section
          <Route path="/verify-certificate" element={<CertificateVerification />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;