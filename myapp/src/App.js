
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './component/home/home';
<<<<<<< HEAD
import { ResponseProvider } from './component/ResponseContext';

function App() {
  return (
      <ResponseProvider>
        <Home/>
      </ResponseProvider>
=======
import Form_User from "./component/Form_PopUp/Form_User";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form_User />} />

        </Routes>
      </Router>
>>>>>>> bb6b09c5d83abc7a0eda83f163e52dc9c8bed205
  );
}

export default App;
