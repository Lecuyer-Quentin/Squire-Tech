import Projet, { ProjetProps } from "@/app/Model/Projet";
import { fetchProjet, fetchProjets } from "@/app/utils/fetch";
import ProjetModel from "@/app/Model/Projet";

//export const dynamicParams = true;
//
//export async function generateStaticParams() {
//    const projets = await fetchProjets();
//    return projets.map((projet : ProjetProps) => ({
//        params: { id: projet.id }
//    }));
//}

export async function generateMetadata( { params } : { params: { id : number } }) {
    const { id } = params;
    const projet = await fetchProjet(id);
    return {
        title: projet?.props.name,
        description: projet?.props.description
    };
}

export default function Project({ params } : { params: { id : number } }) {
    const { id } = params;
    const projet = fetchProjet(id) as Promise<ProjetModel>;
    return (
        <>
            {projet?.then(p => p?.render_details()) ?? "Chargement..."}
        </>
    );
}

