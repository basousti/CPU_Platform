import './App.css';
import Sidebar from './components/SideBar';
import Container from './components/Members/Container';
import RightBar from './components/eventsCpu/rightBar';

function App() {
  return (
    <div className="App"> 
      <Sidebar/>
      <Container/>
      <RightBar/>
    </div>
  );
}

export default App;
