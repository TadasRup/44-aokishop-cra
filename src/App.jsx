import { Aside } from './components/aside/Aside';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';
import Helmet from 'react-helmet';
import React from 'react';
import Button from './components/hero/Button';
import './App.css';

function App() {
  const users = [
    {
      id: 1,
      name: '',
      img: '',
    }];

  const data = [
    {
      id: 1,
      stage: 'certification',
      tag: 'DOCS',
      task: 'Upload qualification information',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
      events: [
        {
          date: 1650532562551,
          type: 'fileUpload',
          userId: 1,
        },
      ],
    },
    {
      id: 2,
      stage: 'product',
      tag: 'INFO',
      task: 'Upload a product',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
      events: [
        {
          date: 1650532562551,
          type: 'fileUpload',
          userId: 1,
        },
      ],
    },
    {
      id: 3,
      stage: 'processing',
      tag: 'CSS',
      task: 'Responsive design',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
    {
    id: 3,
    stage: 'processing',
    tag: 'CSS',
    task: 'Responsive design',
    createdAt: 1650532562551,
    dueDate: 1650532562551,
  },
   
  ];

  return (
    <div className="App">
      <Header />
      <Aside />
      <Hero data={data} />
      <Main data={data} />
      <Footer />
      <Helmet bodyAttributes={{style: 'background-color : #f5f5fb'}}/>
    </div>
  );
}




export default App;
