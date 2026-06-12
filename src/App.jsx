import {BrowserRouter} from "react-router-dom"
import RoutesApp from "./routes/RoutesApp.jsx";

import AuthProvider from "./contexts/auth.jsx";

export default function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <RoutesApp/>
      </AuthProvider>
    </BrowserRouter>
  )
}
