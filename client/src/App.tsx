import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage, LoginPage, RegisterPage, UserPage } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/profile" element={<UserPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
