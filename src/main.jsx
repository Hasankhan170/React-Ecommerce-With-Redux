
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SingleProduct from './screens/SingleProduct.jsx';

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {
        path : 'SingleProduct',
        element : <SingleProduct/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}> 
    <App />
    </RouterProvider>
  </Provider>

)
