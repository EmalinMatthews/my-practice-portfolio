import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { BlogPage } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";
import { AboutPage } from "./pages/AboutPage";
// import { AwardsPage } from "./pages/AwardsPage";
import { ToDoPage } from "./pages/ToDoPage";
import { LibraryPage } from "./pages/LibraryPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/ProjectsPage" element={<ProjectsPage />} />
          <Route path="/BlogPage" element={<BlogPage />} />
          {/* <Route path="/AwardsPage" element={<AwardsPage />}/> */}
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/ToDoPage" element={<ToDoPage />} />
          <Route path="/LibraryPage" element={<LibraryPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
