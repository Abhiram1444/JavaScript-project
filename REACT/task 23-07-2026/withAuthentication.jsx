function withAuthentication(WrappedComponent) {
  return function EnhancedComponent(props) {
    const isLoggedIn = true;

    if (!isLoggedIn) {
      return <h2>Please Login</h2>;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withAuthentication;