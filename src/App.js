import {
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Dashboard1 from "./pages/Dashboard1";

function App() {


  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboards" element={<Dashboard />} />
      <Route path="/dashboards_two" element={<Dashboard1 />} />
    </Routes>
  );
}
export default App;
