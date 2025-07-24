// src/pages/ViewWorkers.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
 import API_BASE from "../utils/api";


const ViewWorkers = () => {
  const { service } = useParams();
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

// ...

fetch(`${API_BASE}/workers/${service}`)

      .then((res) => res.json())
      .then((data) => {
        setWorkers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setWorkers([]);
        setLoading(false);
      });
  }, [service]);

  return (
    <div className="view-workers-page">
      <h2>Available {decodeURIComponent(service)} Workers</h2>
      {loading ? (
        <p>Loading...</p>
      ) : workers.length > 0 ? (
        <div className="worker-grid">
          {workers.map((worker) => (
            <div key={worker.id} className="worker-card">
              <img src={worker.image_url} alt={worker.name} />
              <h3>{worker.name}</h3>
              <p>{worker.description}</p>
              <a href={`tel:${worker.contact}`} className="contact-btn">
                Contact
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p>No workers found for this service.</p>
      )}
    </div>
  );
};

export default ViewWorkers;
