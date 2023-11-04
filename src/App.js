import React, { Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer'
import Header from './components/header';
import ScrollToAnchor from './scrollToAnchor';
import TermsCondition from './components/termsCondition';

const Default = lazy(() => import('./pages/default'));
const PrivacyPolicy = lazy(() => import('./components/privacyPolicy'));

function App() {

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Routes>
            <Route path="/" element={<Default />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/termsandcondition" element={<TermsCondition />} />
          </Routes>
          <Footer />
        </Suspense>
        <ScrollToAnchor />
      </Router>
    </div>
  );
}

export default App;
