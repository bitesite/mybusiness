import React from 'react';
import PropTypes from 'prop-types';

import Steps, { Step } from 'rc-steps';
import 'rc-steps/assets/index.css';

const ProcessSteps = ({ current, steps }) => (
  <Steps direction="vertical" current={current} status="finish">
    {steps &&
      steps.length > 0 &&
      steps.map(({ title, description }, index) => <Step key={index} title={title} description={description} />)}
  </Steps>
);

export default ProcessSteps;

ProcessSteps.propTypes = {
  current: PropTypes.number,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};
