import React, { Component } from "react";
import "./AllProducts.css";

export default class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const result = await response.json();

      this.setState({
        isLoaded: true,
        items: result.slice(0, 18), // Ограничение до первых 18 продуктов
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error,
      });
    }
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <p>Error {error.message}</p>;
    } else if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <div className="product-list">
          {items.map((item) => (
            <div key={item.name} className="product-card">
              <img
                src={item.images}
                alt={item.name}
                className="product-image"
              />
              <div className="product-info">
                <p>{item.title}</p>
                <p>Price: {item.price}$</p>
                <div className="description">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}
