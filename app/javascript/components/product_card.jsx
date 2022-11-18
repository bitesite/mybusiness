import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import Link from './link';

const ProductCard = ({ image, header, text, link, positionImageRight, imageStyle }) => (
  <div className="product-component-card">
    <div className="product-card fgs-al fgs-ali fgs-al-h fgs-al-g-20 fgs-al-p-20 fgs-al-align-items-flex-start">
      <div className={`image-block fgs-ali ${positionImageRight ? 'right' : ''}`}>
        <img className={`card-image ${imageStyle}`} src={image} alt="product component" />
      </div>

      <div className="content fgs-al fgs-ali fgs-al-v  ">
        <div className="title fgs-ali body-large-bold fgs-al-g-16">{header}</div>
        <p className="text fgs-ali body-regular">{text}</p>
        <Link
          onClick={(e) => {
            e.preventDefault();
            window.location.href = link;
          }}
          className="body-small-bold"
        >
          View the web app
          <Icon icon="bytesize:arrow-right" height="20" />
        </Link>
      </div>
    </div>
  </div>
);

ProductCard.defaultProps = {
  image: PropTypes.string,
  header: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
  positionImageRight: false,
  imageStyle: '',
};

ProductCard.propTypes = {
  image: PropTypes.string,
  header: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
  positionImageRight: PropTypes.bool,
  imageStyle: PropTypes.string,
};

export default ProductCard;
