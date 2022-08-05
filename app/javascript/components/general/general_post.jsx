import React from 'react';
import PropTypes from 'prop-types';

const GeneralPost = ({ image, header, text, button }) => (
  <div className="general-component-card fgs-al fgs-al-v fgs-al-g-30">
    <div className="content-block fgs-al fgs-ali fgs-al-h fgs-al-g-60 fgs-al-align-items-center fgs-al-justify-content-space-evenly">
      <div className="content fgs-al fgs-ali fgs-al-v fgs-al-g-30 ">
        <div className="title fgs-ali heading-regular fgs-al-g-16">{header}</div>
        <p className="text fgs-ali">{text}</p>
        <button className="button fgs-ali btn primary-default" type="button">
          {button}
        </button>
      </div>

      <div className="fgs-ali">
        <img className="card-image" src={image} alt="general component" />
      </div>
    </div>
  </div>
);

GeneralPost.propTypes = {
  image: PropTypes.string,
  header: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.string,
};

export default GeneralPost;
