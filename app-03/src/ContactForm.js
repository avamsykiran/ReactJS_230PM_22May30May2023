import { Component } from "react";

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = props.contact ? { ...props.contact } : { id: 0, fullName: '', mailId: '', mobile: '' };
    }

    formSubmitted = event => {
        event.preventDefault();
        this.props.saveContact({ ...this.state });
        this.setState({ id: 0, fullName: '', mailId: '', mobile: '' });
    };

    render() {
        let { id, fullName, mailId, mobile, isEditing } = this.state;

        return (
            <form className="row p-2 border-bottom border-primary" onSubmit={this.formSubmitted}>
                <div className="col-1 text-end">
                    {id}
                </div>
                <div className="col">
                    <input type="text" placeholder="full name" className="form-control" value={fullName}
                        onChange={event => this.setState({ fullName: event.target.value })} />
                </div>
                <div className="col-2">
                    <input type="email" placeholder="mail id" className="form-control" value={mailId}
                        onChange={event => this.setState({ mailId: event.target.value })} />
                </div>
                <div className="col-2 text-center">
                    <input type="text" placeholder="mobile" className="form-control" value={mobile}
                        onChange={event => this.setState({ mobile: event.target.value })} />
                </div>
                {isEditing ?
                    <div className="col-2">
                        <button className="btn btn-sm btn-primary me-2">SAVE</button>
                        <button type="button" className="btn btn-sm btn-danger"
                            onClick={event => this.props.cancelEdit(id)}>CANCEL</button>
                    </div> :
                    <div className="col-2">
                        <button className="btn btn-sm btn-primary">ADD</button>
                    </div>
                }
            </form>
        );
    }
}

export default ContactForm;