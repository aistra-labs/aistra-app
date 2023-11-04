import React, { useRef, Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer'
import Header from './components/header';

const Default = lazy(() => import('./pages/default'));
const PrivacyPolicy = lazy(() => import('./components/privacyPolicy'));

function App() {
  const refHome = useRef();
  const refAbout = useRef();
  const refProduct = useRef();
  const refTeam = useRef();
  const refCareers = useRef();

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Header refHome={refHome} refAbout={refAbout} refProduct={refProduct} refTeam={refTeam} refCareers={refCareers} />
          <Routes>
            <Route path="/" element={
              <Default refHome={refHome} refAbout={refAbout} refProduct={refProduct} refTeam={refTeam} refCareers={refCareers} />
            } />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          </Routes>
          <Footer refAbout={refAbout} refTeam={refTeam} refCareers={refCareers} />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
