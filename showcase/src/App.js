import { Download, Features, SectionWrapper } from './components'
import assets from './assets'
import styles from './styles/Global'

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Your own store of infinite NFTs. Start selling or buying"
        description="Buy, store, collect NFTS, exchange & earn crypto. Join 25+ million people using NFTinity Marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="Intuitive User Interface Design"
        description="Experience the clean user interface of NFTinity Marketplace. Designed to be smooth, fast, fluid, and minimal. Experience NFTinity today!"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Deployment"
        description="Nftinity is deployed using Expo which runs natively on all users devices. You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title="Creative way to showcase NFTs"
        description="NFTinity contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with 🥓 by {" "}
        <span className="bold"><a className="underline underline-offset-4" href="https://arthurlaroya.com/">Arthur Laroya</a></span>
        </p>
      </div>
    </>
  );
}

export default App;
