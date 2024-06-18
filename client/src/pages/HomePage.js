
import Inhalt from './Inhalt';
import React from 'react';
import './HomePage.css'; 
function HomePage() {
    return (
        <>
        <div className="App">
              <li className="dropdown">
                        <li> Sprache ▼</li>
                        <div className="dropdown-content">
                            <a href="En">English</a>
                            <a href="De">Deutsch</a>
                            <a href="Es">Español</a>
                            <a href="Da">Dansk</a>
                        </div>
                    </li>
           
            <h1 className="title">TechKnowledgeBase</h1>
            <div >
               
                    <li className="dropdown">
                        <li>Meine Noten ▼</li>
                        <div className="dropdown-content">
                            <a href="S">Starseite</a>
                            <a href="MN">Meine Noten</a>
                            <a href="Le">Letzter Eintrag</a>
                            <a href="Su">Suche</a>
                        </div>
                    </li>
               
            </div>
        </div>
        <Inhalt/>
        </>
    );
}

export default HomePage;
