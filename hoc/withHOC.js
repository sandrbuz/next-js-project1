import React from "react";

const withHOC = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    return <WrappedComponent {...props} hoc={true} />;
  };
};

export default withHOC;