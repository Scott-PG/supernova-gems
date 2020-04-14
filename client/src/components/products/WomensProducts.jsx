import React from "react";
// import "./WomensProducts.css";
import Layout from "../shared/Layout";
import Products from "../Products";

const WomensProducts = (props) => {
  return (
    <Layout user={props.user}>
      <img src="https://i.imgur.com/AKdJFKV.jpg" width="100%" />
      <Products jCollection="women" user={props.user} />
    </Layout>
  );
};

export default WomensProducts;
