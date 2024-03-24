import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import Navigation from "./pages/Auth/Navigation";

function App() {


  return (
  <div>
  <ToastContainer />
<Navigation/>
      <main className="py-3">
        <Outlet />
      </main>
  </div>
  )
}

export default App
