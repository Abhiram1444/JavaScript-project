function Login({ setIsLoggedIn, setRole }) {
  return (
    <div>

      <h2>Please Login</h2>

      <button
        onClick={() => {
          setIsLoggedIn(true);
          setRole("admin");
        }}
      >
        Login as Admin
      </button>

      <br /><br />

      <button
        onClick={() => {
          setIsLoggedIn(true);
          setRole("student");
        }}
      >
        Login as Student
      </button>

      <br /><br />

      <button
        onClick={() => {
          setIsLoggedIn(true);
          setRole("guest");
        }}
      >
        Login as Guest
      </button>

    </div>
  );
}

export default Login;