import React, { Component } from "react";
import "./ProductDetail.css";
import Layout from "./shared/Layout";
import { getProduct, deleteProduct } from "../services/product";
import { Link, Redirect } from "react-router-dom";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: "",
        description: "",
        imgURL: "",
        jType: "",
        jCollection: "",
      },
      deleted: false,
    };
  }

  async componentDidMount() {
    let { id } = this.props.match.params;
    const product = await getProduct(id);
    this.setState({ product });
  }

  render() {
    const { product, deleted } = this.state;
    if (deleted) {
      return <Redirect to={`/${this.state.product.jCollection}`} />;
    }
    return (
      <Layout user={this.props.user}>
        <div className="product-detail">
          <div className="product-detail-image-div">
            <img
              className="product-detail-image"
              src={product.imgURL}
              alt={product.name}
            />
          </div>
          <div className="detail-div">
            <div className="detail-name">{product.name}</div>
            <div className="detail-price">{`$${product.price}`}</div>
            <div className="detail-description">{product.description}</div>
            <div className="detail-type-collection">
              {product.jType} {product.jCollection}
            </div>
            <div className="detail-button-container">
              <button className="detail-edit-button">
                <Link
                  className="detail-edit-link"
                  to={`/products/${product._id}/edit`}
                >
                  Edit
                </Link>
              </button>
              <button
                className="detail-delete-button"
                onClick={() => {
                  deleteProduct(product._id);
                  this.setState({ deleted: true });
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ProductDetail;
