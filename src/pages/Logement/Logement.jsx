import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Carrousel from '../../components/Logement/Carrousel';
import StarRating from '../../components/Logement/StarRating';
import Tags from '../../components/Logement/Tags';
import Collapse from '../../components/Shared/Collapse';
import logementsData from '../../data/logerments.json';
import './Logement.css';

const Logement = () => {
  const { id } = useParams();
  const logement = logementsData.find((item) => item.id === id);

  // Redirection simple si le logement n'est pas trouvé
  if (!logement) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <div className="logement">
      <Carrousel images={logement.pictures} />
      <div className="logement-header">
        <div className="logement-info">
          <h2 className="logement-title">{logement.title}</h2>
          <p className="logement-location">{logement.location}</p>
          <Tags tags={logement.tags} />
        </div>
        <div className="logement-host">
          <div className="host-name">
            {logement.host.name}
            <img
              className="host-picture"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>
          <StarRating rating={parseInt(logement.rating, 10)} />
        </div>
      </div>
      <div className="logement-collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((equip) => (
                <li key={equip}>{equip}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default Logement;
