import React from "react";
import "./Home.css";
import Layout from "./shared/Layout";
import Products from "./Products";

const Home = (props) => {
  return (
    <Layout user={props.user}>
      {/* <div className="home"> */}
      <img src="https://i.imgur.com/AKdJFKV.jpg" width="100%" />
      <Products jCollection="women" featured={true} />
      {/* </div> */}
    </Layout>
  );
};

export default Home;
