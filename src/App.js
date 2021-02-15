import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Tours from './components/Tours/Tours';
import Hotels from './components/Hotels/Hotels';
import About from './components/About/About';
import Signup from './components/Signup/Signup';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import 'antd/dist/antd.css';

function App() {
  let listener = null
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    listener = document.addEventListener("scroll", e => {  
      var scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 120) {
        if (visible) {
          setVisible(false)
        }
      } else {
        if (!visible) {
          setVisible(true)
        }
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [visible])

  return (
    <div>
      <Header visible={visible}/>
      <Tours />
      <Hotels />
      <About />
      <Signup />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
