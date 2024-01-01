import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './pages/Home'
import Apropos from "./pages/Apropos"
import './styles/index.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <Apropos />
  }
])


function App() {

  return <RouterProvider router = {router}/>
    
}

export default App
