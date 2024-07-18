import Intro from "./components/intro";
import Services from "./components/services";
import LastProjets from "./components/last_projets";
import HomeHero from "./components/home_hero";
import Quote from "./components/quote";

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

  return (
    <>
      <section>
        <HomeHero />
        {quotes && quotes[0] && (<Quote id={quotes[0].id} content={quotes[0].content} author={quotes[0].author} />)}
      </section>

      <section>
        <Services />
        {quotes && quotes[1] && (<Quote id={quotes[1].id} content={quotes[1].content} author={quotes[1].author} />)}
      </section>

      <section >
        <Intro />
        {quotes && quotes[2] && (<Quote id={quotes[2].id} content={quotes[2].content} author={quotes[2].author} />)}
      </section>

      <section>
        <LastProjets />
      </section>
    </>
  );
}


//"citations":[
//            {
//            "id": "0",
//            "name": "Developpement",
//            "citation": [
//              {
//              "id": "0",
//              "quote": "The best way to predict the future is to create it.",
//              "author": "Peter Drucker"
//              },
//              {
//              "id": "1",
//              "quote": "The only way to do great work is to love what you do.",
//              "author": "Steve Jobs"
//              },
//              {
//              "id": "3",
//              "quote": "Toute technologie suffisamment avancée est indiscernable de la magie.",
//              "author": "Arthur C. Clarke"
//              },
//              {
//              "id": "4",
//              "quote": "Mesurer la progression du développement d’un logiciel à l’aune de ses lignes de code revient à mesurer la progression de la construction d’un avion à l’aune de son poids.",
//              "author": "Bill Gates"
//              },
//          ],
//          },
//          {
//            "id": "1",
//            "name": "Design",
//            "citation": [
//              {
//              "id": "0",
//              "quote": "L’essence d’un projet, c’est l’harmonie parfaite entre l’esthétique, l’utile et le juste.",
//              "author": "Frank Lloyd Wright"
//              },
//              {
//              "id": "1",
//              "quote": "Si vous pouvez vraiment définir le problème, vous avez également trouvé la solution.",
//              "author": "Chip Kidd"
//              },
//              {
//              "id": "2",
//              "quote": "Créer un design numérique, c’est comme peindre, sauf que l’encre ne sèche jamais.",
//              "author": "Neville Brody"
//              },
//              {
//              "id": "3",
//              "quote": "Mon but est d'atteindre deux choses: la simplicité et la clarté. Les bons design naissent de ces deux éléments.",
//              "author": "Lindon Leader"
//              },
//              ],
//          },
//          {
//            "id": "2",
//            "name": "Cybersecurité",
//            "citation": [
//              {
//              "id": "0",
//              "quote": "Il n'existe que deux types d'entreprises dans le monde : celles qui ont été piratées et le savent, et celles qui ont été piratées et ne le savent pas.",
//              "author": "Ted Schlein"
//              },
//              {
//              "id": "1",
//              "quote": " Une faille de sécurité n’est pas une catastrophe à elle seule, mais une mauvaise gestion de celle-ci en est une. ",
//              "author": "Serene Davis"
//              },
//              {
//              "id": "2",
//              "quote": "Le monde étant de plus en plus interconnecté, chacun partage la responsabilité de sécuriser le cyberespace. ",
//              "author": "Newton Lee"
//              },
//              {
//              "id": "3",
//              "quote": "Le maillon le plus faible de la chaîne de sécurité est l’élément humain.",
//              "author": "Kevin Mitnick"
//              },
//              ],
//          },

