import { BrowserRouter, NavLink, Route, Router, Routes } from "react-router-dom";
import './navStyling.css';
import About from "../Screens/about";
import Electronic from "../Screens/electronics";
import Jewellery from "../Screens/jewellery";
import Mens from "../Screens/mens";
import Women from "../Screens/women";

export default function WebRouter() {
    return (
        <>
            <BrowserRouter>
                <div className="navBar">
                    <img src="https://www.freepnglogos.com/uploads/lion-logo-png/lion-png-transparent-image-fro-images-25.png" alt="logo" width={50} />

                    <ul className="navLinks">
                        <li>
                            <NavLink to='/' className='link' >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/mens' className='link' >Mens</NavLink>
                        </li>
                        <li>
                            <NavLink to='/women' className='link'>Women</NavLink>
                        </li>
                        <li>
                            <NavLink to='/electronics' className='link'>Electronics</NavLink>
                        </li>
                        <li>
                            <NavLink to='jewellery' className='link'>Jewellery</NavLink>
                        </li>
                    </ul>
                </div>

                <Routes>
                    <Route path="/" element={<About />}></Route>
                    <Route path='/electronics' element={<Electronic />} />
                    <Route path="/jewellery" element={<Jewellery />} />
                    <Route path="/mens" element={<Mens />} />
                    <Route path="/women" element={<Women />} />
                </Routes>
            </BrowserRouter>
        </>
    )
} 