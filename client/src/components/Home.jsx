import React from "react";
import "./Home.css";
import Layout from "./shared/Layout";
import Products from "./Products";
import Hero from "./products/Hero";

const Home = (props) => {
  return (
    <Layout user={props.user}>
      {/* <div className="home"> */}
      {/* <img src="https://i.imgur.com/AKdJFKV.jpg" width="100%" /> */}
      {/* </div> */}
      debugger;
      <Hero
        heroImg="https://i.imgur.com/AKdJFKV.jpg"
        heroTitle="Mothers Day Sale"
        heroTitle2="Give your Rock a Diamond"
        cName="leftTitlePosition"
      />
      {/* Section under the hero */}
      <div className="gridHeadingDivider">
        <div className="textDivider">Ultimate Elegnce</div>
        <span className="textDividertag">Best Sellers</span>
      </div>
      <Products jCollection="women" featured={true} />
    </Layout>
  );
};

export default Home;
