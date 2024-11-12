import "./App.css";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage"
import { BlogPage } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";
import { AboutPage } from "./pages/AboutPage";
import { AwardsPage } from "./pages/AwardsPage"; 
import Video from "./components/Video"
import { ToDoPage } from "./pages/ToDoPage";

function App() {
  return (
    <>
    <BrowserRouter>
    <Video/>
    <Routes>
       <Route path="/" element={<HomePage />}/>
       <Route path="/AboutPage" element={<AboutPage />}/>
       <Route path="/ProjectsPage" element={<ProjectsPage />}/>
       <Route path="/BlogPage" element={<BlogPage />}/>
       <Route path="/AwardsPage" element={<AwardsPage />}/>
       <Route path="/ContactPage" element={<ContactPage />}/>
       <Route path="/ToDoPage" element={<ToDoPage />}/>
    </Routes>
    
    </BrowserRouter>
    </>
  );
}


export default App;
