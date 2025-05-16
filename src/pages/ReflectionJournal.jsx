import React, { useState } from 'react';
import { useQuery, useAction, getRippleStories, addReflection } from 'wasp/client/operations';
import { Link } from 'wasp/client/router';

const ReflectionJournalPage = () => {
  const { data: reflections, isLoading, error } = useQuery(getRippleStories);
  const addReflectionFn = useAction(addReflection);
  const [newReflection, setNewReflection] = useState('');

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleAddReflection = () => {
    if (newReflection.trim()) {
      addReflectionFn({ content: newReflection });
      setNewReflection('');
    }
  };

  return (
    <div className='p-6 bg-white rounded-lg shadow-md'>
      <h1 className='text-2xl font-bold mb-4'>Reflection Journal</h1>
      <div className='mb-6'>
        <textarea
          className='w-full p-2 border rounded-lg mb-2'
          placeholder='Write your reflection...'
          value={newReflection}
          onChange={(e) => setNewReflection(e.target.value)}
        />
        <button
          onClick={handleAddReflection}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Add Reflection
        </button>
      </div>
      <div>
        <h2 className='text-xl font-semibold mb-3'>Your Reflections</h2>
        {reflections && reflections.length === 0 ? (
          <p>No reflections yet. Start by adding your first reflection above!</p>
        ) : (
          reflections.map((reflection) => (
            <div key={reflection.id} className='p-4 mb-4 bg-gray-100 rounded-lg shadow-sm'>
              <p>{reflection.content}</p>
              <small className='text-gray-500'>{new Date(reflection.date).toLocaleDateString()}</small>
            </div>
          ))
        )}
      </div>
      <Link to='/' className='text-blue-500 hover:underline'>Back to Home</Link>
    </div>
  );
};

export default ReflectionJournalPage;
