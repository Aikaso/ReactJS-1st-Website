import React from 'react';
import HeroSection from '../HeroSection';
import { homeObjOne } from './Data';
import Pricing from '../Pricing';
import Boxes from '../Boxes';
import Blog from '../Blog';
import { blogPostOne, blogPostTwo, blogPostThree } from '../Blogpage/Data';

function Home() {
  return <div>
    <HeroSection {...homeObjOne} />
    <Pricing />
    <Boxes />
    <Blog {...blogPostOne} />
    <Blog {...blogPostTwo} />
    <Blog {...blogPostThree} />
  </div>;
}

export default Home;
