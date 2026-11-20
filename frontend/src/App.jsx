import {  Routes, Route, Navigate } from 'react-router'
import { AuthProvider } from './context/AuthContext'
import { RotaProtegida } from './components/layout/RotaProtegida'
import Login from './pages/auth/Login'
import LayoutAluno from './components/layout/LayoutAluno'
import LayoutProfessor from './components/layout/LayoutProfessor'
import LayoutAdmin from './components/layout/LayoutAdmin'
import InicioAluno from './pages/aluno/InicioAluno'
import InicioProfessor from './pages/professor/InicioProfessor'
import InicioAdmin from './pages/admin/InicioAdmin'

function App() {
  return (
    <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login/>} />

          <Route
            path="/aluno"
            element={
              <RotaProtegida papeis={['aluno']}>
                <LayoutAluno />
              </RotaProtegida>
            }
          >
            <Route index element={<InicioAluno />} />
            <Route path="perfil" element={<div>Perfil do Aluno</div>} />
            <Route path="materiais" element={<div>Materiais do Aluno</div>} />
            <Route path="projetos" element={<div>Projetos do Aluno</div>} />
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
            <Route path="turmas" element={<div>Turmas do Professor</div>} />
            <Route path="materiais" element={<div>Materiais do Professor</div>} />
            <Route path="projetos" element={<div>Projetos do Professor</div>} />
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
            <Route path="utilizadores" element={<div>Gestão de Utilizadores</div>} />
            <Route path="cursos" element={<div>Gestão de Cursos</div>} />
            <Route path="configuracoes" element={<div>Configurações</div>} />
          </Route>

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    </AuthProvider>
  )
}

export default App