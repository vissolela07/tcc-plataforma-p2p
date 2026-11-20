import { Routes, Route, Navigate } from 'react-router'
import { AuthProvider } from './context/AuthContext'
import { RotaProtegida } from './components/layout/RotaProtegida'
import LayoutAluno from './components/layout/LayoutAluno'
import LayoutProfessor from './components/layout/LayoutProfessor'
import LayoutAdmin from './components/layout/LayoutAdmin'
import Login from './pages/auth/Login'
import Registo from './pages/auth/Registo'
import InicioAluno from './pages/aluno/InicioAluno'
import PerfilAluno from './pages/aluno/PerfilAluno'
import MatchingAluno from './pages/aluno/MatchingAluno'
import MateriaisAluno from './pages/aluno/MateriaisAluno'
import DetalheMaterialAluno from './pages/aluno/DetalheMaterialAluno'
import PedidosAluno from './pages/aluno/PedidosAluno'
import DetalhePedidoAluno from './pages/aluno/DetalhePedidoAluno'
import ProjetosAluno from './pages/aluno/ProjetosAluno'
import DetalheProjetoAluno from './pages/aluno/DetalheProjetoAluno'
import InicioProfessor from './pages/professor/InicioProfessor'
import MateriaisProfessor from './pages/professor/MateriaisProfessor'
import ProjetosProfessor from './pages/professor/ProjetosProfessor'
import DetalheProjetoProfessor from './pages/professor/DetalheProjetoProfessor'
import InicioAdmin from './pages/admin/InicioAdmin'
import UtilizadoresAdmin from './pages/admin/UtilizadoresAdmin'
import DisciplinasAdmin from './pages/admin/DisciplinasAdmin'
import ModeracaoAdmin from './pages/admin/ModeracaoAdmin'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registo" element={<Registo />} />

        <Route
          path="/aluno"
          element={
            <RotaProtegida papeis={['aluno']}>
              <LayoutAluno />
            </RotaProtegida>
          }
        >
          <Route index element={<InicioAluno />} />
          <Route path="perfil" element={<PerfilAluno />} />
          <Route path="matching" element={<MatchingAluno />} />
          <Route path="materiais" element={<MateriaisAluno />} />
          <Route path="materiais/:id" element={<DetalheMaterialAluno />} />
          <Route path="pedidos" element={<PedidosAluno />} />
          <Route path="pedidos/:id" element={<DetalhePedidoAluno />} />
          <Route path="projetos" element={<ProjetosAluno />} />
          <Route path="projetos/:id" element={<DetalheProjetoAluno />} />
        </Route>

        <Route
          path="/professor"
          element={
            <RotaProtegida papeis={['professor']}>
              <LayoutProfessor />
            </RotaProtegida>
          }
        >
          <Route index element={<InicioProfessor />} />
          <Route path="materiais" element={<MateriaisProfessor />} />
          <Route path="projetos" element={<ProjetosProfessor />} />
          <Route path="projetos/:id" element={<DetalheProjetoProfessor />} />
        </Route>

        <Route
          path="/admin"
          element={
            <RotaProtegida papeis={['administrador']}>
              <LayoutAdmin />
            </RotaProtegida>
          }
        >
          <Route index element={<InicioAdmin />} />
          <Route path="utilizadores" element={<UtilizadoresAdmin />} />
          <Route path="disciplinas" element={<DisciplinasAdmin />} />
          <Route path="moderacao" element={<ModeracaoAdmin />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </AuthProvider>
  )
}

export default App