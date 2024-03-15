// components/Menu.tsx

import Link from 'next/link';
import SubMenu from './SubMenu';

interface MenuItem {
  label: string;
  href: string;
  subMenu?: MenuItem[];
}

interface MenuProps {
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <nav>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>
              {item.label}
            </Link>
            {item.subMenu && <SubMenu items={item.subMenu} />}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
