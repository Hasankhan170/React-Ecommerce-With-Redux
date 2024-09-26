import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AllProducts from './screens/AllProduct.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleProduct from './screens/SingleProduct.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

const router = createBrowserRouter([
  {
    path: '/',
    element : <App/>,
    children : [
      {
        path: '',
        element: <AllProducts/>
      },
      {
        path: 'SingleProduct/:id',
        element: <SingleProduct/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>

)