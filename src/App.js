import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {
  Home
} from './Pages/Index';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route 
            exact
            path='/home'
            element={
                 <Home/>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
