import React from 'react';
import ProcessStepProgress from './process_step_progress';

const OurProcess = () => (
  <div className="component-our-process fgs-al  fgs-al-v fgs-al-g-60 fgs-al-align-items-center fgs-al-justify-content-flex-center">
    <h1 className="our-process-title">Our Process </h1>
    <div className="our-process-content">
      We believe that all good software begins with a good process. Whether you have small updates to make, a short project, or
      on-going needs, we follow a process that maximizes the effectiveness of your software.
    </div>
    <div className="our-process-steps fgs-al fgs-al-v fgs-al-g-40 fgs-al-align-items-flex-start fgs-al-justify-content-flex-center">
      <ProcessStepProgress />
    </div>
  </div>
);
export default OurProcess;
