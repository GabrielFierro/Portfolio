import { lazy, Suspense } from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
const AboutMe = lazy(() => import('./components/about/AboutMe'));
const Project = lazy(() => import('./components/projects/Project'));
const ContactMe = lazy(() => import('./components/contact/ContactMe'));
const Footer = lazy(() => import('./components/footer/Footer'));

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Suspense fallback={<div></div>}>
        <AboutMe />
        <Project />
        <ContactMe />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
