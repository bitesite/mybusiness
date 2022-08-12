import React, { useEffect, useState } from 'react';
import ProcessSteps from '../process_steps';

const ProcessStepProgress = ({ steps }) => {
  const [status, setStatus] = useState(null);

  const getDocHeight = () =>
    Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const winHeight = window.innerHeight || document.documentElement.clientHeight;
    const docHeight = getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPostion = Math.floor((scrollTop / totalDocScrollLength) * 100);

    if (scrollPostion > 40 && scrollPostion <= 45) {
      return setStatus(0);
    }
    if (scrollPostion > 45 && scrollPostion <= 50) {
      return setStatus(1);
    }
    if (scrollPostion > 50 && scrollPostion <= 55) {
      return setStatus(2);
    }
    if (scrollPostion > 55 && scrollPostion <= 58) {
      return setStatus(3);
    }
    if (scrollPostion > 58) {
      return setStatus(4);
    }
    return setStatus(null);
  };

  const listenToScrollEvent = () => {
    document.addEventListener('scroll', () => {
      requestAnimationFrame(() => {
        calculateScrollDistance();
      });
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScrollEvent);
    return () => window.removeEventListener('scroll', listenToScrollEvent);
  });

  return <ProcessSteps current={status} steps={steps} />;
};

export default ProcessStepProgress;
