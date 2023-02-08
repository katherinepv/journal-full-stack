import "./App.scss";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import TimeLine from "./pages/TimeLine/TimeLine";
import Quote from "./pages/Quote/Quote";
import CreateEntry from "./pages/CreateEntry/CreateEntry";
import ViewEntry from "./pages/ViewEntry/ViewEntry";
import UpdateEntry from "./pages/UpdateEntry/UpdateEntry";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<TimeLine />} />
        <Route path="/new" element={<CreateEntry />} />
        <Route path="/entry/:id" element={<ViewEntry />} />
        <Route path="/update" element={<UpdateEntry />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>
  );
};

export default App;
