import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs] = useState([
        { id:1, title: 'My new website', body: 'lorem ipsum...', author: 'Mario' },
        { id:2, title: 'Welcome party!', body: 'lorem ipsum...', author: 'Luigi' },
        { id:3, title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Mario' }
    ]);
    return (  
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title="Mario's Blogs" />
        </div>
    );
}
 
export default Home;