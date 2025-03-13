# ReactMaman
My first React project Ma Man!
- Install `Simple React Snippets` extension ()
- Go to Settings > search for `Emmet` and choose `Emmet: Include Languages` > then add `"javascript": "javascriptreact"`

# Lesson 1 - To create and run new React project
`npx create-react-app ma-man`

`npm run start`
NOTE: node_modules will need to be present, if not present, run `npm install`. I got issue with web-vitals, so had to install it using `npm i web-vitals --save-dev`

`npm i @testing-library/react` (install missing react testing library)

# Lesson 3 - Dynamic values in templates
dynamic values within curly braces { } in jsx 

# Lesson 4 - Multiple Components
- Using `Simple React Snippets` extension:
    - generate new stateless functional components (SFC) using `sfc` snippet shortcut
    - generate new class template e.g `nav.navbar`

# Lesson 7 - UseState Hook
- import { useState } from 'react';
    - usage e.g 
    - const [name, setName] = useState('Mario');
    - const [age, setAge] = useState(25);
    - setName('Luigi');
    - setAge(30);
    - { name } is { age } years old

# Lesson 8 - Output Lists
```
const [blogs,setBlogs] = useState([
        { id:1, title: 'My new website', body: 'lorem ipsum...', author: 'Mario' },
        { id:2, title: 'Welcome party!', body: 'lorem ipsum...', author: 'Luigi' },
        { id:3, title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Yoshi' }
    ]);

{ blogs.map((blog) => (
    <div className="blog-preview" key={ blog.id }>
        <h2>{ blog.title }</h2>
        <p>Written by { blog.author }</p>
    </div>
    )) 
}  
```

# Lesson 13 - useEffect Hook and dependencies
```
import { useEffect } from 'react';

const Home = () => {
    const [name, setName] = useState('mario');

    // runs every time the component renders by checking state changes for values in the dependencies array
    useEffect(() => {
        console.log('useEffect ran');
        console.log(name);
    }, [name]);
}
```

# Lesson 14 - using a JSON server to simulate data source
`npx json-server --watch data/db.json --port 8000`

# Lesson 15 - fetch data with useEffect
```
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
```    

# Lesson 19 - The React Router
In order to be able to render different pages under the SPA, use the react router.
React Router url - https://reactrouter.com/

To install run:
`npm install react-router-dom@latest` (use the latest stable version or double check your react version first to know which vers to install)

# Lesson 20 - Exact match routes
React Router < v6 requires the `exact` keyword in the route in order to tell React to exactly lookup the url
e.g 
```
<Switch>
    <Route exact path="/">
        <Home />
    </Route>
    <Route path="/create">
        <Create />
    </Route>
</Routes>
```

However, React Router v6 and above doesn't support exact anymore. As stated in their documentation: You don't need to use an exact prop on `<Route path="/">` anymore. This is because all paths match exactly by default.
e.g 
```
<Routes>
    <Route e path="/" element={<Home />} />
    <Route path="/create" element={<Create />} />
</Routes>
``` 

# Lesson 21 - Router Links
Implement router links as follows (Link element) in order to prevent requests to be made to the React development server each time a link is clicked:
#### Navbar.js
```

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The Ma Man Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>    
            </div>  
        </nav>  

    );
}
 
export default Navbar;
```