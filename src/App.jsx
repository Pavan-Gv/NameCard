import React from 'react';
import StudentCard from './components/StudentCard.jsx';
import './App.css';
import ReactLogo from './assets/eye.svg';


function App() {
  return (
    <div className="App">
      <StudentCard 
        name="Palamakula Deepikaa" 
        registrationNumber="212221240035"
        photo={ReactLogo}
      />
    </div>
  );
}

export default App;
