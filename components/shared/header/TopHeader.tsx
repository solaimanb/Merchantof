import { Container } from '@/components/Container'
import SearchBar from '@/components/SearchBar'
import { Facebook, Instagram, MessageCircleIcon } from 'lucide-react'

const TopHeader = () => {
  return (
    <Container>
      <section className='flex justify-between items-center py-4'>
      <div>MerchantOF</div>
      <div>
        <SearchBar/>
      </div>
      <div>
            <nav>
                <ul className='flex items-center gap-4'>
                    <li>About us</li>
                    <li>Blog</li>
                    <li>Contact us</li>
                    <li>Help & Support</li>
                </ul>
            </nav>
        </div>

        <div className='flex items-center gap-4'>
            <Instagram/>
            <Facebook/>
            <MessageCircleIcon/>
        </div>
    </section>
    </Container>
  )
}

export default TopHeader