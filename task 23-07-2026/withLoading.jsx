function withLoading(WrappedComponent) {
  return function EnhancedComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <h2>Loading...</h2>;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withLoading;