import Header from './components/header'
import Footer from './components/footer';
import HomePage from "./pages/homePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';
import AdminHeader from './components/header/admin';
import Login from './pages/admin/login';
import NotFound from './pages/notfound';
import AdminHomePage from './pages/admin';
import CreateProcess from './pages/admin/createProcess';

function App() {
  // Verificamos si esta logueado

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Efecto para sincronizar el estado con sessionStorage
  useEffect(() => {
    const adminData = sessionStorage.getItem("adminData");
    setIsLoggedIn(adminData !== null);
  }, []);

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    setIsLoggedIn(true); // Actualiza el estado
  };

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    setIsLoggedIn(false); // Actualiza el estado
  };

  return (
    <div className="App flex flex-col h-screen relative">
      <BrowserRouter>
        {isLoggedIn ?
          (<AdminHeader onLogout={handleLogout} />)
          :
          (<Header />)
        }
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin/login" element={isLoggedIn ? <AdminHomePage /> : <Login onLogin={handleLogin} />} />
            <Route path="/admin" element={isLoggedIn ? <AdminHomePage /> : <NotFound />} />
            <Route path="/admin/crearTramite" element={isLoggedIn ? <CreateProcess /> : <NotFound />} />
            <Route path="/notfound" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
