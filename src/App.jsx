import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import AboutMe from './components/about/AboutMe';
import Project from './components/projects/Project';
import ContactMe from './components/contact/ContactMe';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Project />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
