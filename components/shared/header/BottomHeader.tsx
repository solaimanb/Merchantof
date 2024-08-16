import { Container } from '@/components/Container'

const BottomHeader = () => {
  return (
    <Container>
      <div className='py-4'>
        <nav>
          <ul className='flex items-center justify-between gap-4'>
            <li>Mens</li>
            <li>Woman</li>
            <li>Child</li>
            <li>Home & Furniture</li>
            <li>Cosmetics</li>
            <li>Shoe & Bag</li>
            <li>Electronics</li>
            <li>Sport & Outdoor</li>
          </ul>
        </nav>
      </div>
    </Container>
  )
}

export default BottomHeader