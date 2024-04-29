import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
    const animals = ['bird', 'cow', 'dragon', 'dog', 'cat']
    return animals[Math.floor(Math.random() * animals.length)];
}
function App() {
    const [animals, SetAnimals] = useState([]);
    const handleClick = () => {
        SetAnimals([...animals, getRandomAnimal()]);

    };
    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />;
    });
    return (
    <div className='app'>
        <button onClick={ handleClick }>Add Animal</button>
        <div className='animal-list'>{renderedAnimals}</div>

    </div>
    );
}

export default App;