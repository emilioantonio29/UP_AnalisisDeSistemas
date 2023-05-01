import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminScreen from './screens/admin/AdminScreen';
import VideoScreen from './screens/video/VideoScreen';
import HelpScreen from './screens/help/HelpScreen';
import NotFoundScreen from './screens/notfound/NotFoundScreen';
import NavbarComponent from './components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent/>
        <Routes>
          <Route path="/" element={<AdminScreen/>}/>
          <Route path="/video" element={<VideoScreen/>}/>
          <Route path="/help" element={<HelpScreen/>}/>
          <Route path="*" element={<NotFoundScreen/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
