import { Search } from 'lucide-react'

const SearchBar = () => {
  return (
    <div className='flex items-center justify-between border rounded p-1 gap-4'>
        <div className='text-sm opacity-80'>
            Search Products
        </div>

        <div className=''>
            <Search/>
        </div>
    </div>
  )
}

export default SearchBar