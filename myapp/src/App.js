
import logo from './logo.svg';
import './App.css';
import Home from './component/home/home';
import { ResponseProvider } from './component/ResponseContext';

function App() {
  return (
      <ResponseProvider>
        <Home/>
      </ResponseProvider>
  );
}

export default App;
