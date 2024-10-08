import Projet, { ProjetProps } from '../Model/Projet';
import Service, { ServiceProps } from '../Model/Service';
import Formation, { FormationProps } from '../Model/Formation';




const RACINE_SITE = process.env.RACINE_SITE;

async function fetchProjets() {
    try {
        const response = await fetch(`${RACINE_SITE}/data.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            next: {
                revalidate: 3600,
            },
        });

        if (!response.ok) {
            console.error(`Failed to fetch projects: ${response.status} ${response.statusText}`);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched data:", data); // Log the fetched data

        if (data.projects) {
            return data.projects.toReversed().map((project: ProjetProps) => new Projet({
                id: project.id,
                name: project.name,
                description: project.description,
                images: project.images,
                date: new Date(project.date),
                task: project.task,
                tech: project.tech,
                link: project.link,
                url: project.url,
            } as ProjetProps));
        }
        return [];
    } catch (error) {
        console.error("Error fetching projects:", error);
        return []; // Return an empty array on error
    }
}

//async function fetchProjets() {
//    
//    const response = await fetch(`${RACINE_SITE}/data.json`,
//    {
//        method: 'GET',
//        headers: {
//            'Content-Type': 'application/json'
//        },
//        next: {
//            revalidate: 3600
//        }
//    });
//    
//    if(!response.ok) {
//        throw new Error(`HTTP error! status: ${response.status}`);
//    }
//
//    const data = await response.json();
//    if (data.projects) {
//        return data.projects.toReversed().map((project: ProjetProps) => new Projet(
//            {
//                id: project.id, 
//                name: project.name, 
//                description: project.description,
//                images: project.images,
//                date: new Date(project.date), 
//                task: project.task,
//                tech: project.tech,
//                link: project.link,
//                url: project.url
//            } as ProjetProps
//        ));
//    }
//    return [];
//}

async function fetchProjet(id: number) {
    const response = await fetch(`${RACINE_SITE}/data.json`,
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        next: {
            revalidate: 3600
        }
    });
    
    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (data.projects[id]) {
        const project = data.projects[id]
        return new Projet({
            id: project.id, 
            name: project.name, 
            description: project.description,
            images: project.images,
            date: new Date(project.date), 
            task: project.task,
            tech: project.tech,
            link: project.link,
            url: project.url
        } as ProjetProps
        );
    }
    return null;
}

async function fetchLastProjets(limit: number) {
    const response = await fetch(`${RACINE_SITE}/data.json`,
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        next: {
            revalidate: 3600
        }
    });
    
    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (data.projects) {
        const projects = data.projects.map((project: ProjetProps) => new Projet(
            {
                id: project.id, 
                name: project.name, 
                description: project.description,
                images: project.images,
                date: new Date(project.date), 
                task: project.task,
                tech: project.tech,
                link: project.link,
                url: project.url} 
        ));
        return projects.toReversed().slice(0, limit);
    }
    return [];
}

async function fetchServices(){
    const res = await fetch(`${RACINE_SITE}/data.json`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            next: {
                revalidate: 3600
            }
        }
    );

    if(!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    if (data.services) {
        return data.services.map((service: ServiceProps) => new Service(
            {
                id: service.id, 
                name: service.name, 
                description: service.description,
                images: service.images,
                quotes: service.quotes,
                content: service.content
            }
        ));
    }
    return [];
}

async function fetchService(id: number) {
    const res = await fetch(`${RACINE_SITE}/data.json`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            next: {
                revalidate: 3600
            }
        }
    );
    if(!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    if (data.services[id]) {
        const service = data.services[id];
        return new Service({
            id: service.id, 
            name: service.name, 
            description: service.description,
            images: service.images,
            quotes: service.quotes,
            content: service.content} as ServiceProps
        );
    }
    return null;
}

async function fetchFormations(){
    const res = await fetch(`${RACINE_SITE}/data.json`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            next: {
                revalidate: 3600
            }
        }
    );
    if(!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    if (data.formations) {
        return data.formations.toReversed().map((formation: FormationProps) => new Formation(
            {
                id: formation.id, 
                name: formation.name, 
                school: formation.school,
                year: formation.year,
                image: formation.image
            }
        ));
    }
    return [];
}

async function fetchAllData(){
    const res = await fetch(`${RACINE_SITE}/data.json`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            next: {
                revalidate: 3600
            }
        }
    );
    if(!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
}


export { 
    fetchProjet, 
    fetchProjets, 
    fetchLastProjets, 
    fetchServices, 
    fetchService,
    fetchFormations,
    fetchAllData
};