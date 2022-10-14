import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppBarSearch from '../Components/AppBarMUI'
import SideNavBar from '../Components/SideNavBar/SideNavBar'
import Account from './Dashboard Nested Screens/Account'
import Analytics from './Dashboard Nested Screens/Analytics'
import Customer from './Dashboard Nested Screens/Customer'
import Finance from './Dashboard Nested Screens/Finance'
import Orders from './Dashboard Nested Screens/Orders'
import Overview from './Dashboard Nested Screens/Overview'
import Product from './Dashboard Nested Screens/Product'


import './DashboardStyling.css'


export default function Dashboard() {

   

    return (
        <>
        

        <div className="container">
            <div className="sideNav">
                    <SideNavBar/> 
            </div>
            <div className="mainData">
                
         <div className="cardItem">
        
         <Routes>
            <Route path='/account' element={< Account/>}/>
            <Route path='/analytics' element={< Analytics/>}/>
            <Route path='/customer' element={< Customer/>}/>
            <Route path='/finance' element={< Finance/>}/>
            <Route path='/orders' element={< Orders/>}/>
            <Route path='/overview' element={< Overview/>}/>
            <Route path='/product' element={< Product/>}/>
        </Routes>
         </div>

        
            </div>
        </div>

        </>
    )
}

