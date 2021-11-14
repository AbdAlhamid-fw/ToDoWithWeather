import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { Routers } from './routers';


function App() {
   const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routers />
      </QueryClientProvider>
    </div>
  );
}

export default App;
