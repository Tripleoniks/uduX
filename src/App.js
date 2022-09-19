//Global Style

import FloorNav from './components/FloorNav/FloorNav';
import GlobalStyle from './globalStyles';
import './App.css';

// Page
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Dashboard />
      <FloorNav />
    </div>
  );
}

export default App;
