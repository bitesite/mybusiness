import React, { useState, useRef, useEffect } from 'react';
import { Frame } from '@bitesite/react-figstrap';
import { Icon } from '@iconify/react';
import { icon } from '@fortawesome/fontawesome-svg-core';

const Accordian = ({ accordianTitle, accordianContent, expandAll }) => {
  const [showContent, setShowContent] = useState(false);
  const iconType = useRef();

  const handleDisplay = () => {
    if (iconType.current.className === 'add') {
      setShowContent(!showContent);
    }
    if (iconType.current.className === 'minus') {
      setShowContent(!showContent);
    }
  };

  useEffect(() => {
    if (expandAll) {
      setShowContent(true);
    } else {
      setShowContent(false);
    }
  }, [expandAll]);

  return (
    <Frame className="accordian" padding="20" vertical>
      <Frame justifyContent="space-between">
        <Frame className="medium ">{accordianTitle}</Frame>
        <div className="accordian-icon">
          {expandAll && showContent && (
            <div
              className="minus-expanded"
              onClick={(e) => {
                e.preventDefault;
                console.log('hide');
                setShowContent(false);
              }}
            >
              <Icon icon="dashicons:minus" />
              <div>hello</div>
            </div>
          )}
          {showContent && !expandAll && (
            <div
              onClick={(e) => {
                e.preventDefault;
                setShowContent(false);
              }}
            >
              <Icon icon="dashicons:minus" />
            </div>
          )}
          {!showContent && expandAll && (
            <div
              onClick={(e) => {
                e.preventDefault;
                setShowContent(false);
              }}
            >
              <Icon icon="dashicons:minus" />
            </div>
          )}

          {!showContent && !expandAll && (
            <div
              onClick={(e) => {
                e.preventDefault;
                setShowContent(true);
              }}
            >
              <Icon icon="fluent:add-16-filled" />
            </div>
          )}
        </div>
      </Frame>
      {showContent && !expandAll && <Frame className="body-regular accordian-content">{accordianContent}</Frame>}
      {!showContent && expandAll && null}

      {expandAll && showContent && <Frame className="body-regular accordian-content">{accordianContent}</Frame>}
    </Frame>
  );
};

export default Accordian;

// expandone or expand all

// if expand all
// minus icon
//
