import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import AboutMe from './components/about/AboutMe';
import Project from './components/projects/Project';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Project />
    </>
  );
}

export default App;
