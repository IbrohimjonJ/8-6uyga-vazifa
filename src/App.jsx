import React from 'react'
import BayChart from './componet/BayChart'
import Piechart from './componet/Piechart'
import CountryList from './componet/Counterlist'
import  { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './componet/Home'

const router =createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/Aholisi",
    element:<BayChart/>
  },
  {
    path:"/Maydoni",
    element:<Piechart/>
  }
])


function App() {
  
 
  return  <RouterProvider router={router}></RouterProvider>
  
}

export default App
