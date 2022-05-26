import './App.css';
import { useContext, useState } from 'react';
import Test from './views/test/Test.jsx';
import { ContextProvider } from "./storage/SharedStorage";

function App() {
  const [ currentView, setCurrentView ] = useState(Test)
  return (
  <>
    <ContextProvider>
      {currentView}
    </ContextProvider>
  </>
  );
}
export default App;
