import React from 'react';
import { useBalance } from '@repo/store/useBalance'; // Adjust the import path as necessary

const HelloPage = () => {
  const balance = useBalance();

  return (
    <div>
      <h1>Hello Page</h1>
      <p>Balance: {balance}</p>
    </div>
  );
};

export default HelloPage;
