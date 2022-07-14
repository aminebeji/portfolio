import S from './style/app.module.scss';
import useAnimations from './hooks/animations/useAnimations';
import "./style/variables.scss"
import "./style/global.scss"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './Pages/HomePage/template';
import 'animate.css';
function App() {
  useAnimations()
  return (
    <div className={S.Container} >
      {
        // <BrowserRouter>
        //   <Routes>
        //     <Route exact path="/" element={<HomePage />} />
        //   </Routes>
        // </BrowserRouter>
      }
      <HomePage />
    </div>
  );
}

export default App;
