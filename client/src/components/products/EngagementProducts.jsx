import React from "react";
// import "./EngagementProducts.css";
import Layout from "../shared/Layout";
import Products from "../Products";

const EngagementProducts = (props) => {
  return (
    <Layout user={props.user}>
      <img src="https://i.imgur.com/AKdJFKV.jpg" width="100%" />
      <Products jCollection="engagement" user={props.user} />
    </Layout>
  );
};

export default EngagementProducts;
