import Projet, { ProjetProps } from "../Model/Projet";
import { fetchLastProjets } from "../utils/fetch";
import Title from "./title";
import CTA_btn from "../components/button/cta_btn";

const LastProjets = () => {
    const projets = fetchLastProjets(4) as Promise<Projet[]>;
    const cta_btn = <CTA_btn href="/projets">Voir tous les projets</CTA_btn>;
    const title = `Derniers projets, réalisés avec passion`;

    return (

        <>
        <Title title={title} />

        
        <article className="flex flex-row flex-wrap items-center justify-center gap-4">
            
                {projets?.then(p => p.map((projet) => (
                    projet.render_home())
                ))}
            
        </article>
        </>
    );
}

export default LastProjets;
