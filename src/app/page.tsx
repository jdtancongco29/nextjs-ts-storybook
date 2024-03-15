import styles from "./page.module.css";
import Link from 'next/link';
import Menu from "./Components/Menu/Menu";
interface MenuItem {
  label: string;
  href: string;
  subMenu?: MenuItem[];
}
export default function Home() {
  const menuItems: MenuItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { 
      label: 'Services',
      href: '/services',
      subMenu: [
        { label: 'Submenu Item 1', href: '/submenu1' },
        { label: 'Submenu Item 2', href: '/submenu2' },
      ]
    },
    { label: 'Contact', href: '/contact' },
  ];
  return (
    <main className={styles.main}>
      <h1>Homepage</h1>
      <Menu 
        items={menuItems}
      />
    </main>
  );
}
