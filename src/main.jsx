import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Routes , Route} from "react-router-dom"
import { Provider } from 'react-redux'
import store from './redux/store.js'
import Login from './pages/Auth/Login.jsx'
import Register from './pages/Auth/Register.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import Profile from './pages/User/Profile.jsx'
import AdminRoute from './pages/Admin/AdminRoute.jsx'
import UserList from './pages/Admin/UserList.jsx'
import CategoryList from './pages/Admin/CategoryList.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
<BrowserRouter>
  <Routes>





  <Route path="/" element={<App/>}>
  <Route path='' element={<PrivateRoute/>}>
      <Route path='/profile' element={<Profile/>}/>
      </Route>

    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>

    <Route path="/admin" element={<AdminRoute />}>
        <Route path="userlist" element={<UserList />} />
        <Route path="categorylist" element={<CategoryList />} />
      </Route>
    </Route>

    </Routes>
</BrowserRouter>
</Provider>
)
