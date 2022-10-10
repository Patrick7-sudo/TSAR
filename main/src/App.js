import logo from './logo.svg';
import './App.css';
import Splash from './splash';
import Calenderly from './calender';
import Assesment from './assesment';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/Assesment" element={<Assesment />} />
        <Route path="/book" element={<Calenderly />} />
      </Routes>
    </div>
  );
}

export default App;
