import React from 'react';
import About from '../about';
import Home from '../home';
import Products from '../products';
import Team from '../team';
import Careers from '../careers';

function LandingPage({ refHome, refAbout, refProduct, refTeam, refCareers }) {

    return (
        <div className="App">
            <Home refs={refHome} />
            <About refs={refAbout} />
            <Products refs={refProduct} />
            <Team refs={refTeam} />
            <Careers refs={refCareers} />
        </div>
    );
}

export default LandingPage;
