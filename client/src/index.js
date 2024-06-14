import React from 'react';
import ReactDOM from 'react-dom/client'; // was: react-dom/client
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';


function usePathname() {
  const location = useLocation();
  return location.pathname;
}

function BodyClassSetter() {
  const pathname = usePathname();

  const bodyClass = pathname === '/' ? 'home' : pathname.substr(1);
  document.body.className = bodyClass;

  return null; // Dies ist eine Hilfskomponente, die nichts rendert
}

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <BodyClassSetter /> {/* Setze die body-Klasse hier */}
      <App />
    </Router>
  </React.StrictMode>
);
// document.body.className = 'your-body-class';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//// reportWebVitals();
