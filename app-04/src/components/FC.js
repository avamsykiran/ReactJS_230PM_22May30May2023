import { useState, useEffect } from 'react';

const FC = () => {

    let [msgs, setMsgs] = useState(["The constructor got invoked..."]);

    useEffect(() => {
        setMsgs([...msgs, 'The componentDidMount is also invoked']);
    }, []);

    useEffect(() =>{
        if((msgs.length+1)%5==0){
            setMsgs([...msgs, '----------------------------------------------------------------------']);
        }
    },[msgs]);

    const addMsg = () => {
        setMsgs([...msgs, 'a new message added on button click']);
    }

    return (
        <div className='col-sm-6 mx-auto'>
            <h5>React Hooks Demo</h5>

            <ol>
                {msgs.map(m => <li>{m}</li>)}
            </ol>

            <button className="btn btn-primary" onClick={addMsg}>ADD NEW MESSAGE</button>
        </div>
    );
}

export default FC;