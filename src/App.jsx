import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./components/Layout"
import Home from './pages/Home'
import Apropos from "./pages/Apropos"
import FicheLogement from "./pages/FicheLogement"
import PageError from "./pages/Error"
import './styles/index.scss'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element : <Home />
      },
      {
        path: 'home',
        element : <Home />
      },
      {
        path: 'about',
        element : <Apropos />
      },
      {
        path: 'ficheLogement/:id',
        element : <FicheLogement />,
        errorElement : <PageError />
      },
      {
        path: '*',
        element: <PageError />
      }
    ]
  }
])


function App() {

  return <RouterProvider router = {router}/>
    
}

export default App
