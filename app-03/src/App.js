import { Fragment } from 'react';
import Header from './Header';
import Contacts from './Contacts';

const App = () => (
  <Fragment>
    <Header projectName="AddressBook" />
    <Contacts />
  </Fragment>
);

export default App;
