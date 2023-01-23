import React from 'react';
import PropTypes from 'prop-types';
import { Frame } from '@bitesite/react-figstrap';
import moment from 'moment/moment';

import QuotationVector from '../../assets/images/case_studies/quotation_marks_vector.png';

const Testimonial = ({ name, quote, body, date, title, logo }) => (
  <Frame className="testimonial-section" alignItems="center" justifyContent="center">
    <Frame className="testimonial-card" vertical gap={16}>
      <img className="quotations-vector" src={QuotationVector} alt="quotations vector" />
      <div className="heading-small">{quote}</div>
      <div className="body-regular testimonial-body">{body}</div>
      <Frame gap={16}>
        <img className="company-logo" src={logo} alt="company logo" />
        <Frame vertical>
          <div className="body-small-medium">
            {name} - {title}
          </div>
          <div className="caption-medium testimonial-date">{moment(date, 'YYYY-MM-DD').format('MMMM D, YYYY')}</div>
        </Frame>
      </Frame>
    </Frame>
  </Frame>
);

export default Testimonial;

Testimonial.propTypes = {
  name: PropTypes.string,
  quote: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  logo: PropTypes.string,
};
