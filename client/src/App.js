import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './router/Home';
import About from './router/About';
import RedirectToHome from './router/RedirectToHome';

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<RedirectToHome />} />
      </Routes>
    </div>
  );
  }
  
  // <Route path="*" element={<RedirectToHome />} />


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

// Comment:: haha