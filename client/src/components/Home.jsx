import React from "react";
import "./Home.css";
import Layout from "./shared/Layout";
import Products from "./Products";
import Hero from "./products/Hero";
import featuredDividerImg from "../Images/FeatureDivImg.jpeg";

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <Hero
        heroImg="https://i.imgur.com/AKdJFKV.jpg"
        heroTitle="Mothers Day Sale"
        heroTitle2="Give your Rock a Diamond"
        cName="leftTitlePosition"
      />
      {/* Section under the hero */}
      <div className="gridHeadingDivider">
        <div className="textDivider">Ultimate Elegance</div>
        <span className="textDividertag">Best Sellers</span>
      </div>
      <Products jCollection="women" featured={true} />
      <div className="featuredDivider">
        <div className="featuredDividerdiv">Quarantine... Where she going?</div>
        <span className="featuredDividertag">Instagram!</span>
      </div>
      <img src={featuredDividerImg} />
    </Layout>
  );
};

export default Home;
