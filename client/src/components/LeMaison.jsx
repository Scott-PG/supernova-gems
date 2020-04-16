import React from "react";
import "./LeMaison.css";
import Layout from "./shared/Layout";
import Products from "./Products";

const LeMaison = (props) => {
  return (
    <Layout user={props.user}>
      <div className="lemaison">
          <div className="jordania about-div">
            <img src="https://i.imgur.com/ambUW2d.jpg" />
            <div className="lemaison-caption">
              <h2>Jordania Pereyra</h2>
              <p>Fearless Designer</p>
              <p>Our Guiding Light</p>
            </div>
          </div>
        <div className="kay about-div">
          <img src="https://i.imgur.com/8gBDoF0.jpg" />
          <div className="lemaison-caption">
            <h2>Kay Chan</h2>
            <p>The Architect</p>
            <p>Command Line Prophet</p>
          </div>
        </div>
        <div className="jp about-div">
          <img src="https://i.imgur.com/QX5dlzf.jpg" />
          <div className="lemaison-caption">
            <h2>JP Meyers</h2>
            <p>Database Savant</p>
            <p>Cat Herder</p>
          </div>
        </div>
        <div className="scott about-div">
          <img src="https://i.imgur.com/Gcexxx3.jpg" />
          <div className="lemaison-caption">
            <h2>Scott Griffith</h2>
            <p>Git Czar</p>
            <p>Occasional Comedian</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LeMaison;
