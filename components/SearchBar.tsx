import { Button, Input } from '@nextui-org/react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="rounded-md border p-1 flex items-center gap-2">
      <Input
        size="lg"
        type="email"
        className="focus:outline-none ring-0"
        placeholder="Search Products"
      />
      <Button>
        <Search />
      </Button>
    </div>
  );
};

export default SearchBar;
