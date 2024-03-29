import './App.css';
import NavBar from './Component/Routing/NavBar';
import RoutingComp from './Component/Routing/RoutingComp';
import AsyncAwait from './Component/useEffect/AsyncAwait';
import ComponentDidUpdate from './Component/useEffect/ComponentDidUpdate';
import { DataFetch } from './Component/useEffect/DataFetch';
import { DataFetchOnMount } from './Component/useEffect/DataFetchOnMount';
import FetchProducts from './Component/useEffect/FetchProducts';
import { UsingAxios } from './Component/useEffect/UsingAxios';
import UseReducerComp from './Component/useReducer/UseReducerComp';
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
      {/* <FetchProducts/> */}
      {/* <AsyncAwait/> */}
      {/* <ComponentDidUpdate/> */}
      {/* <UseReducerComp/> */}
      {/* <NavBar/> */}
      <RoutingComp/>
    </div>
  );
}

export default App;
