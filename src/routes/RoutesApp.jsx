import {Routes, Route} from "react-router-dom"

//pages
import SignIn from "../pages/signin/SignIn.jsx";
import SignUp from "../pages/signup/SignUp.jsx";
import DashBoard from "../pages/dashboard/DashBoard.jsx";
import Profile from "../pages/profile/profile.jsx";
import Customers from "../pages/customers/customers.jsx";
import New from "../pages/new/new.jsx";

import Private from './Private'


export default function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/register" element={<SignUp/>} />
            <Route path="/dashboard" element={<Private><DashBoard/></Private>} />
            <Route path="/profile" element={<Private><Profile/></Private>} />
            <Route path="/customers" element={<Private><Customers/></Private>} />
            <Route path="/new" element={<Private><New/></Private>} />
            <Route path="/new/:id" element={<Private><New/></Private>} />
        </Routes>
    )
}
