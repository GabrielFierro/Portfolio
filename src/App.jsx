import { lazy, Suspense } from 'react';
import './App.css';
const Navbar = lazy(() => import('./components/navbar/Navbar'));
const Header = lazy(() => import('./components/header/Header'));
const AboutMe = lazy(() => import('./components/about/AboutMe'));
const Project = lazy(() => import('./components/projects/Project'));
const ContactMe = lazy(() => import('./components/contact/ContactMe'));
const Footer = lazy(() => import('./components/footer/Footer'));

function App() {
  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <Navbar />
        <Header />
        <AboutMe />
        <Project />
        <ContactMe />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
