import { useMemo } from 'react';
import MainLayout from "./views/layouts/main/MainLayout";
import { Route, Routes, Navigate, useLocation } from "react-router";
import SignInPage from './views/pages/SignIn/SignInPage.js';
import SignUpPage from './views/pages/SignUp/SignUpPage.js';
import MainPage from './views/pages/Main/MainPage.js';
import SignLayout from "./views/layouts/sign/SignLayout";

function App() {
  const location = useLocation();

  const layout = useMemo(() => {
    return location.pathname === "/sign-in" || location.pathname === "/sign-up" ? (
      <SignLayout>
        <Routes>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </SignLayout>
    ) : (
      <MainLayout>
        <Routes>
          <Route
            path="*"
            element={<Navigate to="/sign-in" replace />}
          />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </MainLayout>
    )}, [location])

  return (
    <>
      {layout}
    </>
  );
}

export default App;
