import React from 'react';
import Sidebar from './components/Sidebar';
import WarningBanner from './components/WarningBanner';
import ProcedureSection from './components/ProcedureSection';

function App() {
  const procedures = [
    {
      id: 'petites-plaies',
      title: 'Petites Plaies',
      description: 'Blessures superficielles, coupures ou égratignures mineures souvent rencontrées lors d\'entraînements ou d\'escarmouches légères.',
      steps: [
        { title: 'Prise de constantes', description: 'Vérifier le pouls, la tension et la respiration. Évaluer s\'il y a une trace d\'énergie occulte résiduelle.' },
        { title: 'Désinfection', description: 'Nettoyer la plaie au sérum physiologique puis appliquer un antiseptique adapté. Ne jamais frotter brutalement.' },
        { title: 'Bandage', description: 'Protéger la plaie avec un pansement stérile ou un bandage léger pour éviter toute surinfection.' }
      ]
    },
    {
      id: 'grosses-plaies',
      title: 'Grosses Plaies',
      description: 'Déchirures profondes, plaies ouvertes ou lacérations causées par des fléaux de classe 2 ou supérieure. Le risque d\'infection occulte est élevé.',
      steps: [
        { title: 'Prise de constantes critiques', description: 'Surveillance rapprochée : risque de choc hémorragique. Mesurer la stabilité de l\'énergie occulte du patient.' },
        { title: 'Sutures et Strips', description: 'Rapprocher les berges de la plaie. Utiliser des points de suture pour les tissus profonds, ou des strips pour refermer proprement la couche supérieure.' },
        { title: 'Désinfection profonde', description: 'Nettoyage chirurgical. Il est impératif d\'évincer tout tissu nécrosé ou corrompu par l\'énergie d\'un fléau avant de refermer.' },
        { title: 'Bandages lourds', description: 'Application de pansements compressifs si le saignement persiste. Immobilisation complète de la zone touchée.' }
      ]
    },
    {
      id: 'amputations',
      title: 'Amputations',
      description: 'Sectionnement total ou partiel d\'un membre lors d\'un combat extrêmement violent (Fléaux de classe 1 ou classe S).',
      steps: [
        { title: 'Sécurisation immédiate', description: 'Pose immédiate d\'un garrot de fortune ou médicalisé au-dessus de la section pour stopper l\'hémorragie massive.' },
        { title: 'Préservation du membre', description: 'Si possible, récupérer le membre sectionné. Le placer au froid (sans contact direct avec la glace) et tenter de stabiliser son flux occulte pour éviter une nécrose astrale.' },
        { title: 'Traitement de la souche', description: 'Nettoyage rapide, pansement compressif très épais. Gestion de la douleur extrême via antalgiques ou sédation occulte.' },
        { title: 'Régénération (Inversion de Sort)', description: 'Si le médecin maîtrise l\'Inversion de Sort (Sort d\'Inversion), application directe sur la souche et le membre pour reconnecter les nerfs et le réseau occulte. Doit être fait dans un délai très court.' }
      ]
    },
    {
      id: 'empoisonnements',
      title: 'Empoisonnements',
      description: 'Introduction de toxines physiques ou de venins maudits dans l\'organisme du patient.',
      steps: [
        { title: 'Identification du poison', description: 'Déterminer rapidement la nature du poison : origine naturelle, arme maudite, ou technique innée d\'un fléau.' },
        { title: 'Neutralisation', description: 'Purge via l\'Inversion de Sort si disponible. Sinon, administration immédiate d\'un antidote à large spectre en attendant une analyse plus fine.' },
        { title: 'Mise en observation', description: 'Les poisons occultes peuvent se dissimuler dans le flux d\'énergie. Maintien en observation pendant 48h minimum avec monitoring des constantes.' }
      ]
    },
    {
      id: 'noyau-occulte',
      title: 'Perturbation du Noyau d\'Énergie Occulte',
      description: 'Surcharge, épuisement ou dérèglement grave du flux d\'énergie occulte (ex: usage excessif du Rayonnement Noir ou Extension du Territoire ratée).',
      steps: [
        { title: 'Isolement total', description: 'Placer le patient dans une chambre d\'isolement scellée par des talismans pour prévenir toute explosion d\'énergie incontrôlée.' },
        { title: 'Sédation et apaisement', description: 'Forcer le repos du corps par sédation médicale pour ralentir le métabolisme et forcer le noyau occulte à se calmer.' },
        { title: 'Alignement des flux', description: 'Un médecin expérimenté doit perfuser doucement sa propre énergie apaisante pour aider le noyau du patient à se recalibrer.' }
      ]
    }
  ];

  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <header className="page-header">
          <h1>Guide Médical des Urgences</h1>
          <p>École d'Exorcisme de Tokyo - Protocoles d'intervention de première ligne.</p>
        </header>
        
        <WarningBanner />

        {procedures.map(proc => (
          <ProcedureSection 
            key={proc.id}
            id={proc.id}
            title={proc.title}
            description={proc.description}
            steps={proc.steps}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
