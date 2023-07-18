import { Aside } from './components/aside/Aside';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import './App.css';
import Helmet from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Header />
      <Aside />
      <Helmet bodyAttributes={{style: 'background-color : #f5f5fb'}}/>
    </div>
  );
}



export default App;
