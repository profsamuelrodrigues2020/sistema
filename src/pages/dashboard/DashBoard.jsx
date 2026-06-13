import { useContext } from 'react'
import {AuthContext} from '../../contexts/auth.jsx'

import Header from '../../components/header/header.jsx'

export default function Dashboard(){
  const { logout } = useContext(AuthContext);

  async function handleLogout(){
    await logout();
  }

  return(
    <div>
       <Header/>
      <h1>Pagina Dashboard</h1>
      <button onClick={handleLogout}>Sair da conta</button>
    </div>
  )
}