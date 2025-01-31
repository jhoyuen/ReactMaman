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