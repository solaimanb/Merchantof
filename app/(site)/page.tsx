import { Container } from '@/components/Container';
import Hero from '@/components/Hero';
import ProductPresetI from '@/components/presets/ProductPresetI';

const Home = () => {
  return (
    <Container>
      <Hero />
      <ProductPresetI />
    </Container>
  );
};

export default Home;
