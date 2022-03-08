import React from "react";
import {
  Billingicon,
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
  amount: string;
  icon: JSX.Element;
}

function Menu({ children }: MenuProps) {
  return <div className="flex flex-col space-y-3">{children}</div>;
}

function MenuItem({ title, icon, amount }: MenuItemProps) {
  return (
    <div className="flex items-center space-x-4 px-8 py-3 cursor-pointer">
      <div className="w-10 h-10 bg-[#e2e2e2] grid place-items-center rounded-full text-black">
        {icon}
      </div>
      <div>
        <h3 className="text-white font-bold text-xl">{amount}</h3>
        <p className="text-xs text-[#9e9e9e]">{title}</p>
      </div>
    </div>
  );
}

export const Statistics = () => {
  return (
    <div className="col-span-3 bg-black rounded-3xl flex flex-col py-6">
      <h2 className="text-white text-xl ml-4 px-8 my-4">Sales Revenue</h2>
      <Menu>
        <MenuItem title="Sales" amount="230K" icon={<Homeicon />} />
        <MenuItem title="Customers" amount="8.549K" icon={<Projecticon />} />
        <MenuItem title="Products" amount="1.423K" icon={<Billingicon />} />
        <MenuItem title="Revenue" amount="$9745" icon={<Usericon />} />
      </Menu>
      <h2 className="text-white text-xl ml-4 px-8 my-4">Statistics</h2>
      {/* <img src={chart as StaticImageData} className="w-full -h-full my-4" alt="" /> */}
    </div>
  );
};
