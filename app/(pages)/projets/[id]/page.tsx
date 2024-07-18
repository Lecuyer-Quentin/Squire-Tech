import Projet, { ProjetProps } from "@/app/Model/Projet";
import { fetchProjet } from "@/app/utils/fetch";

export default function Project({ params } : { params: { id : number } }) {
    const { id } = params;
    const projet = fetchProjet(id) as Promise<Projet>;

    return (
        <>
            {projet?.then(p => p?.render_details()) ?? "Chargement..."}
        </>
    );
}

