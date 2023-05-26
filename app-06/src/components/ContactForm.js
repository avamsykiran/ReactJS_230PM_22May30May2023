import { useState } from "react";

const ContactForm = ({ contact, saveContact, cancelEdit }) => {

    let id = contact ? contact.id : 0; 
    let [fullName, setFullName] = useState(contact ? contact.fullName : '');
    let [mailId, setMailId] = useState(contact ? contact.mailId : '');
    let [mobile, setMobile] = useState(contact ? contact.mobile : '');
    let isEditing = contact ? contact.isEditing : undefined;

    const formSubmitted = event => {
        event.preventDefault();
        saveContact({ id, fullName, mailId, mobile, isEditing });
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
                        onClick={event => cancelEdit(id)}>CANCEL</button>
                </div> :
                <div className="col-2">
                    <button className="btn btn-sm btn-primary">ADD</button>
                </div>
            }
        </form>
    );
};

export default ContactForm;