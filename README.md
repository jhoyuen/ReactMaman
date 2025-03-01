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