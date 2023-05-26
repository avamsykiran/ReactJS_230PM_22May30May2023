import { useState } from "react";
import { useDispatch } from 'react-redux';
import { createAddAction, createReplaceAction, createUnMarkEditableAction } from '../state/contactsActions';


const ContactForm = ({ contact }) => {

    let id = contact ? contact.id : 0;
    let [fullName, setFullName] = useState(contact ? contact.fullName : '');
    let [mailId, setMailId] = useState(contact ? contact.mailId : '');
    let [mobile, setMobile] = useState(contact ? contact.mobile : '');
    let isEditing = contact ? contact.isEditing : undefined;

    const dispatch = useDispatch();

    const formSubmitted = event => {
        event.preventDefault();
        let action = isEditing ? 
            createReplaceAction({ id, fullName, mailId, mobile, isEditing }) : 
            createAddAction({ id, fullName, mailId, mobile, isEditing });
        dispatch(action);
        setFullName('');
        setMailId('');
        setMobile('');
    };

    return (
        <form className="row p-2 border-bottom border-primary" onSubmit={formSubmitted}>
            <div className="col-1 text-end">
                {id}
            </div>
            <div className="col">
                <input type="text" placeholder="full name" className="form-control" value={fullName}
                    onChange={event => setFullName(event.target.value)} />
            </div>
            <div className="col-2">
                <input type="email" placeholder="mail id" className="form-control" value={mailId}
                    onChange={event => setMailId(event.target.value)} />
            </div>
            <div className="col-2 text-center">
                <input type="text" placeholder="mobile" className="form-control" value={mobile}
                    onChange={event => setMobile(event.target.value)} />
            </div>
            {isEditing ?
                <div className="col-2">
                    <button className="btn btn-sm btn-primary me-2">SAVE</button>
                    <button type="button" className="btn btn-sm btn-danger"
                        onClick={event => dispatch(createUnMarkEditableAction(id))}>CANCEL</button>
                </div> :
                <div className="col-2">
                    <button className="btn btn-sm btn-primary">ADD</button>
                </div>
            }
        </form>
    );
};

export default ContactForm;