import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login"
import Cadastro from './Cadastro'
import Home from "./Home"
import PrivateRoute from "./PrivateRoute"
import Dashboard from "./dashboard"
import ServicosDashboard from "./components/servicosDashboard"
import  AgendamentosDashboard  from "./components/agendamentosDashboard"
import FuncionarioDashboard from "./components/funcionarioDashboard"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/servicos/dashboard" element={<ServicosDashboard />}/>
        <Route path="/agendamentos/dashboard" element={<AgendamentosDashboard />}/>
        <Route path="/funcionario/dashboard" element={<FuncionarioDashboard />}/>

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
    </Routes>
    </BrowserRouter >
  )
}

export default App
