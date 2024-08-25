import SwiperBanner from '@/components/ads/SwiperBanner';
import { Container } from '@/components/Container';
import Hero from '@/components/Hero';
import ProductPresetI from '@/components/presets/ProductPresetI';

const banners = [
  {
    imageUrl: 'https://promotions.newegg.com/group5/24-0937/1920x660_sm.jpg',
    linkUrl: 'https://example.com/link1',
    altText: 'Banner 1',
    title: 'Banner 1 Title',
  },
  {
    imageUrl: 'https://promotions.newegg.com/nepro/23-0253/1920x660_sm@2x.jpg',
    linkUrl: 'https://example.com/link2',
    altText: 'Banner 2',
    title: 'Banner 2 Title',
  },
];

const Home = () => {
  return (
    <Container>
      <Hero />
      <ProductPresetI title="Best Deals" />
      <div className="flex items-center justify-between gap-6 my-6">
        <SwiperBanner banners={banners} />
        <SwiperBanner banners={banners} />
      </div>
    </Container>
  );
};

export default Home;
