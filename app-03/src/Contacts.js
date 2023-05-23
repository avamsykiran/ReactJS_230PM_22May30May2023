import { Component } from 'react';
import ContactsHeader from './ContactsHeader';
import ContactRow from './ContactRow';
import ContactForm from './ContactForm';

class Contacts extends Component {

    constructor() {
        super();
        this.state = {
            contactList: [
                { id: 1, fullName: 'Vamsy Kiran', mailId: 'vamsy.kiran@iiht.com', mobile: '9052224753' },
                { id: 2, fullName: 'Suseela', mailId: 'suseela@iiht.com', mobile: '9052224754' },
                { id: 3, fullName: 'Indhikaa Valli', mailId: 'valli@iiht.com', mobile: '9052224755' },
                { id: 4, fullName: 'Sagar', mailId: 'sagar@iiht.com', mobile: '9052224756' },
                { id: 5, fullName: 'Sriniva', mailId: 'srinu@iiht.com', mobile: '9052224757' }
            ],
            nextContactId: 6
        };
    }

    addContact = contact => {
        contact.id = this.state.nextContactId;
        this.setState({ contactList: [...this.state.contactList, contact], nextContactId: this.state.nextContactId + 1 });
    };

    deleteContact = id => {
        if (window.confirm("Are you sure of deleting contact#" + id + "?")) {
            this.setState({ contactList: this.state.contactList.filter(c => c.id !== id) });
        }
    };

    render() {
        let { contactList } = this.state;

        return (
            <div className='container-fluid p-4'>
                <div className='col-md-8 mx-auto'>
                    <h4>Contacts List</h4>

                    <ContactsHeader />

                    <ContactForm saveContact={this.addContact} />

                    {contactList.length === 0 && (
                        <p className='alert alert-info p-2 fw-bold mt-2'>
                            No Records To Display..
                        </p>
                    )}

                    {contactList.map(c => <ContactRow contact={c} deleteContact={this.deleteContact} />)}
                </div>
            </div>
        );
    }

}

export default Contacts;