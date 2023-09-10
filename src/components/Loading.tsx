import { Loader } from 'lucide-react';
import React from 'react';

const Loading = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <Loader className='h-6 w-6 animate-spin text-sky-800' />
    </div>
  );
};

export default Loading;
