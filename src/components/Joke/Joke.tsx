import React, { useEffect, useState } from 'react';
import './Joke.css'

const Joke: React.FC = () => {
    const [joke, setJoke] = useState<string>('');

    const  fetchJoke = async () => {
        try{
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            if(!response.ok) {
            throw new Error('Не удалось загрузить шутку');
            }
            const data = await response.json();
            setJoke(data.value);
        } catch(error) {
            console.log('Ошибка при загрузке шутки:', error);
        }
    };

    useEffect(() => {
        fetchJoke();
    }, []);
    
    const handleNewJoke = () => {
        fetchJoke();
    };

    return(
        <div className='joke-card'>
        <p className='joke-text'>{joke}</p>
        <button className='joke-btn' onClick={handleNewJoke}>Get New Joke</button>
        </div>
    );
};

export default Joke