import type { NextPage } from 'next'
import FeaturedProducts from '../components/FeaturedProducts'
import { FeaturesGrid } from '../components/Features'
import { FooterLinks } from '../components/Footer'
import { HeaderResponsive } from '../components/Header'
import { HeroTitle } from '../components/Hero'

import { data, links } from '../utils/constants'
import products from '../utils/data'

const Home: NextPage = () => {
  return (
    <>
      <HeaderResponsive links={links} marginBottom={120} />
      <HeroTitle />
      <FeaturedProducts products={products} />
      <FeaturesGrid title={"Odyssey"} description={"Cross-platform journal app. Mark your adventures now"} />
      <FooterLinks data={data}/>
    </>
  )
}

export default Home
