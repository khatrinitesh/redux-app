"use client"
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {

  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = () => {
    dispatch({ type: 'SET_PAGE', payload: 'home' });
    router.push('/about');
  };
  return (
    <>
      <h1 className='font-bold text-[32px]'>Home Page</h1>
      <br />
      <button onClick={handleClick} className='bg-blue-500'>Go to About</button>
    </>
  );
}
