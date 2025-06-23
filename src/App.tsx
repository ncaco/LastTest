import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { menuData } from './data/menuData';
import type { MenuItem } from './types/menu';
import './App.css';

function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);

  const handleSelectMenuItem = (item: MenuItem) => {
    setSelectedMenuItem(item);
  };

  return (
    <div className="container">
      <Sidebar menuItems={menuData} onSelectMenuItem={handleSelectMenuItem} />
      <MainContent selectedMenuItem={selectedMenuItem} />
    </div>
  );
}

export default App;
