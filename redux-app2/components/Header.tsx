import { useDispatch } from "react-redux";
import Link from "next/link";
import { setPage } from "@/redux/actions/pageActions";


const Header = () => {
    const dispatch = useDispatch();
    const handlePageChange = (page) => {
        dispatch(setPage(page));
      };
    
  return (
    <header>
    <nav>
      <ul className="flex">
        <li>
          <Link href="/" onClick={() => handlePageChange('/')}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={() => handlePageChange('/about')}>
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={() => handlePageChange('/contact')}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Header