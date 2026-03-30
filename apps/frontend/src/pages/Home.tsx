import ImageSlider from '../components/ImageSlider';
import QuickLinks from '../components/QuickLinks';
import AboutBanner from '../components/AboutBanner';
import InfoSection from '../components/InfoSection';

export default function Home() {
  return (
    <div>
      <ImageSlider />
      <QuickLinks />
      <AboutBanner />
      <InfoSection />
    </div>
  );
}
