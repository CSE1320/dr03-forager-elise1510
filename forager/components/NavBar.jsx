import Link from 'next/link';
import { FaHome, FaSearch } from 'react-icons/fa';
import { TbMushroom } from "react-icons/tb";
import styles from '../styles/NavBar.module.css'; // Import the styles for the NavBar

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <Link href="/backgroundscreen" passHref>
        <div className={styles.navItem}>
          <TbMushroom />
        </div>
      </Link>
      <Link href="/backgroundscreen" passHref>
        <div className={styles.navItem}>
          <FaHome />
        </div>
      </Link>
      <Link href="/backgroundscreen" passHref>
        <div className={styles.navItem}>
          <FaSearch />
        </div>
      </Link>
    </div>
  );
}
