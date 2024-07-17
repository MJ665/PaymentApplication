import React from 'react';

// Add any other providers you use (like ThemeProvider, etc.)
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* Add other providers here */}
      {children}
    </>
  );
};

export { Providers };
