import MainLayout from "./views/layouts/main/MainLayout";
import { Route, Routes } from "react-router-dom";
import SignInPage from './views/pages/signIn/SignInPage.js';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
