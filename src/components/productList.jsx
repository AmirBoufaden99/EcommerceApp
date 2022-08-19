import { useState, useEffect } from "react";
import React from "react";
import OneProduct from "./oneProduct";
import "../styles/productList.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ProductList(props) {
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [search, setSearch] = useState("");

  const [productList, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(productList));
  }, [productList]);

  function addProduct() {
    let newProduct = {
      link: link,
      title: title,
      price: price,
    };

    setProducts([...productList, newProduct]);
  }

 

  return (
    <div className="mainContainer">
      <div className="addProduct">
        <div className="myForm">
          <h1>Add Product : </h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicLInk">
              <Form.Label>Image link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image link here"
                value={link}
                onChange={(e) => {
                  setLink(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPrice">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the product price"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </Form.Group>
            <Button variant="primary" onClick={() => addProduct()}>
              Add Product
            </Button>
          </Form>
        </div>
        <div className="searchBar">
          <h3>Search Product</h3>
          <div id="search" value={search} onChange={(e) => {setSearch(e.target.value)}}>
            <input type="text" placeholder="Search.." />
          </div>
        </div>
      </div>

      <div className="allProducts">
        {productList.length > 0 ? (
          <div className="productContainer">
            {productList.filter(product => product.title.includes(search)).map((product, index) => {
              return (
                <OneProduct
                  key={index}
                  img={product.link}
                  title={product.title}
                  price={product.price}
                />
              );
            })}
          </div>
        ) : (
          <div>
            <p>No products available</p>
          </div>
        )}
      </div>
    </div>
  );
}


