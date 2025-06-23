import React, { useState } from 'react';
import type { MenuItem } from '../types/menu';

interface SidebarProps {
  menuItems: MenuItem[];
  onSelectMenuItem: (item: MenuItem) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems, onSelectMenuItem }) => {
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

  const toggleMenu = (id: string) => {
    setExpandedMenus((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="sidebar">
      {menuItems.map((menuItem) => (
        <div key={menuItem.id} className="menu-item">
          <div className="menu-title" onClick={() => toggleMenu(menuItem.id)}>
            {menuItem.name}
            {menuItem.children && (
              <span>{expandedMenus.includes(menuItem.id) ? ' ▲' : ' ▼'}</span>
            )}
          </div>
          {menuItem.children && expandedMenus.includes(menuItem.id) && (
            <div className="submenu">
              {menuItem.children.map((childItem) => (
                <div
                  key={childItem.id}
                  className="submenu-item"
                  onClick={() => onSelectMenuItem(childItem)}
                >
                  {childItem.name}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar; 