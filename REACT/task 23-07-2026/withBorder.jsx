function withBorder(WrappedComponent) {
  return function EnhancedComponent(props) {
    return (
      <div
        style={{
          border: "2px solid blue",
          padding: "20px",
          margin: "20px",
        }}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withBorder;