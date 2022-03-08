import { Searchicon } from "./icons";

export const SearchInput = () => {
  return (
    <div className="flex items-stretch border-2 border-gray-200 rounded-2xl font-light w-[400px] overflow-hidden">
      <div className="p-3">
        <Searchicon />
      </div>
      <input type="text" placeholder="Search for stats" className="flex-1" />
    </div>
  );
};
