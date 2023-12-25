import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CardPage from "./components/CardPage";
import History from "./components/History/Index";
import Catalogue from "./components/Catalogue/Index";
const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creditCard" element={<CardPage />} />
        <Route path="/history" element={<History />} />
        <Route path="/catalogue" element={<Catalogue />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
