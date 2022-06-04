import { Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Create from "./pages/Create";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:noteId" element={<Edit />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
