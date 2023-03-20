import './App.css';
import ComplexCount from './Component/ComplexCount';
import { Switch } from './Component/Switch';
import TextFields from './Component/TextFields';
import ToDoList from './Component/ToDoList';
import UseContext from './Component/UseContext';

function App() {
  return (
    <div className="App">
      {/* <UseContext/> */}
      {/* <Switch/> */}
      {/* <ComplexCount/> */}
      <ToDoList/>
      {/* <TextFields/> */}
    </div>
  );
}

export default App;
