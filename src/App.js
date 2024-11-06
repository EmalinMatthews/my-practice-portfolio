import "./App.css";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Blog from "./components/Blog";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Video from "./components/Video"
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage"
import { BlogPage } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";
import { AboutPage } from "./pages/AboutPage";


function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/AboutPage" element={<AboutPage />}/>
      <Route path="/ProjectsPage" element={<ProjectsPage />}/>
       <Route path="/BlogPage" element={<BlogPage />}/>
      <Route path="/ContactPage" element={<ContactPage />}/>
     
  {/* <Header /> 
      <Video />
      <Hero />
      <About />
       <Projects />
      <Blog />
      <Contact />
      <Footer /> */}
     


    </Routes>
    
    </BrowserRouter>
    </>
  );
}


export default App;
