import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminScreen from './screens/AdminScreen';
import VideoScreen from './screens/VideoScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import NavbarComponent from './components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent/>
        <Routes>
          <Route path="/"  element={<AdminScreen/>}/>
          <Route path="/video"  element={<VideoScreen/>}/>
          <Route path="*"  element={<NotFoundScreen/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
