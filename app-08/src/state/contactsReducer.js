
import { WAIT,ERR,REFRESH, ADD, REPLACE, DELETE, MARK_EDITABLE, UNMARK_EDITABLE } from './contactsActions';

const initalState = () => ({
    contactsList: null,
    msg:null,
    errMsg:null
});

const contactsReducer = (oldState = initalState(), action) => {

    let { contactsList,msg,errMsg } = oldState;

    switch (action.type) {
        case REFRESH: 
            contactsList = [...action.contactsList];
            msg=null;
            errMsg=null;
            break;
        case WAIT:
            msg=action.msg;
            errMsg=null;
            break;
        case ERR:
            msg=null;
            errMsg=action.errMsg;
            break;
        case ADD:
            contactsList = [...contactsList, action.contact];
            msg=null;
            errMsg=null;
            break;
        case REPLACE:
            contactsList = contactsList.map(c => c.id != action.contact.id ? c : { ...action.contact, isEditing: undefined });
            msg=null;
            errMsg=null;
            break;
        case DELETE:
            contactsList = contactsList.filter(c => c.id != action.id);
            msg=null;
            errMsg=null;
            break;
        case MARK_EDITABLE:
            contactsList = contactsList.map(c => c.id != action.id ? c : { ...c, isEditing: true });
            break;
        case UNMARK_EDITABLE:
            contactsList = contactsList.map(c => c.id != action.id ? c : { ...c, isEditing: undefined });
            break;
    }

    return { contactsList,msg,errMsg };
}

export default contactsReducer;