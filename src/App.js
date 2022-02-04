import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

// import Project from "./components/Project";
import Header from "./components/Header";
// import About from "./components/About";
import Footer from "./components/Footer";
import ContactForm from './components/Contact';
// import Portfolio from './components/Portfolio';


function App() {
  return (
    <div className="App">
      <Header />
      <ContactForm />
      {/* <Portfolio /> */}
      {/* <About /> */}
      
      
      <Footer />
    </div> 
  );
}

export default App;
