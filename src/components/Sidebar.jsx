import React from 'react';

function Sidebar() {
  const links = [
    { id: 'petites-plaies', label: 'Petites plaies' },
    { id: 'grosses-plaies', label: 'Grosses plaies' },
    { id: 'amputations', label: 'Amputations' },
    { id: 'empoisonnements', label: 'Empoisonnements' },
    { id: 'noyau-occulte', label: "Noyau d'énergie occulte" }
  ];

  return (
    <aside className="sidebar">
      <h1>⚕️ Pôle Médical - Tokyo</h1>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
