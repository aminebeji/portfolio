import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home/template';
import useAnimations from './hooks/animations/useAnimations';
function App() {
  useAnimations()
  return (
   <HomePage />
  );
}

export default App;
