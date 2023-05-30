import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Contacts from './components/Contacts';
import AboutUs from './components/AboutUs';

const App = () => (
  <BrowserRouter>
    <Header projectName="AddressBook" />
    
    <Routes>
      <Route path='/' element={<Contacts />} />
      <Route path="/aboutUs" element={<AboutUs />} />
    </Routes>
  </BrowserRouter>
);

export default App;
