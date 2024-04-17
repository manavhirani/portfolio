'use client';

import { useState } from 'react';

export default function BlogPage() {

  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    { id: 1, title: 'advent of code', content: '2024 aoc wrap-up' },
    { id: 2, title: 'binary and ternary', content: `In programming, we often have to make decisions and control the flow of the program. This is where operators like binary and ternary come in handy.` },
    { id: 3, title: 'find your enigma', content: 'This is the content of Blog Post 3' },
    { id: 4, title: 'Introduction to React Hooks', content: 'React Hooks are a powerful feature introduced in React 16.8. They allow you to use state and other React features without writing a class.' },
    { id: 5, title: 'The Art of Debugging', content: 'Debugging is an essential skill for developers. It involves identifying and fixing errors or bugs in a program.' },
    { id: 6, title: 'Mastering CSS Grid', content: 'CSS Grid Layout is a two-dimensional layout system for the web that allows us to create complex grid-based layouts with ease.' },
    { id: 7, title: 'Getting Started with Node.js', content: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. It allows you to run JavaScript on the server side.' },
    { id: 8, title: 'The Power of Regular Expressions', content: 'Regular expressions (regex) are a powerful tool for pattern matching and string manipulation.' },
    { id: 9, title: 'Understanding Asynchronous JavaScript', content: 'Asynchronous JavaScript allows us to execute multiple tasks concurrently without blocking the main thread.' },
    { id: 10, title: 'Data Structures in JavaScript', content: 'Data structures are essential for organizing and storing data efficiently. In JavaScript, we have built-in data structures like arrays and objects, as well as custom data structures.' }
  ];

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (

    <div className="w-full p-4 gap-6 flex flex-col">
      <input
        className='input input-bordered p-4 rounded-full w-full placeholder-secondary max-w-md self-center'
        type="text"
        placeholder="search blog posts"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      >
      </input>

      <div className='flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
        {filteredPosts.map((post) => (
          <div key={post.id} className={`card border-2 border-secondary/50 cursor-pointer rounded-3xl`}>
            <div className='card-body'>
              <h2 className='font-black text-2xl font-mono line-clamp-2'>{post.title}</h2>
              <p className='line-clamp-2 text-lg'>{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}