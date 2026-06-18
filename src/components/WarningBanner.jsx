import React from 'react';

function WarningBanner() {
  return (
    <div className="warning-banner">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--warning-text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
          <path d="M12 9v4"></path>
          <path d="M12 17h.01"></path>
        </svg>
      </div>
      <div>
        <p><strong>Avertissement :</strong> Les protocoles ci-dessous constituent une base de travail et d'apprentissage pour les nouveaux arrivants.</p>
        <p>La règle d'or du Pôle Médical est l'adaptabilité : vous devez impérativement ajuster ces soins en fonction de l'état global du patient, de son métabolisme et de son type d'énergie occulte.</p>
      </div>
    </div>
  );
}

export default WarningBanner;
