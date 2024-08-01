import Header from '@/components/Header/Header';
import Carousel from '@/components/CarouselApi/CarouslApi';
import type { NextPage } from 'next';
import Logo from "@/app/assets/baked-chicken.svg"
import Categories from '@/components/Categories/Categories';
import Kitchen from '@/components/Kitchen/Kitchen';
import CheckOut from '@/components/CheckOut/CheckOut';
import TrySection from "@/components/TrySection/TrySection"
import Deliciousness from '@/components/Deliciousness/Deliciousness';
import Footer from '@/components/Footer/Footer';

interface ImageData {
  url: any;
  title: string;
  description: string;
}

const Home: NextPage = () => {
  const imageData: ImageData[] = [
    {
      url: Logo,
      title: 'Spicy delicious chicken wings',
      description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ',
    },
    {
      url: Logo,
      title: 'Spicy delicious chicken wings',
      description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ',
    },
    {
      url: Logo,
      title: 'Spicy delicious chicken wings',
      description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ',
    },
  ];

  return (
    <div className='min-h-full'>
      <Header />
      <Carousel images={imageData} />
      <Categories />
      <Kitchen />
      <CheckOut />
      <TrySection />
      <Deliciousness/>
      <Footer/>
    </div>
  );
};

export default Home;
