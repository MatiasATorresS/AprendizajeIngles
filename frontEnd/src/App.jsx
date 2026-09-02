import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';

const Home = lazy(() => import('./pages/Home'));
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const HomeUser = lazy(() => import('./pages/HomeUser'));
const Users_Admin = lazy(() => import('./pages/Users_Admin'));
const Statistics = lazy(() => import('./pages/Statistics'));
const Materials = lazy(() => import('./pages/Materials'));
const MaterialDetail = lazy(() => import('./pages/MaterialDetail'));
const Exercises = lazy(() => import('./pages/Exercises'));
const UserStat = lazy(() => import('./pages/UserStat'));

function PageLoader() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-muted)',
        fontFamily: 'var(--font-body)',
      }}>
      <p role="status">Cargando…</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<HomeUser />} />
          <Route path="/users" element={<Users_Admin />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/materials/:id" element={<MaterialDetail />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/user-statistics" element={<UserStat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;