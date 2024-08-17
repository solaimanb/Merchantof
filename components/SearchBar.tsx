import { Search } from "lucide-react";
import { Button, Input } from "@nextui-org/react";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-between border rounded-md p-1 gap-2">
      <Input type="text" placeholder="Search Products" className="" />

      <Button className="">
        <Search size={20} />
      </Button>
    </div>
  );
};

export default SearchBar;
