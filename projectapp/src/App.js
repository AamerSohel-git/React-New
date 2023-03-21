import './App.css';
import ComplexCount from './Component/useState/ComplexCount';
import { Switch } from './Component/useState/Switch';
import TextFields from './Component/useState/TextFields';
import ToDoList from './Component/useState/ToDoList';
import UseContext from './Component/useContext/UseContext';

function App() {
  return (
    <div className="App">
      {/* <UseContext/> */}
      {/* <Switch/> */}
      {/* <ComplexCount/> */}
      {/* <TextFields/> */}
      <ToDoList/>
    </div>
  );
}

export default App;
