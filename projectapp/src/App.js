import './App.css';
import { DataFetch } from './Component/useEffect/DataFetch';
import { DataFetchOnMount } from './Component/useEffect/DataFetchOnMount';
import FetchProducts from './Component/useEffect/FetchProducts';
import { UsingAxios } from './Component/useEffect/UsingAxios';
// import ComplexCount from './Component/useState/ComplexCount';
// import { Switch } from './Component/useState/Switch';
// import TextFields from './Component/useState/TextFields';
// import ToDoList from './Component/useState/ToDoList';
// import UseContext from './Component/useContext/UseContext';
// import ParentComp from './Component/Props/Sibling/ParentComp';
// import NestedParent from './Component/Props/Nested/NestedParent';
// import Parent from './Component/useContextHook/Parent';
import UseRefHook from './Component/useRef/UseRefHook';

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
      {/* <Parent/> */}
      {/* <UseRefHook/> */}
      {/* <DataFetch/> */}
      {/* <UsingAxios/> */}
      {/* <DataFetchOnMount/> */}
      <FetchProducts/>
    </div>
  );
}

export default App;
