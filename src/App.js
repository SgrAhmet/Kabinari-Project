import "./App.css";
//  import MyButton from './components/MyButton';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Style1 from "./pages/Style1";
import FirebaseDeneme from "./pages/FirebaseDeneme";
import PageNotFound from "./pages/PageNotFound";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      {/* <Link className="link" to="/settings">
        Settings
      </Link> */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/style1" element={<Style1 />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/firebase" element={<FirebaseDeneme />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
