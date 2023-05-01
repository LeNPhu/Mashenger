import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";

import Main from "./pages/Main/Main";
import PrivateRoutes from "./config/PrivateRoutes";
import ProtectedRoutes from "./config/ProtectedRoutes";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Login />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/main" element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
