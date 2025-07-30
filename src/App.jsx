import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import Contact from './components/Contact'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
import { lazy, Suspense } from 'react'
import Cart from './components/Cart'
import { Provider } from 'react-redux'
import appStore from '../reduxtoolkit/appStore'

const Grocery = lazy(()=>import('./components/Grocery'));
const About = lazy(()=>import('./components/About'));
const Layout = () => {
  return (
    <Provider store={appStore}>
       <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
    </Provider>
   
  );
};


const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense> 
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense> 
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      }
    ],
  },
])

export default function App() {
  return <RouterProvider router={appRouter} />
}
 