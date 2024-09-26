import Projet, { ProjetProps } from "../Model/Projet";
import { fetchLastProjets } from "../utils/fetch";
import Title from "./title";
import CTA_btn from "../components/button/cta_btn";

const LastProjets = async () => {
    const projets = await fetchLastProjets(4); // Attends la résolution de la promesse
    const cta_btn = <CTA_btn href="/projets">Voir tous les projets</CTA_btn>;
    const title = `Derniers projets, réalisés avec passion`;

    return (
        <>
            <Title title={title} />

            <article className="flex flex-row flex-wrap items-center justify-center gap-4">
                {projets.length > 0 ? (
                    projets.map((projet: Projet) => projet.render_home()) // Rends les projets
                ) : (
                    <p>Chargement des projets...</p> // Message de chargement si aucun projet
                )}
            </article>

            <div className="flex justify-center mt-4">
                {cta_btn} {/* Affiche le bouton d'appel à l'action */}
            </div>
        </>
    );
}

export default LastProjets;


//const LastProjets = () => {
//    const projets = fetchLastProjets(4) as Promise<Projet[]>;
//    const cta_btn = <CTA_btn href="/projets">Voir tous les projets</CTA_btn>;
//    const title = `Derniers projets, réalisés avec passion`;
//
//    return (
//
//        <>
//        <Title title={title} />
//
//        
//        <article className="flex flex-row flex-wrap items-center justify-center gap-4">
//            
//                {projets?.then(p => p.map((projet) => (
//                    projet.render_home())
//                ))}
//            
//        </article>
//        </>
//    );
//}
//
//export default LastProjets;
