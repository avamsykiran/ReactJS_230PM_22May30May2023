import {Component} from 'react';

class CC extends Component{
    constructor(){
        super();
        this.state={
            msgs:["The constructor got invoked..."]
        };
    }

    componentDidMount(){
        this.setState({msgs: [...this.state.msgs,'The componentDidMount is also invoked']})
    }

    addMsg = () => {
        this.setState({msgs: [...this.state.msgs,'a new message added on button click']})
    }

    render(){
        return (
            <div className='col-sm-6 mx-auto'>
                <h5>Class Component Life Cycle Demo</h5>

                <ol>
                    {this.state.msgs.map(m => <li>{m}</li>)}
                </ol>

                <button className="btn btn-primary" onClick={this.addMsg}>ADD NEW MESSAGE</button>
            </div>
        );
    }

    componentDidUpdate(){
        if((this.state.msgs.length+1)%5==0){
            this.setState({msgs: [...this.state.msgs,'----------------------------------------------------------------------']})
        }
    }
}

export default CC;