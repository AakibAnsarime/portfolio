import React from 'react';
import { MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gray-50 py-20 px-6 md:px-20">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl md:text-4xl font-bold">Ready To Get Started?</h2>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 flex items-center space-x-2">
          <MessageCircle className="w-5 h-5" />
          <span>Let's Talk</span>
        </button>
      </div>
    </div>
  );
};

export default Contact;