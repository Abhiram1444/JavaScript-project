import { useState } from "react";

function LoginLogout() {

  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="login-card">

      <h1>Login / Logout Example</h1>

      {
        isLoggedIn ? (

          <>
            <h2 className="success">
              Welcome Abhiram
            </h2>

            <p>You have successfully logged in.</p>

            <button
              className="logout-btn"
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </button>
          </>

        ) : (

          <>
            <h2 className="guest">
              Welcome Guest
            </h2>

            <p>Please login to continue.</p>

            <button
              className="login-btn"
              onClick={() => setIsLoggedIn(true)}
            >
              Login
            </button>
          </>

        )
      }

    </div>
  );
}

export default LoginLogout;