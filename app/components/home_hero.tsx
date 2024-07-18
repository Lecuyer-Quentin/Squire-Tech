import Image from 'next/image';
import Contact from './contact';
import { WindowsGradient } from './windows';
import ImgHero from '/public/images/hero.jpg';
import ImgBrand from '/public/images/logo_7.png';

const HomeHero = () => {

  return (
    <article id="heroArticle" className="relative min-h-screen -mt-8 overflow-hidden"
    style={{
      background: `url(${ImgHero.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      zIndex: 0
    }}
    >
        <span className="absolute -top-20 left-0 w-full h-full flex flex-col justify-center items-center">
          <Image src={ImgBrand} alt="logo" width={400} height={400} priority className="shadow-3xl z-20" />
          <em className="z-20 text-3xl text-white font-bold text-center p-6">
            Au service <br />
            De vos projets
          </em>
        </span>
        <WindowsGradient />
        <span className="absolute z-20 top-4 right-7"><Contact /></span>
        <span className="absolute bottom-0 right-2 w-fit p-4 text-white">Photo de <a href="https://unsplash.com/fr/@alexisantoine?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Alexis Antoine</a> sur <a href="https://unsplash.com/fr/photos/photographie-des-vagues-de-locean-lbIgR6AwLfw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></span>
  
    </article>
    )}

export default HomeHero;