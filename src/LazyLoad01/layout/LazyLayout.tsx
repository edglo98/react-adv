import { Navigate, NavLink, Route, Routes } from "react-router-dom"
import LazyPage1 from "../pages/LazyPage1"
import LazyPage2 from "../pages/LazyPage2"
import LazyPage3 from "../pages/LazyPage3"

const LazyLayout = () => {
  return (
    <div style={{display: 'flex'}}>

      <nav>
        <h1>lazy layout page</h1>
        <ul>
          <li>
            <NavLink className={ ({ isActive }) => !isActive ? 'nav-active' : '' }  to='lazy1'>
              Lazy layout
            </NavLink>
          </li>
          <li>
            <NavLink className={ ({ isActive }) => !isActive ? 'nav-active' : '' }  to='lazy2'>
              Lazy layout 2
            </NavLink>
          </li>
          <li>
            <NavLink className={ ({ isActive }) => !isActive ? 'nav-active' : '' }  to='lazy3'>
              Lazy layout 3
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='lazy1' element={<LazyPage1/>}/>
        <Route path='lazy2' element={<LazyPage2/>}/>
        <Route path='lazy3' element={<LazyPage3/>}/>

        <Route path="/*" element={ <Navigate to='lazy1' replace /> } />
      </Routes>
    </div>
  )
}

export default LazyLayout
