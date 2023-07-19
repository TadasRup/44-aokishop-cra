import { Aside } from './components/aside/Aside';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { Main } from './components/main/Main';
import './App.css';
import Helmet from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Header />
      <Aside />
      <Hero />
      <Main />
      <Helmet bodyAttributes={{style: 'background-color : #f5f5fb'}}/>
    </div>
  );
}



export default App;
