import React from 'react';

const CustomButton = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black';
  
  const variants = {
    primary: 'bg-[#1E40AF] text-white hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(30,64,175,0.8)]',
    secondary: 'bg-transparent border-2 border-[#6B7280] text-gray-200 hover:bg-[#6B7280] hover:text-white',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
