import React from 'react';
import PropTypes from 'prop-types';

const OurTeam = ({ teamMembers }) => (
  <div className="component-our-team fgs-al  fgs-al-v fgs-al-g-60 fgs-al-align-items-center fgs-al-justify-content-flex-center">
    <div className="our-team-title heading-regular">Our Team</div>
    <div className="our-team-content fgs-al fgs-al-h fgs-al-g-30 fgs-al-align-items-flex-start fgs-al-justify-content-flex-center">
      {teamMembers &&
        teamMembers.length > 0 &&
        teamMembers.map((teamMember, index) => (
          <div
            key={index}
            className="our-team-member fgs-al fgs-al-v fgs-al-g-20 fgs-al-align-items-center fgs-al-justify-content-flex-center"
          >
            <div className="our-team-member-image">
              <img src={teamMember.image} alt={teamMember.name} />
            </div>
            <div className="our-team-member-info">
              <div className="our-team-member-name heading-small">{teamMember.name}</div>
              <div className="our-team-member-title body-large">{teamMember.position}</div>
            </div>
          </div>
        ))}
    </div>
  </div>
);

export default OurTeam;
