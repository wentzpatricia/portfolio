import { navigationItems } from "../../constants/menu";

interface MobileMenuProps {
  isOpen: boolean;
  handleSmoothScroll: (id: string) => void;
}

export default function MobileMenu({ isOpen, handleSmoothScroll }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="sm:hidden">
      <div className="space-y-1 px-2 pt-2 pb-3">
        {navigationItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              handleSmoothScroll(item.href.substring(1));
            }}
            className={`${
              item.current
                ? "bg-medium-red-violet-900 text-white"
                : "text-gray-300 hover:bg-medium-red-violet-700 hover:text-white"
            } 
              block rounded-md px-3 py-2 text-base font-medium`}
            aria-current={item.current ? "page" : undefined}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}