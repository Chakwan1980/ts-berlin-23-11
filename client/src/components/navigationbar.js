// Die Komponenten, welche von dem Paket react-router-dom kommen
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../page/HomePage";

function App() {
  return (
    <BrowserRouter>
      {/* Umfasst die gesamte App, damit alle untergeordneten Komponenten Zugriff auf das Routing Paket haben */}
      
        <Routes>
          {/* Innerhalb der Routes befinden sich die einzelnen Routen bzw Seiten*/}
          <Route path="/" element={<HomePage/>} />
        </Routes>
    
    </BrowserRouter>
  );
}

export default App ();