import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AuthGuard from './components/Authentication/AuthGuard';
import { HomePage, HotelDetailsPage, LoginPage, RegisterPage, UserPage } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route
          path="/profile"
          element={
            <AuthGuard>
              <UserPage />
            </AuthGuard>
          }
        ></Route>
        <Route path="/hotel/:hotelName" element={<HotelDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
