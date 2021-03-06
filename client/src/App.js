import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Home from './pages/Home/Home/Home';
import About from './pages/About/About/About';
import Gallary from './pages/gallary/main';
import Appointment from './pages/Appointment/Appointment/Appointment';
import Pricing from './pages/Pricing/Pricing/Pricing';
import Team from './pages/Team/Team/Team';
import TeamDetails from './pages/TeamDetails/TeamDetails/TeamDetails';
import Faq from './pages/Faq/Faq/Faq';
import Services from './pages/Services/Services/Services';
import ServicesDetails from './pages/ServicesDetails/ServicesDetails/ServicesDetails';
import Demo from './pages/Demo/Demo/Demo'; 
import Fence from './pages/Fence/Fence/Fence';
import Remodel from './pages/Remodel/Remodel/Remodel';
import Drain from './pages/Drain/Drain/Drain';
import Landscape from './pages/Landscape/Landscape/Landscape';
import Lawn from './pages/Lawn/Lawn/Lawn';
import Retaining from './pages/Retaining/Retaining/Retaining';
import Projects from './pages/Projects/Projects/Projetcs';
import ProjectsDetails from './pages/ProjectsDetails/ProjectsDetails/ProjectsDetails';
import BlogsSidebar from './pages/BlogsSidebar/BlogsSidebar/BlogsSidebar';
import BlogDetails from './pages/BlogDetails/BlogDetails/BlogDetails';
import Contact from './pages/Contact/Contact/Contact';
import GalleryConcrete from './pages/gallery-concrete/gallery-concrete/gallery-concrete'
import GalleryDemo from './pages/gallery-demo/gallery-demo/gallery-demo'
import GalleryDrain from './pages/gallery-drain/gallery-drain/gallery-drain'
import GalleryFence from './pages/gallery-fencing/gallery-fencing/gallery-fencing'
import GalleryLandscaping from './pages/gallery-landscaping/gallery-landscaping/gallery-landscaping'
import GalleryLawn from './pages/gallery-lawn/gallery-lawn/gallery-lawn'
import GalleryRemodeling from './pages/gallery-remodeling/gallery-remodeling/gallery-remodeling'
import GalleryRetaining from './pages/gallery-retaining/gallery-retaining/gallery-retaining'
import { WOW } from 'wowjs';
import ScrollToTop from './components/ScrollToTop';
// import HomeTwo from './pages/HomeTwo/HomeTwo/HomeTwo';
import HomeThree from './pages/HomeThree/HomeThree/HomeThree';

const App = () => {
  // wow animation active
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeThree />} />
          {/* <Route path="/home" element={<Home />} /> */}
          {/* <Route path="/homeTwo" element={<HomeTwo />} /> */}
          <Route path="/homeThree" element={<HomeThree />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/team" element={<Team />} />
          <Route path="/teamDetails" element={<TeamDetails />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/services" element={<Services />} />
          <Route path="/concrete" element={<ServicesDetails />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/fence" element={<Fence />} />
          <Route path="/remodel" element={<Remodel />} />
          <Route path="/drain" element={<Drain />} />
          <Route path="/landscape" element={<Landscape />} />
          <Route path="/lawn" element={<Lawn />} />
          <Route path="/retaining" element={<Retaining />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projectsDetails" element={<ProjectsDetails />} />
          <Route path="/blogSidebar" element={<BlogsSidebar />} />
          <Route path="/blogDetails" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/gallery-concrete" element={<GalleryConcrete />} />
          <Route path="/gallery-demo" element={<GalleryDemo />} />
          <Route path="/gallery-drain" element={<GalleryDrain />} />
          <Route path="/gallery-fence" element={<GalleryFence />} />
          <Route path="/gallery-landscaping" element={<GalleryLandscaping />} />
          <Route path="/gallery-lawn" element={<GalleryLawn />} />
          <Route path="/gallery-remodeling" element={<GalleryRemodeling />} />
          <Route path="/gallery-retaining" element={<GalleryRetaining />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;