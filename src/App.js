import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';


import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';



function App() {

  const [category, setCategorySelected] = useState("About-Me");



  return (
    <div className="App">
      <Header setCategorySelected={setCategorySelected} />
      <main className='main'>

        {category === "ContactForm" && (
          <>
            <ContactForm />
          </>
        )}
        {category === "Portfolio" && (
          <>
            <Portfolio />
          </>
        )}
        {category === "About-Me" && (
          <>
            <About />
          </>
        )}
        {category === "Resume" && (
          <>
            <Resume />
          </>
        )}

        <Footer />
      </main>

    </div>
  );
}

export default App;
