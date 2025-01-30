const Home = () => {

    const handleClick = (e) => {    
        console.log('hello ma man!', e.target);
    }

    const handleClickAgain = (name, e) => {    
        console.log('hello ' + name + ' ma man!', e.target);
    }
    return (  
        <div className="home">
            <h2>homepage</h2>
            <br/>
            <button onClick={handleClick}>Click me</button>&nbsp;
            <button onClick={(e) => handleClickAgain('Johan', e)}>Click me again</button>
        </div>
    );
}
 
export default Home;