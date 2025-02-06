import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs] = useState([
        { id:1, title: 'My new website', body: 'lorem ipsum...', author: 'Mario' },
        { id:2, title: 'Welcome party!', body: 'lorem ipsum...', author: 'Luigi' },
        { id:3, title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Yoshi' }
    ]);
    return (  
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
        </div>
    );
}
 
export default Home;