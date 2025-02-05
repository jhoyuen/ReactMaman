import { useState } from 'react';

const Home = () => {
    const [blogs,setBlogs] = useState([
        { id:1, title: 'My new website', body: 'lorem ipsum...', author: 'Mario' },
        { id:2, title: 'Welcome party!', body: 'lorem ipsum...', author: 'Luigi' },
        { id:3, title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Yoshi' }
    ]);
    return (  
        <div className="home">
            { blogs.map((blog) => (
                <div className="blog-preview" key={ blog.id }>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
                )) 
            }    
        </div>
    );
}
 
export default Home;