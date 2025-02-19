import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import ProjectsPage from './pages/ProjectsPage';
import Projects from './Projects';
import MyServices from './MyServices';
import Footer from './Footer';

function MainLayout() {
    return (
      <div className="min-h-screen bg-white">
        <Hero />
        <MyServices />
        <Projects />
      </div>
    );
  }
  
  function App() {
    return (
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
  
  export default App;