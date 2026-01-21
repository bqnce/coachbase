
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <Hero />
        <Problem />
        <Solution />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
