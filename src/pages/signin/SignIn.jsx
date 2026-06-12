import "./SignIn.css";
import {useState, useEffect, useContext} from "react";
import {Link}from "react-router-dom";
import logo from "../../assets/logo.png";
import {AuthContext} from "../../contexts/auth.jsx";



export default function SignIn(){

    const {signIn} = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   function handleSignIn(e){
        e.preventDefault();
         if (email !== "" && password !== "") {
            signIn(email, password);
        }
   }

    return(
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt="Logo do Sistema" />
                </div>
                <form onSubmit={handleSignIn} >
                    <h1>Entrar</h1>
                    <input 
                        type="text" 
                        placeholder="email@email@gmail.com" 
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="*****" 
                        value={password} 
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button type="submit">Acessar</button>
                </form>
                <Link to="/register">Criar Conta</Link>
            </div>
        </div>
    )
}