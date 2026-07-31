function withAuth(WrappedComponent) {
  return function AuthComponent(props) {

    const isLoggedIn = false;

    if (!isLoggedIn) {
      return (
        <h2>Please Login First</h2>
      );
    }

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;