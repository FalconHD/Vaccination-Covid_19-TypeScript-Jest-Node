import { useAppSelector } from "@/hooks";
import Link from "next/link";
import react , { FC } from "react";
import {
  Billingicon,
  Gridicon,
  Homeicon,
  Projecticon,
  Settingicon,
  Statsicon,
  Usericon,
} from "./icons";

interface MenuProps {
  children: React.ReactNode;
}
interface MenuItemProps {
  title: string;
  icon: JSX.Element;
  active?: boolean;
  to: string;
}

function Menu({ children }: MenuProps) {
  return <div className="flex flex-col space-y-3">{children}</div>;
}

function MenuItem({ title, icon, active = false, to }: MenuItemProps) {
  const styles =
    "flex space-x-4 px-6 py-3 cursor-pointer text-black hover:bg-gray-100 transition-all";
  const activeStyles = "menu_item_border";
  return (
    <Link href={to}>
      <div className={`${styles} ${active && activeStyles}`}>
        {icon}
        <span>{title}</span>
      </div>
    </Link>
  );
}

function Avatar() {
  return (
    <div className="border-2 border-gray-200 p-1.5 rounded-2xl w-16 h-16 relative">
      <img
        className="w-full h-full rounded-2xl"
        src="https://i.pravatar.cc/150?img=3"
        alt=""
      />
      <div className="absolute right-0 bottom-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
}

type superProps = {
  Super: boolean;
};

export const Sidebar = ({Super}:superProps) => {
  const { info } = useAppSelector((state) => state.admin);

  return (
    <div className="w-[250px] h-full flex flex-col border-r-2 border-r-gray-200 py-4">
      <div className="mb-8">
        <button className="p-3 ml-4 hover:bg-gray-100 rounded-2xl">
          <Gridicon />
        </button>
      </div>
      <Menu>
        <MenuItem 
        
        to={`${Super ? "/admin" : "/dashboard"}`}
        title="Home" icon={<Homeicon />} active />
        <MenuItem
          to={`${Super ? "/admin/centers" : "/dashboard/centers"}`}
          title="Centers"
          icon={<Projecticon />}
        />
      </Menu>
      <div className="flex-1"></div>
      <div className="text-center my-4 flex flex-col items-center">
        <Avatar />
        <p className="font-semibold mt-2">
          {info.name ? info.name : "David Milan"}{" "}
        </p>
      </div>
    </div>
  );
};
