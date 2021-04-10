import React, {useState} from 'react';
type Hackit  = {
    name: string, 
    description: string
} 

const Home = () => {
    const [hackits, setHackits] = useState<Hackit[]>([]);
    const [newHackitName, setNewHackitName] = useState('');

    const changeName = (event: any) => {
        setNewHackitName(event.target.value);
    }

    const createHackIt = () => {
        setHackits((oldHackits) => [...oldHackits, {
            name: newHackitName,
            description: "temp"
        }])
    }

    return (
        <div>
            {hackits.map}
            <p>
                Number: of hackits:
            </p>
            <p>
                {hackits.length}
            </p>
            <p>
                Name
            </p>
            <p>
                <input type="text">
                    value={newHackitName}
                    onChange={changeName}
                </input>
            </p>
            <button onClick={createHackIt}>

            </button>
        </div>
    )
}
export default Home;