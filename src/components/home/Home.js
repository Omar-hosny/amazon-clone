import React from "react";
import "./Home.css";
import Banner from "../../photos/banner.jpg";
import Product from "../product/Product";

const Home = () => {
  return (
    <div className="home">
      <img src={Banner} alt="banner" className="home__image" />
      {/* Product => id, title, rating, price, image  */}
      <div className="home__row">
        <Product
          id={123456}
          title={
            "Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA port),Black"
          }
          price={80.5}
          rating={5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SL1500_.jpg"
          }
        />
        <Product
          id={545454}
          title={
            "TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless Internet Router for Home, Works with Alexa, VPN Server, Parental Control&QoS (Archer A7)"
          }
          price={50}
          rating={5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/51R2a9p-vNL._AC_SL1000_.jpg"
          }
        />
      </div>
      <div className="home__row">
        <Product
          id={45482}
          title={
            "Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, Black/Black, One Size (S &L Bands Included)"
          }
          price={100}
          rating={4}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71smqRr0pmL._AC_SL1500_.jpg"
          }
        />
        <Product
          id={123456}
          title={
            "Apple iPad Pro 10.5in (2017) 256GB, Wi-Fi - Space Gray (Renewed)"
          }
          price={550}
          rating={5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/61YxUI8IVgL._AC_SL1500_.jpg"
          }
        />
        <Product
          id={87472}
          title={
            "Apple iPhone 11 Pro Max (64GB, Midnight Green) + Wireless Plan"
          }
          price={1100}
          rating={5}
          image={"https://m.media-amazon.com/images/I/81j2j9x-KWL.jpg"}
        />
      </div>
      <div className="home__row">
        <Product
          id={123456}
          title={
            "SAMSUNG 75-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN75TU8000FXZA, 2020 Model)"
          }
          price={950}
          rating={5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC_SL1000_.jpg"
          }
        />
      </div>
    </div>
  );
};

export default Home;
