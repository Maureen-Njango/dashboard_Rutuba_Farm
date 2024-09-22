
import React from 'react';
import Link from 'next/link';

const Users = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-8xl font-bold text-green-800 mb-4">Hello!</h1>
      <br />

      <p className="text-1xl mb-8 text-center">
        The simple way To Manage Your Workforce
      </p>
      <br />
      <Link href="/signuppage?type=admin" passHref>
        <button className="w-64 h-20 bg-green-800 text-white py-3 rounded-lg text-xl font-semibold mb-4 hover:bg-green-700 transition-colors">
          Admin
        </button>
        <br />
        <br />
      </Link>
      <Link href="/signuppage?type=agricultural-officer" passHref>
        <button className="w-64 h-20 bg-[#f4c378] text-white py-3 rounded-lg text-xl font-semibold hover:bg-amber-300 transition-colors">
          Agricultural officer
        </button>
      </Link>
    </div>
  );
};

export default Users;