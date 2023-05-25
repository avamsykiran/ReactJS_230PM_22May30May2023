
const ContactRow = ({ contact, deleteContact, editContact }) => (
    <div className="row p-2 border-bottom border-primary">
        <div className="col-1 text-end">{contact.id}</div>
        <div className="col">{contact.fullName}</div>
        <div className="col-3">{contact.mailId}</div>
        <div className="col-2 text-center">{contact.mobile}</div>
        <div className="col-2">
            <button className="btn btn-sm btn-secondary me-2" onClick={event => editContact(contact.id)}>EDIT</button>
            <button className="btn btn-sm btn-danger" onClick={event => deleteContact(contact.id)}>DELETE</button>
        </div>
    </div>
);

export default ContactRow;