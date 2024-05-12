import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from './pages/Login';
import Hr from './pages/Hr';
function App() {
  

  return (
    <>
      <div className=''>

      <Router>
        <ToastContainer position="top-center" />
        <Routes>
          <Route index element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hr" element={<Hr />} />
        </Routes>
      </Router>
      </div>
    </>
  );
}

export default App
