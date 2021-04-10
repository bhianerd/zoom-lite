import React, { useState } from 'react';
import Home from './Home';

type Props = {
    myNumber: number,
    setSignedIn: (b: boolean) => void, 
}

const SignIn = (props: Props) => {
    const { myNumber, setSignedIn } = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const changeUsername = (event: any) => {
        setUsername(event.target.value);
    }
    const handleClick = () => {
        setSignedIn(true);
    }
    return (
        <div>
        <p>
            Username:
        </p>
        <p>{username}</p>
        <input type="text" value={username} onChange={changeUsername} />
        <p>
            Password:
        </p>
        <input type="password"/>
        <p>{password}</p>
        <br />
        <button onClick={handleClick}>
            Sign In
        </button>
        
        </div>
    )
}

export default SignIn;