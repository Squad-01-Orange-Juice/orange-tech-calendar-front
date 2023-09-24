import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import OrgPage from "./pages/OrgPage"
import './App.css'

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/org" element={<OrgPage />} />
        </Routes>
      </>
    </Router>
  )
}

export default App
