import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    // runs every time the component renders by checking state changes for values in the dependencies array
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                console.log(data);
            });
    }, []);

    return (  
        <div className="home">
            { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
        </div>
    );
}
 
export default Home;