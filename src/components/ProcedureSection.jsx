import React from 'react';

function ProcedureSection({ id, title, description, steps }) {
  return (
    <section id={id} className="procedure-section">
      <h2>{title}</h2>
      <p className="description">{description}</p>
      
      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="step-number">{index + 1}</div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProcedureSection;
