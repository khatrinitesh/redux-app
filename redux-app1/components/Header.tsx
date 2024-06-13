import Link from 'next/link';
import {  usePathname, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {

    const pathname = usePathname();
    const dispatch = useDispatch();
    const router = useRouter
    const currentPage = useSelector((state) => state.page.currentPage); // Access currentPage from the Redux store

    const handleNavigation = (page) => {
        dispatch({ type: 'SET_PAGE', payload: page });
        router.push(page); // Navigate to the selected page
      };
    
  return (
    <>
    <header>
      <nav>
        <ul className='flex bg-black'>
          <li>
            <Link onClick={() => handleNavigation('/')} href="/" className={`text-white font-bold block p-2 ${pathname === '/' ? 'bg-[red]' : ''}`}>
                Home
            </Link>
          </li>
          <li>
            <Link onClick={() => handleNavigation('/about')} href="/about" className={`text-white font-bold block p-2 ${pathname === '/about' ? 'bg-[red]' : ''}`}>
                About
            </Link>
          </li>
          <li>
            <Link onClick={() => handleNavigation('/contact')} href="/contact" className={`text-white font-bold block p-2 ${pathname === '/contact' ? 'bg-[red]' : ''}`}>
                Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header;