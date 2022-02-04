import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

// import Project from "./components/Project";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';


function App() {

  const [contactSelected, setContactSelected] = useState(false);
  // const [porfolioSelected, setPortfolioSelected] = useState(false);


  return (
    <div className="App">
      <Header />
      <main>
        {!contactSelected ? (
          <>
          <About />
          </>
        ) : (
          <ContactForm />
        )}


       <Portfolio />
      
      
      
      
      
      
      
      </main>
      <Footer />
    </div> 
  );
}

export default App;
