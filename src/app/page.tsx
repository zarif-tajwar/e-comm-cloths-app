import Hero from '@/components/Sections/Hero';
import NewArrivals from '@/components/Sections/Featured';
import Featured from '@/components/Sections/Featured';
import BrowseStyle from '@/components/Sections/BrowseStyle';
import CustomerReviews from '@/components/Sections/CustomerReviews';

export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <BrowseStyle />
      <CustomerReviews />
    </main>
  );
}
