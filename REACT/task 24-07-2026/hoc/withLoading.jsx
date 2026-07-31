function withLoading(Component) {

  return function EnhancedComponent({ loading, ...props }) {

    if (loading) {
      return <h2>Loading...</h2>;
    }

    return <Component {...props} />;
  };

}

export default withLoading;