import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Frame } from "@bitesite/react-figstrap";
import ProductImage from "../../assets/images/product_image.png";
import ProductCard from "../components/product_card";
import DarkBackgroundGeneralPost from "../components/general/dark_background_general_post";

const Products = () => {
  const [products, setProducts] = useState([]);

  function loadProducts() {
    $.getJSON("/products", setProducts);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  const header = "Products";
  const text = (
    <Frame className="fgs-al fgs-al-g-60" vertical>
      <div>
        Besides our core Custom Software services, we like to create our own
        products. Whether it's to help out our daily work, pursue our passion,
        learn something new, or just for fun, we like to build and share. <br />
        <br />
        Here are some of the things we've built!
      </div>
      <div>
        {products &&
          products.map((product) => (
            <>
              <ProductCard
                header={product.title}
                text={product.body}
                link={product.link}
                image={product.image}
              />
            </>
          ))}
      </div>
    </Frame>
  );
  return (
    <div className="product-component">
      <DarkBackgroundGeneralPost
        image={ProductImage}
        header={header}
        text={text}
        imageStyle="products-image"
        buttonHide
        alignPostClass="fgs-al-align-items-flex-start"
      />
    </div>
  );
};

export default Products;

document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("products-component-mount-point");

  if (element) {
    const { products } = element.dataset;
    ReactDOM.render(<Products products={products} />, element);
  }
});
