import Spinner from "./Spinner";

function withSpinner(WrappedComponent) {
  return function EnhancedComponent({ loading, ...props }) {
    if (loading) {
      return <Spinner />;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withSpinner;