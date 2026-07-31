function withGreeting(WrappedComponent) {
  return function EnhancedComponent(props) {
    return (
      <>
        <h1>Welcome to Our Website</h1>

        <WrappedComponent {...props} />
      </>
    );
  };
}

export default withGreeting;