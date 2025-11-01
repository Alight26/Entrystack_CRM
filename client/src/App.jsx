import { useState } from 'react';
import './App.css';
import CreatorList from './components/CreatorList';
import CreatorForm from './components/CreatorForm';

function App() {
  const [creators, setCreators] = useState([]);

  const addCreator = newCreator => {
    setCreators(prev => [...prev, newCreator]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Creator CRM Dashboard</h1>
      <CreatorForm onAdd={addCreator} />
      <CreatorList creators={creators} />
    </div>
  );
}

export default App;
