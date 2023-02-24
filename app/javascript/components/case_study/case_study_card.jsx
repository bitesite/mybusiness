import React from 'react';
import PropTypes from 'prop-types';
import { Frame } from '@bitesite/react-figstrap';
import { Icon } from '@iconify/react';
import Link from '../link';

const CaseStudyCard = ({ image, name, subtitle, id, link }) => (
  <Frame className="case-study-item" vertical>
    <img src={image} className="case-study-image" alt="case study" />
    <Frame className="case-study-text" vertical gap="8" padding="24">
      <div className="body-small-bold">{name}</div>
      <div className="body-regular">{subtitle}</div>
      {link && (
        <Link className="case-study-link body-small-bold" path={`/case_studies/${id}`}>
          Read More <Icon icon="fluent:arrow-right-32-filled" />
        </Link>
      )}
    </Frame>
  </Frame>
);

export default CaseStudyCard;

CaseStudyCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  subtitle: PropTypes.string,
  id: PropTypes.string,
  link: PropTypes.string,
};
