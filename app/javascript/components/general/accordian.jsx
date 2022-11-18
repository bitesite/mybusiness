import React, { useState, useRef, useEffect } from 'react';
import { Frame } from '@bitesite/react-figstrap';
import { Icon } from '@iconify/react';
import { icon } from '@fortawesome/fontawesome-svg-core';
import propTypes from 'prop-types';

const Accordian = ({ accordianTitle, accordianContent, expandAll, item }) => {
  const defaultItem = {
    item,
    showContent: false,
  };

  const [data, setData] = useState(defaultItem);

  useEffect(() => {
    if (expandAll) {
      setData((prev) => ({ ...prev, showContent: true }));
    } else {
      setData((prev) => ({ ...prev, showContent: false }));
    }
  }, [expandAll]);

  return (
    <Frame className="accordian" padding="20" vertical>
      <Frame justifyContent="space-between">
        <Frame className="medium ">{accordianTitle}</Frame>
        <div className="accordian-icon">
          {data.showContent && (
            <div
              className="minus-expanded"
              onClick={(e) => {
                e.preventDefault;
                setData((prev) => ({ ...prev, showContent: false }));
              }}
            >
              <Icon icon="dashicons:minus" />
            </div>
          )}
          {!data.showContent && (
            <div
              onClick={(e) => {
                e.preventDefault;
                defaultItem.showContent = true;
                setData((prev) => ({ ...prev, showContent: true }));
              }}
            >
              <Icon icon="material-symbols:add" />
            </div>
          )}
        </div>
      </Frame>
      {data.showContent && <Frame className="body-regular accordian-content">{accordianContent}</Frame>}
    </Frame>
  );
};

export default Accordian;

Accordian.propTypes = {
  accordianTitle: propTypes.string,
  accordianContent: propTypes.string,
  expandAll: propTypes.bool,
  item: propTypes.number,
};
