import { Outlet } from 'react-router-dom';
import DarkModeProvider from './context/DarkModeProvider';
import Navbar from './components/Navbar';
import './App.css';

export default function App() {
  return (
    <DarkModeProvider>
      <Navbar />
      <Outlet />
    </DarkModeProvider>
  );
}
