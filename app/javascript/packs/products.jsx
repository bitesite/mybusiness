import React from 'react';
import ReactDOM from 'react-dom';
import GeneralPost from '../components/general/general_post';
import ProductImage from '../../assets/images/product_image.png';

const Products = () => {
  const header = 'Products';

  const text = (
    <div className="body-regular ">
      Besides our core Custom Software services, we like to create our own products. Whether it's to help out our daily work,
      pursue our passion, learn something new, or just for fun, we like to build and share. <br />
      <br />
      Here are some of the things we've built!
    </div>
  );
  return <GeneralPost image={ProductImage} header={header} text={text} buttonHide imageStyle="products-image" />;
};

export default Products;

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('products-component-mount-point');
  if (element) {
    ReactDOM.render(<Products />, element);
  }
});
