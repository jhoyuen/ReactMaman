import { useState } from 'react';

const Create = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, content, author };
    
    setIsPending(true);
    
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
      setIsPending(false);
    });
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={ handleSubmit }>
        <label>Blog title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required />
        <label>Blog content:</label>
        <textarea
          value={content} 
          onChange={(e) => setContent(e.target.value)}  
          required></textarea>
        <label>Blog author:</label>
        <select 
          value ={author} 
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
        <p>{ title }</p>
        <p>{ content }</p>
        <p>{ author }</p>
      </form>
    </div>
  );
}

export default Create;