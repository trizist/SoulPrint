import React from 'react';
import { useQuery } from 'wasp/client/operations';
import { getRippleStories } from 'wasp/client/operations';

const RippleFeedPage = () => {
  const { data: rippleStories, isLoading, error } = useQuery(getRippleStories);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className="p-4 bg-slate-50 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Your Ripple Stories</h1>
      {rippleStories.length === 0 ? (
        <p className="text-gray-500">You have no Ripple Stories yet.</p>
      ) : (
        rippleStories.map((story) => (
          <div key={story.id} className="mb-4 p-4 bg-white shadow rounded-lg">
            <p>{story.content}</p>
            <p className="text-sm text-gray-500 mt-2">{new Date(story.date).toLocaleDateString()}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default RippleFeedPage;
