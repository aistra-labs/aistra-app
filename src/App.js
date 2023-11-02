import React, { useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import About from './pages/about';
import Home from './pages/home';
import Products from './pages/products';
import Header from './components/header';
import Team from './pages/team';
import Careers from './pages/careers';

function App() {
  const refHome = useRef();
  const refAbout = useRef();
  const refProduct = useRef();
  const refTeam = useRef();
  const refCareers = useRef();

  return (
    <div className="App">
      <Header refHome={refHome} refAbout={refAbout} refProduct={refProduct} refTeam={refTeam} refCareers={refCareers} />
      <Home refs={refHome} />
      <About refs={refAbout} />
      <Products refs={refProduct} />
      <Team refs={refTeam} />
      <Careers refs={refCareers} />
      <Footer refAbout={refAbout} refTeam={refTeam} refCareers={refCareers} />
    </div>
  );
}

export default App;
