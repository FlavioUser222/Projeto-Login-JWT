import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login"
import Cadastro from './Cadastro'
import Home from "./Home"
import PrivateRoute from "./PrivateRoute"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }

        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
