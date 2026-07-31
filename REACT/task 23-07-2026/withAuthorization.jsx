function withAuthorization(WrappedComponent) {
  return function EnhancedComponent(props) {
    const role = "Admin";

    if (role !== "Admin") {
      return <h2>Access Denied</h2>;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withAuthorization;