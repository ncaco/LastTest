import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import { menuData } from '../data/menuData';
import type { MenuItem } from '../types/menu';

const DocsPage: React.FC = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);

  const handleSelectMenuItem = (item: MenuItem) => {
    setSelectedMenuItem(item);
  };

  return (
    <div>
      <div style={{
        padding: '10px 20px',
        backgroundColor: '#2c3e50',
        borderBottom: '1px solid #34495e',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h2 style={{ margin: 0, color: 'white' }}>정보처리기사 학습 문서</h2>
        <Link 
          to="/"
          style={{
            padding: '8px 16px',
            backgroundColor: '#3498db',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: 'bold',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#2980b9';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#3498db';
          }}
        >
          홈으로
        </Link>
      </div>
      <div className="container">
        <Sidebar menuItems={menuData} onSelectMenuItem={handleSelectMenuItem} />
        <MainContent selectedMenuItem={selectedMenuItem} />
      </div>
    </div>
  );
};

export default DocsPage; 