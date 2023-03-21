import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Inventory } from './components/Inventory/Inventory';
import { ContextProviderApp } from '../src/context/appContext';
import { AddRemoveModal } from './components/AddRemoveModal/AddRemoveModal';

export function App() {
  return (
    <ContextProviderApp>
      <Navbar />
      <AddRemoveModal />
      <main>
        <Inventory />
      </main>
    </ContextProviderApp>
  );
}
