import "../signin/SignIn.css";
import {useState, useEffect} from "react";
import {Link}from "react-router-dom";
import logo from "../../assets/logo.png";



export default function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        if (name !== ""  && email !== "" && password !== "") {
            alert("Fazer Cadastro")
        }
    }

    return(
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt="Logo do Sistema" />
                </div>
                <form onSubmit={handleSubmit}>
                    <h1>Entrar</h1>
                    <input 
                        type="text" 
                        placeholder="nome do usuário" 
                        value={name} 
                        onChange={(e)=>setName(e.target.value)}
                    />
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
                <Link to="/">Já possui conta? Faça Login</Link>
            </div>
        </div>
    )
}