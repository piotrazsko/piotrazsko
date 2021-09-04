import React from "react";
import PropTypes from "prop-types";
import MobileScreen from "../MobileScreen";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const getPageHeight = () => {
  let body = document.body,
    html = document.documentElement;

  return (
    Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    ) - body.offsetHeight
  );
};
export const useAutoScrollToTop = (rest) => {
  const {
    match: { url },
    autoScrollToTop = true,
  } = rest;
  // HACK:  scroll new page  to top after change url
  React.useEffect(() => {
    if (autoScrollToTop) {
      scrollToTop();
    }
  }, [url]);
};
const LayoutEmpty = ({
  myPermissionsSelector,
  children,
  viewPort,
  userIsMaster,
  currentUserData,
  currentLocalization,
  classes = {},
  ...rest
}) => {
  const { isMobile } = viewPort;
  const {
    history,
    match: { path },
    route: {
      roleKey,
      showHeader = true,
      showFooter = true,
      showScrollToTop = false,
    },
    location: { pathname, search },
  } = rest;

  const [isEndOfPage, setEndOfPage] = React.useState(false);
  const restWithPermissons = {
    viewPort,
    isEndOfPage,
    currentLocalization,
    ...rest,
  };

  return !isMobile ? (
    <div>{React.createElement(children, restWithPermissons)}</div>
  ) : (
    <MobileScreen />
  );
};

LayoutEmpty.propTypes = {
  classes: PropTypes.object.isRequired,
  viewPort: PropTypes.shape({ isMobile: PropTypes.bool.isRequired }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  myPermissionsSelector: PropTypes.object,
  userIsMaster: PropTypes.bool.isRequired,
  currentUserData: PropTypes.object.isRequired,
  currentLocalization: PropTypes.string,
};

export default LayoutEmpty;
