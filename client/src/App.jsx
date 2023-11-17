import { Routes, Route } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import SignIn from "./_auth/SignIn";
import Home from "./_root/pages/Home";
import UserProfile from "./_root/pages/UserProfile";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/user-profile/:id" element={<UserProfile />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
