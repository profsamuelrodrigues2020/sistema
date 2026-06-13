import {Routes, Route} from "react-router-dom"

//pages
import SignIn from "../pages/signin/SignIn.jsx";
import SignUp from "../pages/signup/SignUp.jsx";
import DashBoard from "../pages/dashboard/DashBoard.jsx";

import Private from './Private'


export default function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/register" element={<SignUp/>} />
            <Route path="/dashboard" element={<Private><DashBoard/></Private>} />
        </Routes>
    )
}
