import { Link } from 'react-router-dom';

const Chat = () => {
    return (
        <div>
            <h1>Este es el Chat</h1>
            <div>
                <button><Link to="/">SignOut</Link></button>
            </div>
        </div>
    )
};

export default Chat;