import React from "react";
import Chaussure from "../assets/chaussures.jpeg";
import Plombier from "../assets/Plombier.jpeg";
import Vetements from "../assets/vetements.jpeg";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Caroussel() {
  return (
    <Carousel fade indicators>
      <Carousel.Item>
        <img
          style={{ height: 600 }}
          className="image_carousel"
          src={Chaussure}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Chaussures</h3>
          <p>
            Consultez et déposez vos petites annonces gratuites d'achat et de
            vente d'occasion dans la categorie chaussure.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: 600 }}
          className="image_carousel"
          src={Plombier}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Services</h3>
          <p>Proposez les services et Trouvez des emplois</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: 600 }}
          className="image_carousel"
          src={Vetements}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Vêtements</h3>
          <p>
            Vêtements occasion France. Des milliers de petites annonces près de
            chez vous
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Caroussel;
