"use client";
import React from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';

export default function Week8Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleGitHubSignIn = async () => {
    await gitHubSignIn();
  };

  const handleFirebaseSignOut = async () => {
    await firebaseSignOut();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {user ? (
        <div className="text-center p-6 bg-white shadow rounded-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome {user.displayName || user.email}!</h1>
          <div className="my-4">
            <Link href="/week10/shopping-list">
              <span className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-md shadow cursor-pointer transition-colors duration-300 ease-in-out">
                Shopping List
              </span>
            </Link>
          </div>
          <button
            onClick={handleFirebaseSignOut}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-md shadow cursor-pointer transition-colors duration-300 ease-in-out"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="text-center p-6 bg-white shadow rounded-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Login to Continue</h1>
          <button
            onClick={handleGitHubSignIn}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-md shadow cursor-pointer transition-colors duration-300 ease-in-out"
          >
            Login with GitHub
          </button>
        </div>
      )}
      <div className="mt-4">
        <Link href="../">
          <span className="hover:underline text-blue-600 cursor-pointer">
            Back &lt;-
          </span>
        </Link>
      </div>
    </div>
  );
}
