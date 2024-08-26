import { Button, Input } from '@nextui-org/react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="rounded-md bg-white pl-2 py-1 flex items-center gap-2">
      <Input
        size="md"
        type="email"
        className="focus:outline-none focus:ring-0"
        placeholder="Search Products"
      />
      <Button variant="ghost" className="border-none focus:outline-none">
        <Search />
      </Button>
    </div>
  );
};

export default SearchBar;
