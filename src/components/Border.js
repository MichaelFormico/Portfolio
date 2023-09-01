import React from 'react';

const Border = ({ children }) => {
  return (
    <div className="fixed inset-6 border-4 border-green-700 overflow-hidden h-9/10 px-4 py-4">
      {children}
    </div>
    
  );
};

export default Border;
