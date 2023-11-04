import React from "react";
import "./termsCondition.css";
import { data } from './data';
function TermsCondition() {
  return (
    <div className="privacy-container">
      <h1>Terms and Conditions for Aistra</h1>
      <p>Last updated: September 21st, 2023</p>
      {data.map(el => {
        return (
          <>
            <h2>{el?.['title']}</h2>
            <br />
            <div dangerouslySetInnerHTML={{ __html: el?.['content'] }} />
          </>
        );
      })}
    </div>
  );
}

export default TermsCondition;
