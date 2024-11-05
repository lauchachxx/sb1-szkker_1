import React, { useState } from 'react';
import { Coffee, Settings, LogOut } from 'lucide-react';
import { useUser } from '../contexts/UserContext';
import SignUpModal from './SignUpModal';

export default function Header() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const { user, signOut } = useUser();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Coffee className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Keyoss Beverage Management</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-sm text-gray-600">Welcome, {user.name}</span>
                <button
                  onClick={signOut}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  title="Sign Out"
                >
                  <LogOut className="w-5 h-5 text-gray-600" />
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsSignUpOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Get Your Keyoss
              </button>
            )}
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Settings className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
      />
    </header>
  );
}