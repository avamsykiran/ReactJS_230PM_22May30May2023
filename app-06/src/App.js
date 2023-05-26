import { Fragment } from 'react';
import Header from './components/Header';
import Contacts from './components/Contacts';

const App = () => (
  <Fragment>
    <Header projectName="AddressBook" />
    <Contacts />
  </Fragment>
);

export default App;
