import './App.css';
import { useState } from 'react';
import Test from './views/test/Test.jsx';

function App() {
  const [testView, setTest] = useState(true)
  return (
  <>
  {testView && <Test/>}
  </>
  );
}
export default App;
