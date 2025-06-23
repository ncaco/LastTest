import React from 'react';
import type { MenuItem } from '../types/menu';

interface MainContentProps {
  selectedMenuItem: MenuItem | null;
}

const MainContent: React.FC<MainContentProps> = ({ selectedMenuItem }) => {
  return (
    <div className="main-content">
      {selectedMenuItem ? (
        <>
          <h2>{selectedMenuItem.name}</h2>
          <p>{selectedMenuItem.content || '선택된 메뉴에 대한 내용이 없습니다.'}</p>
        </>
      ) : (
        <p>왼쪽 메뉴에서 항목을 선택해주세요.</p>
      )}
    </div>
  );
};

export default MainContent; 