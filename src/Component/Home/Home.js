import React from "react";
import Product from "../Product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_en_US_1x._CB412256579_.jpg"
        />

        <div className="home__row">
          <Product
            id="1233"
            title="the lean startup"
            price={29.45}
            image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcScpS9dtMChvpksbeqyLbv_CJ0dZuOPK81mmpFhfAly1vEzYBSt"
            rating={4}
          />
          <Product
            id="1234"
            title="SAMSUNG: EVO Select 128GB MicroSDXC UHS-I U3 100MB/s Full HD & 4K UHD Memory Card with Adapter (MB-ME128HA)"
            price={16.99}
            image="https://images-na.ssl-images-amazon.com/images/I/417N4M2ulHL.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="1235"
            title="Nintendo Switch Pro Controller"
            price={79.45}
            image="https://images-na.ssl-images-amazon.com/images/I/41lo7JOm0UL.jpg"
            rating={5}
          />
          <Product
            id="1236"
            title="Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black"
            price={89.45}
            image="https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L.jpg"
            rating={4}
          />
          <Product
            id="1237"
            title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10"
            price={329.45}
            image="https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="1238"
            title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
            price={329.45}
            image="https://images-na.ssl-images-amazon.com/images/I/41DQoLIfsRL.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
