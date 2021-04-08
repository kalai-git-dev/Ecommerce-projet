import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Offer() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [showEmail, setShowEmail] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/offer/" + id);
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>en cours de chargement....</p>
  ) : (
    <div>
      <div>
        <img src={data.image.secure_url} alt={data.title} />
      </div>
      <div>
        <h2>
          {data.title} / <span>{data.sexe}</span>
        </h2>
        <h4>{data.price} €</h4>
        <p>Description : {data.description}</p>

        {data.details.map((item, index) => {
          const keys = Object.keys(item);

          return (
            <div key={index}>
              <li>
                {keys[0]} : {item[keys[0]]}
              </li>
            </div>
          );
        })}
        <hr />
        <div>
          <h2>Vendeur</h2>
          <p>avatar {data.owner.firstName}</p>
          {!showEmail ? (
            <button
              onClick={() => {
                setShowEmail(true);
              }}
            >
              Voir Email Vendeur
            </button>
          ) : (
            <p>{data.owner.email}</p>
          )}
        </div>
        <button>Achéter</button>
      </div>
    </div>
  );
}

export default Offer;
