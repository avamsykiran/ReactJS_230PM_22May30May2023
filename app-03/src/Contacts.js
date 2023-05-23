import { Component } from 'react';

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
            ]
        };
    }

    render() {
        return (
            <div className='container-fluid p-4'>
                <h4>Contacts List</h4>

                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ContactId</th>
                            <th>Name</th>
                            <th>Mail</th>
                            <th>Mobile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contactList.map(
                            c => (
                                <tr>
                                    <td>{c.id}</td>
                                    <td>{c.fullName}</td>
                                    <td>{c.mailId}</td>
                                    <td>{c.mobile}</td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default Contacts;