import { useState } from 'react';
import ContactsHeader from './ContactsHeader';
import ContactRow from './ContactRow';
import ContactForm from './ContactForm';

const Contacts = () => {

    let [contactList, setContactList] = useState([
        { id: 1, fullName: 'Vamsy Kiran', mailId: 'vamsy.kiran@iiht.com', mobile: '9052224753' },
        { id: 2, fullName: 'Suseela', mailId: 'suseela@iiht.com', mobile: '9052224754' },
        { id: 3, fullName: 'Indhikaa Valli', mailId: 'valli@iiht.com', mobile: '9052224755' },
        { id: 4, fullName: 'Sagar', mailId: 'sagar@iiht.com', mobile: '9052224756' },
        { id: 5, fullName: 'Sriniva', mailId: 'srinu@iiht.com', mobile: '9052224757' }
    ]);

    let [nextContactId, setNextContactId] = useState(6);

    const addContact = contact => {
        contact.id = nextContactId;
        setContactList([contactList, contact]);
        setNextContactId(nextContactId + 1);
    };

    const deleteContact = id => {
        if (window.confirm("Are you sure of deleting contact#" + id + "?")) {
            setContactList(contactList.filter(c => c.id !== id));
        }
    };

    const markEditable = id => {
        setContactList(contactList.map(c => c.id != id ? c : { ...c, isEditing: true }));
    }

    const unmarkEditable = id => {
        setContactList(contactList.map(c => c.id != id ? c : { ...c, isEditing: undefined }));
    }

    const updateContact = contact => {
        setContactList(contactList.map(c => c.id != contact.id ? c : { ...contact, isEditing: undefined }));
    }

    return (
        <div className='container-fluid p-4'>
            <div className='col-md-8 mx-auto'>
                <h4>Contacts List</h4>

                <ContactsHeader />

                <ContactForm saveContact={addContact} />

                {contactList.length === 0 && (
                    <p className='alert alert-info p-2 fw-bold mt-2'>
                        No Records To Display..
                    </p>
                )}

                {contactList.map(
                    c => c.isEditing ?
                        <ContactForm
                            key={c.id}
                            contact={c}
                            saveContact={updateContact}
                            cancelEdit={unmarkEditable} /> :
                        <ContactRow
                            key={c.id}
                            contact={c}
                            editContact={markEditable}
                            deleteContact={deleteContact} />
                )}
            </div>
        </div>
    );
};

export default Contacts;