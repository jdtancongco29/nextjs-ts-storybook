// components/SubMenu.tsx

import Link from 'next/link';

interface SubMenuItem {
  label: string;
  href: string;
}

interface SubMenuProps {
  items: SubMenuItem[];
}

const SubMenu: React.FC<SubMenuProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
