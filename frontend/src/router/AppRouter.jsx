import { Routes, Route } from 'react-router'

// Autenticação (Pessoa B)
import Login from '../pages/auth/Login.jsx'
import Registo from '../pages/auth/Registo.jsx'

// Aluno
import InicioAluno from '../pages/aluno/InicioAluno.jsx'
import PerfilAluno from '../pages/aluno/PerfilAluno.jsx'
import MatchingAluno from '../pages/aluno/MatchingAluno.jsx'
import MateriaisAluno from '../pages/aluno/MateriaisAluno.jsx'
import DetalheMaterialAluno from '../pages/aluno/DetalheMaterialAluno.jsx'
import PedidosAluno from '../pages/aluno/PedidosAluno.jsx'
import DetalhePedidoAluno from '../pages/aluno/DetalhePedidoAluno.jsx'
import ProjetosAluno from '../pages/aluno/ProjetosAluno.jsx'
import DetalheProjetoAluno from '../pages/aluno/DetalheProjetoAluno.jsx'

// Professor
import InicioProfessor from '../pages/professor/InicioProfessor.jsx'
import MateriaisProfessor from '../pages/professor/MateriaisProfessor.jsx'
import ProjetosProfessor from '../pages/professor/ProjetosProfessor.jsx'
import DetalheProjetoProfessor from '../pages/professor/DetalheProjetoProfessor.jsx'

// Administrador
import EstatisticasAdmin from '../pages/admin/EstatisticasAdmin.jsx'
import UtilizadoresAdmin from '../pages/admin/UtilizadoresAdmin.jsx'
import DisciplinasAdmin from '../pages/admin/DisciplinasAdmin.jsx'
import ModeracaoAdmin from '../pages/admin/ModeracaoAdmin.jsx'

function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registo" element={<Registo />} />

      <Route path="/aluno" element={<InicioAluno />} />
      <Route path="/aluno/perfil" element={<PerfilAluno />} />
      <Route path="/aluno/matching" element={<MatchingAluno />} />
      <Route path="/aluno/materiais" element={<MateriaisAluno />} />
      <Route path="/aluno/materiais/:id" element={<DetalheMaterialAluno />} />
      <Route path="/aluno/pedidos" element={<PedidosAluno />} />
      <Route path="/aluno/pedidos/:id" element={<DetalhePedidoAluno />} />
      <Route path="/aluno/projetos" element={<ProjetosAluno />} />
      <Route path="/aluno/projetos/:id" element={<DetalheProjetoAluno />} />

      <Route path="/professor" element={<InicioProfessor />} />
      <Route path="/professor/materiais" element={<MateriaisProfessor />} />
      <Route path="/professor/projetos" element={<ProjetosProfessor />} />
      <Route path="/professor/projetos/:id" element={<DetalheProjetoProfessor />} />

      <Route path="/admin" element={<EstatisticasAdmin />} />
      <Route path="/admin/utilizadores" element={<UtilizadoresAdmin />} />
      <Route path="/admin/disciplinas" element={<DisciplinasAdmin />} />
      <Route path="/admin/moderacao" element={<ModeracaoAdmin />} />
    </Routes>
  )
}

export default AppRouter