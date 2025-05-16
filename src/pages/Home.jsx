import React from 'react';
import { Link } from 'wasp/client/router';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h1 className="text-4xl font-bold mb-6">Welcome to SoulPrint</h1>
      <p className="text-lg mb-10">Track your emotional impact and grow your emotional intelligence with SoulPrint. Join us to start your journey of personal growth.</p>
      <div className="flex space-x-4">
        <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </Link>
        <Link to="/signup" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
