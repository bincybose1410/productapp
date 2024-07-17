import './App.css';
import Navbar from './component/Navbar';
import Viewproduct from './component/Viewproduct';
import Addproduct from './component/Addproduct';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/addproduct' element={<Addproduct />} />
        <Route path='/home' element={<Viewproduct />} />
      </Routes>
    </>
  );
}

export default App;
