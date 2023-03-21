import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { ContextProviderApp } from '../src/context/appContext';

export function App() {
  return (
    <ContextProviderApp>
      <Navbar />
    </ContextProviderApp>
  );
}
