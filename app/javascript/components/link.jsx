const React = require('react');
const PropTypes = require('prop-types');
/**
 * Renders a link and will pass style and generate the correct action
 *
 *
 * @prop canShow - (Optional) boolean to determine if can show to a user or not, default to true
 * @prop onClick - (Optional) - onClick Callback
 * @prop  className- (Optional) - styling for the link
 * @prop path - (optional) href will default to # if nothing passed in
 * @prop style - (optional) inline style passed in for parent
 */

const Link = ({
  onClick,
  title,
  className,
  children,
  path = '#',
  canShow = true,
  style,
  onMouseEnter,
  onMouseLeave,
  onMouseOver,
  onFocus,
  onBlur,
  dataMethod,
  dataConfirm,
  disabled,
  target,
}) => {
  // Helper function that will build the event handlers on links so they conform to accessibility standards (SEO)
  function buttonize(handlerFn) {
    return {
      role: 'button',
      onClick: handlerFn,
      onKeyDown: (event) => {
        // If keypress is enter, it will be the same as clicking on the link
        if (event.keyCode === 13) handlerFn(event);
      },
    };
  }

  return (
    <>
      {canShow &&
        (disabled ? (
          <a
            className={`${className} disabled`}
            style={style}
            title={title}
            onMouseLeave={onMouseLeave}
            onMouseEnter={onMouseEnter}
            onFocus={onFocus}
            onMouseOver={onMouseOver}
            onBlur={onBlur}
          >
            {children}
          </a>
        ) : (
          <a
            href={path}
            className={className}
            style={style}
            title={title}
            {...buttonize(onClick)}
            onMouseLeave={onMouseLeave}
            onMouseEnter={onMouseEnter}
            onFocus={onFocus}
            onMouseOver={onMouseOver}
            onBlur={onBlur}
            data-method={dataMethod}
            data-confirm={dataConfirm}
            target={target}
          >
            {children}
          </a>
        ))}
    </>
  );
};

Link.propTypes = {
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseOver: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
  path: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
  canShow: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  dataMethod: PropTypes.string,
  dataConfirm: PropTypes.object,
  disabled: PropTypes.bool,
  target: PropTypes.string,
};

Link.defaultProps = {
  onClick: () => {},
  onMouseLeave: () => {},
  onMouseEnter: () => {},
  onMouseOver: () => {},
  onFocus: () => {},
  onBlur: () => {},
  style: {},
  className: '',
  path: '',
  title: '',
  children: null,
  canShow: true,
};

module.exports = Link;
