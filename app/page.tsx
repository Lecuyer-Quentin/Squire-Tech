import Intro from "./components/intro";
import Services from "./components/services";
import LastProjets from "./components/last_projets";
import HomeHero from "./components/home_hero";
import Quote from "./components/quote";
import { fetchServices, fetchLastProjets } from "./utils/fetch";

export default async function Home() {
  const quotes = [
      {
        "id": "0",
        "content": "The future belongs to those who believe in the beauty of their dreams.",
        "author": "Eleanor Roosevelt"
      },
      {
        "id": "1",
        "content": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
      },
      {
        "id": "2",
        "content": "The best way to predict the future is to create it.",
        "author": "Peter Drucker"
      },
    ];

    const servicesData = await fetchServices(); // Ajuste cette fonction pour qu'elle soit asynchrone
    const lastProjetsData = await fetchLastProjets(4); // Idem


  return (
    <>
      <section>
        <HomeHero />
        {quotes && quotes[0] && (<Quote id={quotes[0].id} content={quotes[0].content} author={quotes[0].author} />)}
      </section>

      <section>
        {/*<Services data={servicesData}/>*/}
        {quotes && quotes[1] && (<Quote id={quotes[1].id} content={quotes[1].content} author={quotes[1].author} />)}
      </section>

      <section >
        <Intro />
        {quotes && quotes[2] && (<Quote id={quotes[2].id} content={quotes[2].content} author={quotes[2].author} />)}
      </section>

      <section>
        {/*<LastProjets data={lastProjetsData}/>*/}
      </section>
    </>
  );
}
