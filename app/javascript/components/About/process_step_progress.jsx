import React, { useEffect, useState } from 'react';
import ProcessSteps from '../process_steps';

const ProcessStepProgress = () => {
  const [status, setStatus] = useState(null);

  const steps = [
    {
      title: 'Getting to know you and your project',
      description:
        'We like to welcome all types of people with diverse backgrounds when it comes to our staff, our clients, and anybody else we work with. Everybody has their own working style that we respect, but before embarking on a new project together, we like to make sure that we’ll be a good fit for each other so that you can take the best approach for your project.',
    },
    {
      title: 'MVP Sprint Planning',
      description:
        'While all our contracts are setup to be open-ended, for first time clients, we usually like to define a set of some concrete short-term goals. Typically, these projects are setup to be about 1-3 months and have a short list of features. These projects can often be viewed as a Minimal Viable Product (MVP). A general timeline and checkin meetings are setup.',
    },
    {
      title: 'Design & Development',
      description:
        'Our typical design and development cycles center around fixed, predictable chunks of time (usually 1 week) called Sprints. Every Sprint starts with a planning session where the entire team decides what is going to be designed, developed, tested and delivered. We manage our Sprints using Trello cards, that our clients are able to view the progress of and add feedback to.',
    },
    {
      title: 'Test & Iterate',
      description:
        'As Product Managers start to test a new feature, there are two outcomes. Either the feature will be acceptable and will be approved, or the feature will need some tweaks. If the feature needs tweaks, the product managers will send it back to be fixed. This cycle continues until everything gets approved.',
    },
  ];

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
