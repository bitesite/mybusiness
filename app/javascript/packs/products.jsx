import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import GeneralPost from '../components/general/general_post';
import ProductImage from '../../assets/images/product_image.png';
import ProductCard from '../components/product_card';

const Products = () => {
  const [products, setProducts] = useState([]);

  function loadProducts() {
    $.getJSON('/products', (results) => {
      setProducts(results);
    });
  }

  useEffect(() => {
    loadProducts();
  }, []);

  const header = 'Products';
  const text = (
    <div className="body-regular ">
      Besides our core Custom Software services, we like to create our own products. Whether it's to help out our daily work,
      pursue our passion, learn something new, or just for fun, we like to build and share. <br />
      <br />
      Here are some of the things we've built!
    </div>
  );
  return (
    <div>
      <GeneralPost image={ProductImage} header={header} text={text} buttonHide imageStyle="products-image" />

      {products &&
        products.map((product) => (
          <>
            <ProductCard header={product.title} text={product.body} link={product.link} image={product.image} />
          </>
        ))}
    </div>
  );
};

export default Products;

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('products-component-mount-point');

  if (element) {
    const { products } = element.dataset;
    ReactDOM.render(<Products products={products} />, element);
  }
});
