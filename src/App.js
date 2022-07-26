import { Routes, Route } from "react-router-dom";
import Step1 from "./pages/Step1/Step1";
import Step2 from "./pages/Step2/Step2";

function App() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Routes>
        <Route path='/' element={<Step1 />}/>
        <Route path='/step2' element={<Step2 />}/>
      </Routes>
    </div>
  );
}

export default App;
 