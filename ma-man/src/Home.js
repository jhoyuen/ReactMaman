import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { id:1, title: 'My new website', body: 'lorem ipsum...', author: 'Mario' },
        { id:2, title: 'Welcome party!', body: 'lorem ipsum...', author: 'Luigi' },
        { id:3, title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Mario' }
    ]);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    // runs every time the component renders by checking state changes for values in the dependencies array
    useEffect(() => {
        console.log('useEffect ran');
        console.log(name);
    }, [name]);

    return (  
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <button onClick={() => setName('luigi')}>change name</button>
            <p>{ name }</p>
        </div>
    );
}
 
export default Home;