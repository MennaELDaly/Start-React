import './App.css';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Notfound from './Components/NotFound/Notfound';
import Portofolio from './Components/Portofolio/Portofolio';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';



let routers = createHashRouter([
  { path: "", element: <Layout /> , children: [
    {index: true, element: <Home/>},
    {path:"portofolio" , element: <Portofolio/>},
    {path:"about" , element: <About/>},
    {path:"contact" , element: <Contact/>},
    {path:"*" , element: <Notfound/>},
  ]}
])

function App() {
  return <RouterProvider router={routers}></RouterProvider>
}

export default App;
