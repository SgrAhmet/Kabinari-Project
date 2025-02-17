import "./App.css";
//  import MyButton from './components/MyButton';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import YeniProjePage from "./pages/YeniProjePage";
import FirebaseDeneme from "./pages/FirebaseDeneme";
import PageNotFound from "./pages/PageNotFound";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import AllProjects from "./pages/AllProjects";
import { AuthProvider } from "./components/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import ExistentProject from "./pages/ExistentProject";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Yeni-Proje" element={<PrivateRoute element={YeniProjePage} />} />
          <Route path="/Tüm-Projeler" element={<PrivateRoute element={AllProjects} />} />
          <Route path="/Proje/:id" element={<ExistentProject />} />
          <Route path="/settings" element={<PrivateRoute element={Settings} />} />
          <Route path="/firebase" element={<PrivateRoute element={FirebaseDeneme} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
