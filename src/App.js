import React from 'react';
import './App.css';
import Menu from './components/Menu'
import FirstSection from './components/FirstSection'
import SecondSection from './components/SecondSection'
import ThirdSection from './components/ThirdSection'
import FourthSection from './components/FourthSection'
import FifthSection from './components/FifthSection'
import SixthSection from './components/SixthSection'
import SeventhSection from './components/SeventhSection'
import Parallax from './components/Parallax'
import Carrousel from './components/Carrousel'




function App() {
  return (
    <div className="App">
      
    <Menu />
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <FifthSection />
    <SixthSection />
    <SeventhSection />
    <Parallax />
    <Carrousel />
        
    </div>
  );
}

export default App;
