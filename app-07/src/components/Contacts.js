import { useSelector } from 'react-redux';
import ContactsHeader from './ContactsHeader';
import ContactRow from './ContactRow';
import ContactForm from './ContactForm';

const Contacts = () => {

    let contactList = useSelector(state => state.contactsList);

    return (
        <div className='container-fluid p-4'>
            <div className='col-md-8 mx-auto'>
                <h4>Contacts List</h4>
                <ContactsHeader />
                <ContactForm />

                {contactList.length === 0 && (
                    <p className='alert alert-info p-2 fw-bold mt-2'>
                        No Records To Display..
                    </p>
                )}

                {contactList.map(
                    c => c.isEditing ? <ContactForm key={c.id} contact={c} /> : <ContactRow key={c.id} contact={c} />
                )}
            </div>
        </div>
    );
};

export default Contacts;