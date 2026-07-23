// import Dashboard from "../../task 23-07-2026/Dashboard";
// import UserList from "../../task 23-07-2026/UserList";

// import withAuthentication from "../../task 23-07-2026/withAuthentication";
// import withLoading from "../../task 23-07-2026/withLoading";
// import AdminPanel from "../../task 23-07-2026/AdminPanel";
// import withAuthorization from "../../task 23-07-2026/withAuthorization";

// const AuthDashboard = withAuthentication(Dashboard);
// const LoadingUserList = withLoading(UserList);
// const ProtectedAdmin = withAuthorization(AdminPanel);


// function App() {
//   return (
//     <div style={{ textAlign: "center", marginTop: "30px" }}>
//       <h1>Higher Order Components (HOC)</h1>

//       <h2>Authentication HOC</h2>
//       <AuthDashboard />

//       <hr />

//       <h2>Loading HOC</h2>
//       <LoadingUserList isLoading={false} />

//       <hr />

//       <h2>Authorization HOC</h2>
//      <ProtectedAdmin />
//     </div>
//   );
// }

// export default App;


import { useEffect, useState } from "react";
import Products from "../../task 23-07-2026/Products";
import withSpinner from "../../task 23-07-2026/withSpinner";

const ProductWithSpinner = withSpinner(Products);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Loading Spinner HOC Example</h1>

      <ProductWithSpinner loading={loading} />
    </div>
  );
}

export default App;