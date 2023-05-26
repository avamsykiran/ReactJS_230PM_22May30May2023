import { useState, useEffect } from 'react';
import axios  from 'axios';

import ContactsHeader from './ContactsHeader';
import ContactRow from './ContactRow';
import ContactForm from './ContactForm';

const apiUrl = "http://localhost:9999/contacts";

const Contacts = () => {

    let [contactList, setContactList] = useState(null);
    let [errMsg, setErrMsg] = useState(null);

    useEffect(() => {
        axios.get(apiUrl)
            .then(resp => setContactList([...resp.data]))
            .catch(err => { console.log(err); setErrMsg("Unable to load recoreds! Please try later!") });
    }, []);

    const addContact = contact => {
        axios.post(apiUrl, contact)
            .then(resp => setContactList([...contactList, resp.data]))
            .catch(err => { console.log(err); setErrMsg("Unable to add the recored! Please try later!") });
    };

    const deleteContact = id => {
        if (window.confirm("Are you sure of deleting contact#" + id + "?")) {
            axios.delete(apiUrl + "/" + id)
                .then(resp => setContactList(contactList.filter(c => c.id !== id)))
                .catch(err => { console.log(err); setErrMsg("Unable to delete the recored! Please try later!") });

        }
    };

    const markEditable = id => {
        setContactList(contactList.map(c => c.id != id ? c : { ...c, isEditing: true }));
    }

    const unmarkEditable = id => {
        setContactList(contactList.map(c => c.id != id ? c : { ...c, isEditing: undefined }));
    }

    const updateContact = contact => {
        axios.put(apiUrl + "/" + contact.id, { ...contact, isEditing: undefined })
            .then(resp => setContactList(contactList.map(c => c.id != contact.id ? c : resp.data)))
            .catch(err => { console.log(err); setErrMsg("Unable to add the recored! Please try later!") });
    }

    return (
        <div className='container-fluid p-4'>
            <div className='col-md-8 mx-auto'>
                <h4>Contacts List</h4>

                <ContactsHeader />

                <ContactForm saveContact={addContact} />

                {!contactList && !errMsg && (
                    <p className='alert alert-info p-2 fw-bold mt-2'>
                        Please wait while loading....
                    </p>
                )}

                {contactList && contactList.length === 0 && (
                    <p className='alert alert-info p-2 fw-bold mt-2'>
                        No Records To Display..
                    </p>
                )}

                {errMsg && (
                    <p className='alert alert-danger p-2 fw-bold mt-2'>
                       { errMsg }
                    </p>
                )}

                {contactList && contactList.length > 0 &&
                    contactList.map(
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