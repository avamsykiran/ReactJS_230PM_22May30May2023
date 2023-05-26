
import { ADD, REPLACE, DELETE, MARK_EDITABLE, UNMARK_EDITABLE } from './contactsActions';

const initalState = () => ({
    contactsList: [
        { id: 1, fullName: 'Vamsy Kiran', mailId: 'vamsy.kiran@iiht.com', mobile: '9052224753' },
        { id: 2, fullName: 'Suseela', mailId: 'suseela@iiht.com', mobile: '9052224754' },
        { id: 3, fullName: 'Indhikaa Valli', mailId: 'valli@iiht.com', mobile: '9052224755' },
        { id: 4, fullName: 'Sagar', mailId: 'sagar@iiht.com', mobile: '9052224756' },
        { id: 5, fullName: 'Sriniva', mailId: 'srinu@iiht.com', mobile: '9052224757' }
    ]
});

const contactsReducer = (oldState = initalState(), action) => {

    let { contactsList } = oldState;

    switch (action.type) {
        case ADD:
            contactsList = [...contactsList, action.contact];
            break;
        case REPLACE:
            contactsList = contactsList.map(c => c.id != action.contact.id ? c : { ...action.contact, isEditable: undefined });
            break;
        case DELETE:
            contactsList = contactsList.filter(c => c.id != action.id);
            break;
        case MARK_EDITABLE:
            contactsList = contactsList.map(c => c.id != action.id ? c : { ...c, isEditable: true });
            break;
        case UNMARK_EDITABLE:
            contactsList = contactsList.map(c => c.id != action.id ? c : { ...c, isEditable: undefined });
            break;
    }

    return { contactsList };
}

export default contactsReducer;