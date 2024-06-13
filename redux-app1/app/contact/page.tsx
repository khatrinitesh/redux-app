"use client"
import { useSelector } from 'react-redux';
import Link from 'next/link';

const Contact = () => {
  const currentPage = useSelector((state) => state.page.currentPage);

  return (
    <div>
      <h1 className='font-bold text-[32px]'>Contact Page</h1>
      <p>Current Page: {currentPage}</p>
    </div>
  );
};
export default Contact;