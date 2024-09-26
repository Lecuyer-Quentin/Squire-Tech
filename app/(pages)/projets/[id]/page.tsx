import Projet, { ProjetProps } from "@/app/Model/Projet";
import { fetchProjet, fetchProjets } from "@/app/utils/fetch";

export const dynamicParams = true;

export async function generateStaticParams() {
    const projets = await fetchProjets();
    return projets.map((projet: ProjetProps) => ({
        params: { id: projet.id as number } // Ensure ID is correctly retrieved
    }));
}

export async function generateMetadata({ params }: { params: { id: number } }) {
    const { id } = params;
    try {
        const projet = await fetchProjet(id);
        return {
            title: projet?.props.name || "Project Not Found",
            description: projet?.props.description || "No description available."
        };
    } catch (error) {
        console.error(`Error fetching project metadata for ID: ${id}`, error);
        return {
            title: "Project Not Found",
            description: "This project could not be found."
        };
    }
}

export default async function Project({ params }: { params: { id: number } }) {
    const { id } = params;
    try {
        const projet = await fetchProjet(id) as Projet; // Use await for fetching project
        return (
            <>
                {projet ? projet.render_details() : "Project not found."}
            </>
        );
    } catch (error) {
        console.error(`Error fetching project with ID: ${id}`, error);
        return (
            <div>
                <h2>Error</h2>
                <p>Failed to load project details. Please try again later.</p>
            </div>
        );
    }
}


//import Projet, { ProjetProps } from "@/app/Model/Projet";
//import { fetchProjet, fetchProjets } from "@/app/utils/fetch";
//import ProjetModel from "@/app/Model/Projet";
//
//export const dynamicParams = true;
//
//export async function generateStaticParams() {
//    const projets = await fetchProjets();
//    return projets.map((projet : ProjetProps) => ({
//        params: { id: projet.id }
//    }));
//}
//
//export async function generateMetadata( { params } : { params: { id : number } }) {
//    const { id } = params;
//    const projet = await fetchProjet(id);
//    return {
//        title: projet?.props.name,
//        description: projet?.props.description
//    };
//}
//
//export default function Project({ params } : { params: { id : number } }) {
//    const { id } = params;
//    const projet = fetchProjet(id) as Promise<ProjetModel>;
//    return (
//        <>
//            {projet?.then(p => p?.render_details()) ?? "Chargement..."}
//        </>
//    );
//}

