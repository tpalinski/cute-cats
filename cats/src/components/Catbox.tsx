import React, {useState} from 'react';
import { getRandomCat } from "../api/api";

export function Catbox() {

    let [counter, setCounter] = useState(0);
    let [catURL, setCatURL] = useState('https://cdn2.thecatapi.com/images/3kv.jpg')

    const handleClick = () => {
        getRandomCat().then((response: any) => {
            setCatURL(response[0].url);
        })
        setCounter(counter+1);
    }

    return (
        <>  
            <div className='Catscontainer'>
                <img src={catURL} className='Cats'></img>
            </div>
            <h5>Cats requested: {counter}</h5>
            <button className='Catbutton' onClick={handleClick}> Get Cats! </button>
        </>
    );
}