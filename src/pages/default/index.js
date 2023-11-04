import React from 'react';
import About from '../about';
import Home from '../home';
import Products from '../products';
import Team from '../team';
import Careers from '../careers';

function LandingPage() {

    return (
        <div className="App">
            <Home />
            <About />
            <Products />
            <Team />
            <Careers />
        </div>
    );
}

export default LandingPage;
