import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useState} from 'react'

import Saudacao from './Components/Saudacao'
import SeuNome from './Components/SeuNome'
import NavBar from "./Components/layout/NavBar";
import Footer from "./Components/layout/Footer";
import Home from "./Pages/Home";
import Empresa from "./Pages/Empresa";
import Contato from "./Pages/Contato";

import "./App.css";

function App() {

  const [nome , setNome] = useState() ;

  return (
    <Router>
      <NavBar/>

      <SeuNome setNome = {setNome}/>
      <Saudacao nome={nome}/>

      <Routes>
        <Route exact path="/" element = {<Home />} />
        <Route exact path="/empresa" element = {<Empresa/>} />
        <Route exact path="/contato" element = {<Contato />} />
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
