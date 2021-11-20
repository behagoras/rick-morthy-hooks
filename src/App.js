import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Modal from "./components/Modal";
import CharactersPage from "./pages/CharactersPage";
import CharacterPage from "./pages/CharacterPage";
import RickSanchezPage from "./pages/RickSanchezPage";
import React from "react";
import useModalClose from "./hooks/useModalClose";

function App() {
  const [open, setOpen] = React.useState(true);
  useModalClose({ open, setOpen });
  return (
    <div style={{ height: "100vh" }}>
      <Modal open={open} onClose={() => setOpen(false)}>
        <h1>Modal</h1>
        <p>Gracias por visitar mi página</p>
        <p>Este modal se cerrará automáticamente con el hook useModalClose</p>
        <p>O puedes cerrarlo manualmente con el botón de cerrar</p>
      </Modal>
      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Characters</Link>
          </li>
        </ul>
      </nav>
        <Routes>
          <Route path="/character/:id" element={<CharacterPage />} />
          <Route path="/" element={<CharactersPage />} />
          <Route path="/character/1" element={<RickSanchezPage />} />
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
