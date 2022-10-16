import { BrowserRouter, Navigate, NavLink, Route, Router, Routes } from "react-router-dom";
import './navStyling.css';
import About from "../Screens/about";
import Electronic from "../Screens/electronics";
import Jewellery from "../Screens/jewellery";
import Mens from "../Screens/mens";
import Women from "../Screens/women";
import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Dashboard from "../Screens/dashboard";
import DataItem from "../Screens/DataItem";
import News from "../Screens/News";


export default function WebRouter() {
    let [menu, setMenu] = useState('true');
    let [activeMenu, setActiveMenu] = useState('navLinks');

    useEffect(()=>{
        menu? setActiveMenu('navLinks') : setActiveMenu("navLinks active")
    },[menu])

    return (
        <>
            <BrowserRouter>
                <div className="navBar">
                    <div style={{display:'flex', alignItems:'center', gap:'15px'}}>
                        <img src="https://www.freepnglogos.com/uploads/lion-logo-png/lion-png-transparent-image-fro-images-25.png" alt="logo" width={40} />
                        <span className="logo">Shopify</span>
                    </div>

                   <div>
                   <ul className={activeMenu}>
                        <li>
                            <NavLink to='/' className='link' onClick={() => setMenu(!menu)} >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/mens' className='link' onClick={() => setMenu(!menu)} >Mens</NavLink>
                        </li>
                        <li>
                            <NavLink to='/women' className='link' onClick={() => setMenu(!menu)}>Women</NavLink>
                        </li>
                        <li>
                            <NavLink to='/electronics' className='link' onClick={() => setMenu(!menu)}>Electronics</NavLink>
                        </li>
                        <li>
                            <NavLink to='jewellery' className='link' onClick={() => setMenu(!menu)}>Jewellery</NavLink>
                        </li>
                        <li>
                            <NavLink to='Dashboard' className='link' onClick={() => setMenu(!menu)}>Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to='news' className='link' onClick={() => setMenu(!menu)}>News</NavLink>
                        </li>
                    </ul>

                    <div className="icon">
                    {menu? <MenuIcon onClick={()=>setMenu(!menu)} sx={{color:'white'}} /> : <CloseIcon onClick={()=>setMenu(!menu)} sx={{color:'white'}} />}
                    </div>

                   </div>
                   
                    
                </div>

                <Routes>
                    <Route path="/" element={<About />}></Route>
                    <Route path='/electronics' element={<Electronic />} />
                    <Route path="/jewellery" element={<Jewellery />} />
                    <Route path="/mens" element={<Mens />} />
                    <Route path="/women" element={<Women />} />
                    <Route path="/dashboard/*" element={<Dashboard/>} />
                    <Route path="/DataItem" element={<DataItem/>} />
                    <Route path="/news" element={<News/>}></Route>
                    <Route path="/*" element={<Navigate to = '/'/> } ></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
} 