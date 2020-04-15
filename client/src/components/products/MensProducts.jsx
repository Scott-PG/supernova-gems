import React from "react";
// import "./MensProducts.css";
import Layout from "../shared/Layout";
import Products from "../Products";

const MensProducts = (props) => {
  return (
    <Layout user={props.user}>
      <img src="https://i.imgur.com/AKdJFKV.jpg" width="100%" />
      <Products jCollection="men" user={props.user} />
    </Layout>
  );
};

export default MensProducts;
