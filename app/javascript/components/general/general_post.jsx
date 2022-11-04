import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../bitesite-ui';

const GeneralPost = ({
  image,
  typeText,
  header,
  text,
  buttonText,
  link,
  linkHide,
  linkText,
  positionImageRight,
  buttonHide,
  buttonClass,
  buttonType,
  onClick,
  imageStyle,
}) => (
  <div className="general-component-card fgs-al fgs-al-v fgs-al-g-30">
    <div className="content-block fgs-al fgs-ali fgs-al-h fgs-al-g-60 fgs-al-align-items-center fgs-al-justify-content-space-evenly">
      <div className={`image-block fgs-ali ${positionImageRight ? 'right' : ''}`}>
        <img className={`card-image ${imageStyle}`} src={image} alt="general component" />
      </div>

      <div className="content fgs-al fgs-ali fgs-al-v fgs-al-g-16 ">
        {typeText && <div className="type-text fgs-ali">{typeText}</div>}
        <div className="title fgs-ali heading-regular">{header}</div>
        <p className="text fgs-ali">{text}</p>
        {!buttonHide && (
          <Button className={`${buttonClass}`} type={buttonType} onClick={onClick} href={link}>
            {buttonText}
          </Button>
        )}
        {!linkHide && (
          <a className="link fgs-ali" href={link}>
            {linkText}
          </a>
        )}
      </div>
    </div>
  </div>
);

GeneralPost.defaultProps = {
  image: PropTypes.string,
  header: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  link: PropTypes.string,
  positionImageRight: true,
  buttonHide: false,
  onClick: () => {},
  linkHide: false,
  linkText: '',
  buttonType: 'primary',
};

GeneralPost.propTypes = {
  image: PropTypes.string,
  typeText: PropTypes.string,
  header: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  link: PropTypes.string,
  positionImageRight: PropTypes.bool,
  buttonHide: PropTypes.bool,
  buttonClass: PropTypes.string,
  onClick: () => {},
  linkHide: PropTypes.bool,
  linkText: PropTypes.string,
  buttonType: PropTypes.string,
};

export default GeneralPost;
