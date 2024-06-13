import Header from './components/header'
import Footer from './components/footer';
import HomePage from "./pages/homePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import AdminHeader from './components/header/admin';
import Login from './pages/admin/login';
import NotFound from './pages/notfound';
import AdminHomePage from './pages/admin';
/* user type
 user {
  role: "Admin" | "Acd",
  username: string
 }
 */
function App() {
  const [isAdmin, setIsAdmin] = useState(false)
  const handleIsAdmin = (val) => setIsAdmin(val)
  let user = {
    role: "admin",
    username: "Alexis"
  }
  return (
    <div className="App">
      <BrowserRouter>
        {isAdmin ?
          (<AdminHeader status={isAdmin} />)
          :
          (<Header />)
        }
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/login" element={<Login setAdmin={handleIsAdmin} />} />
          <Route path="/admin" element={<AdminHomePage status={true} setAdmin={handleIsAdmin} user={user} />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
