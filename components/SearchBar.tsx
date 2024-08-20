import { Button, Divider, Input } from '@nextui-org/react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="rounded-md border-2 pl-2 py-1 flex items-center gap-2">
      <Input
        size="lg"
        type="email"
        className="focus:outline-none focus:ring-0 bg-transparent"
        placeholder="Search Products"
      />
      <Divider orientation="vertical" />
      <Button className="border-none focus:outline-none">
        <Search />
      </Button>
    </div>
  );
};

export default SearchBar;
