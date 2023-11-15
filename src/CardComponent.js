
import React from 'react';

const CardComponent = ({ logo, heading, paragraph, buttonText, buttonClass }) => {
  return (
    <div className="card">
      <div dangerouslySetInnerHTML={{ __html: logo }} />
      <h2>{heading}</h2>
      <p>{paragraph}</p>
      <button className={buttonClass}>{buttonText}</button>
    </div>
  );
};

export default CardComponent;
