import { useState } from 'react';

const Home = () => {
    //let name = 'mario';
    const [name, setName] = useState('Mario');
    const [age, setAge] = useState(25);

    const handleClick = () => {    
        setName('Luigi');
        setAge(30);
    }

    return (  
        <div className="home">
            <h2>homepage</h2>
            <br/>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>&nbsp;
        </div>
    );
}
 
export default Home;