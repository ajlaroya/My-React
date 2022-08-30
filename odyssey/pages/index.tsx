import type { NextPage } from 'next'
import FeaturedProducts from '../components/FeaturedProducts'
import { FeaturesGrid } from '../components/Features'
import { FooterLinks } from '../components/Footer'
import { HeaderResponsive } from '../components/Header'
import { HeroTitle } from '../components/Hero'

import { data, links } from '../utils/constants'

const Home: NextPage = () => {
  return (
    <>
      <HeaderResponsive links={links} />
      <HeroTitle />
      <FeaturedProducts />
      <FeaturesGrid title={"Odyssey"} description={"Cross-platform journal app. Mark your adventures now"} />
      <FooterLinks data={data}/>
    </>
  )
}

export default Home
