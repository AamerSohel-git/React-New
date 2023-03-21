import './App.css';
import ComplexCount from './Component/useState/ComplexCount';
import { Switch } from './Component/useState/Switch';
import TextFields from './Component/useState/TextFields';
import ToDoList from './Component/useState/ToDoList';
import UseContext from './Component/useContext/UseContext';
import ParentComp from './Component/Props/Sibling/ParentComp';
import NestedParent from './Component/Props/Nested/NestedParent';
import Parent from './Component/useContextHook/Parent';

function App() {
  return (
    <div className="App">
      {/* <UseContext/> */}
      {/* <Switch/> */}
      {/* <ComplexCount/> */}
      {/* <TextFields/> */}
      {/* <ToDoList/> */}
      {/* <ParentComp/> */}
      {/* <NestedParent/> */}
      <Parent/>
    </div>
  );
}

export default App;
