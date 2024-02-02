import React, { useState } from 'react';
import './App.css'

const Tab = ({ label, activeTab, onClick }) => {
  return (
    <div
      className={`tab ${activeTab === label ? 'active' : ''}`}
      onClick={() => onClick(label)}
    >
      {label}
    </div>
  );
};

const TabContent = ({ children, activeTab, label }) => {
  if (activeTab !== label) return null;
  return <div className="tab-content">{children}</div>;
};

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      <div className="tab-list">
        {children.map((child) => (
          <Tab
            key={child.props.label}
            label={child.props.label}
            activeTab={activeTab}
            onClick={handleTabClick}
          />
        ))}
      </div>
      {children.map((child) => (
        <TabContent
          key={child.props.label}
          label={child.props.label}
          activeTab={activeTab}
        >
          {child.props.children}
        </TabContent>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <Tabs>
      <div className="header" label="Tab 1">
        <p>Content for Tab 1</p>
      </div>
      <div className="header" label="Tab 2">
        <p>Content for Tab 2</p>
      </div>
      <div className="header" label="Tab 3">
        <p>Content for Tab 3</p>
      </div>
    </Tabs>
  );
};

export default App;
