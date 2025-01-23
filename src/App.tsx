import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import MyServices from './MyServices';
import Footer from './Footer';

function MainLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <MyServices />
      <Projects />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

export default App;