// import Profile from "../../task 28-07-2026/Fragment/Profile";
// import profile1 from "../../task 28-07-2026/Fragment/profile1";

// function App() {
//   return (
//     <div>
//       <Profile />
//     </div>
//   );
// }

// export default App;

// import Profile from "../../task 28-07-2026/HOC/Profile";
// import withGreeting from "../../task 28-07-2026/HOC/withGreeting";

// const GreetingProfile = withGreeting(Profile);

// function App() {
//   return <GreetingProfile />;
// }

// export default App;

// import Dashboard from "../../task 28-07-2026/HOC/Authenication/Dashboard";
// import withAuth from "../../task 28-07-2026/HOC/Authenication/withAuth";

// const ProtectedDashboard = withAuth(Dashboard);

// function App() {
//   return (
//     <ProtectedDashboard />
//   );
// }

// export default App;

// import UserList from "../../task 28-07-2026/HOC/Loading/UserList";
// import withLoading from "../../task 28-07-2026/HOC/Loading/withLoading";

// const UserListWithLoading = withLoading(UserList);

// const users = [
//   { id: 1, name: "Abhiram" },
//   { id: 2, name: "Ramu" },
//   { id: 3, name: "lucky" }
// ];

// function App() {

//   const isLoading = true;

//   return (
//     <UserListWithLoading
//       users={users}
//       isLoading={isLoading}
//     />
//   );
// }

// export default App;

import Users from "../../task 28-07-2026/Custom hooks/hooks/components/Users";
import RegistrationForm from "../../task 28-07-2026/Custom hooks/hooks/components/RegistrationForm";
import ScreenSize from "../../task 28-07-2026/Custom hooks/hooks/components/ScreenSize";
import ThemeSwitcher from "../../task 28-07-2026/Custom hooks/hooks/components/ThemeSwitcher";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Custom Hooks Demo</h1>

      <hr />

      <h2>1. API Calls - useFetch()</h2>
      <Users />

      <hr />

      <h2>2. Form Handling - useForm()</h2>
      <RegistrationForm />

      <hr />

      <h2>3. Window Resize - useWindowSize()</h2>
      <ScreenSize />

      <hr />

      <h2>4. Theme Management - useTheme()</h2>
      <ThemeSwitcher />
    </div>
  );
}

export default App;

