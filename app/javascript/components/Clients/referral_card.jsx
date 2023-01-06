import React from 'react';
import PropTypes from 'prop-types';

function ReferralCard({ header, text, userImage, userName, date }) {
  return (
    <div className="component-referral-card fgs-al fgs-al-v fgs-al-justify-content-space-between">
      <div className="content fgs-al fgs-al-v fgs-al-g-20">
        <div className="referral-card-quote">
          <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.8704 17.7301C14.9069 18.5818 14.7552 19.4311 14.4261 20.2176C14.097 21.004 13.5986 21.7082 12.9664 22.2801L12.9614 22.2841C11.6525 23.4447 9.94776 24.0583 8.19941 23.9981H8.21041C7.15362 24.0553 6.09722 23.879 5.11624 23.4818C4.13527 23.0847 3.25378 22.4764 2.53441 21.7001L2.53041 21.6961C1.0882 19.9847 0.352592 17.7879 0.473407 15.5531L0.472407 15.5741C0.405384 13.2533 0.836746 10.9451 1.73741 8.80512L1.69741 8.91212C2.41652 7.23428 3.41426 5.69016 4.64841 4.34512L4.63741 4.35712C5.65699 3.25102 6.83843 2.30594 8.14141 1.55412L8.21341 1.51612C9.19889 0.9476 10.2274 0.457102 11.2894 0.0491172L11.4454 -0.00388281L14.5794 5.28612C13.2771 5.81157 12.1339 6.66694 11.2624 7.76812L11.2494 7.78512C10.3816 8.81882 9.83731 10.0851 9.68441 11.4261L9.68141 11.4581C10.3634 11.4752 11.034 11.6362 11.6494 11.9305C12.2648 12.2249 12.8111 12.6459 13.2524 13.1661L13.2584 13.1731C14.3805 14.4225 14.961 16.0661 14.8724 17.7431L14.8734 17.7281L14.8704 17.7301ZM31.8184 17.7301C31.8545 18.582 31.7025 19.4314 31.3732 20.218C31.044 21.0045 30.5456 21.7089 29.9134 22.2811L29.9084 22.2851C28.5997 23.4462 26.8948 24.0598 25.1464 23.9991H25.1574C24.1006 24.0565 23.0441 23.8804 22.0631 23.4832C21.0821 23.086 20.2006 22.4776 19.4814 21.7011L19.4774 21.6961C18.0346 19.9847 17.2989 17.7873 17.4204 15.5521L17.4194 15.5731C17.3524 13.2523 17.7837 10.9441 18.6844 8.80412L18.6444 8.91112C19.3632 7.23357 20.3602 5.6895 21.5934 4.34412L21.5824 4.35612C22.6024 3.25 23.7841 2.30492 25.0874 1.55312L25.1594 1.51512C26.1447 0.9462 27.1732 0.455686 28.2354 0.0481172L28.3914 -0.00488281L31.5244 5.28512C30.2219 5.81121 29.0788 6.66728 28.2074 7.76912L28.1944 7.78612C27.3266 8.81983 26.7823 10.0861 26.6294 11.4271L26.6264 11.4591C27.3081 11.4761 27.9785 11.6371 28.5936 11.9314C29.2087 12.2258 29.7546 12.6469 30.1954 13.1671L30.2014 13.1741C31.3247 14.4226 31.9063 16.066 31.8184 17.7431L31.8194 17.7281L31.8184 17.7301Z"
              fill="#2A7F89"
            />
          </svg>
        </div>
        <div className="referral-card-info fgs-al fgs-al-g-16 fgs-al-v">
          <div className="referral-card-header heading-small">{header}</div>

          <div className="referral-card-text">{text}</div>
        </div>
      </div>

      <div className="referral-user-container fgs-al fgs-al-g-16">
        <div className="referral-image">
          <img src={userImage} alt="International Safety" />
        </div>
        <div className="referral-user-info-container">
          <div className="user-name body-small-medium">{userName}</div>
          <div className="date caption-medium">{date}</div>
        </div>
      </div>
    </div>
  );
}

export default ReferralCard;

ReferralCard.defaultProps = {
  header: '',
  text: '',
  userImage: '',
  userName: '',
  date: '',
};

ReferralCard.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  userImage: PropTypes.node,
  userName: PropTypes.string,
  date: PropTypes.string,
};
