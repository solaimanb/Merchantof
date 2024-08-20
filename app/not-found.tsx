import { Button } from '@nextui-org/react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="text-center mt-40">
      <h1 className="text-4xl font-bold">No Products Data Found!</h1>

      <Button
        className="bg-black text-white font-bold py-2 px-10 rounded mt-6"
        size="lg"
      >
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
