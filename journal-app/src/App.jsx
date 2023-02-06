import "./App.scss";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import TimeLine from "./pages/TimeLine/TimeLine";
import Quote from "./pages/Quote/Quote";
import NewEntry from "./pages/NewEntry/NewEntry";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<TimeLine />} />
        <Route path="/new" element={<NewEntry />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>
  );
};

export default App;
