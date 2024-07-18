import { fetchAllData } from '@/app/utils/fetch';
import Title from '@/app/components/title';
import CardModel, { CardProps } from '@/app/Model/Card';
import { FormationProps } from '@/app/Model/Formation';
import { ServiceProps } from '@/app/Model/Service';
import { ProjetProps } from '@/app/Model/Projet';


interface ResultProps {
    id: number | string,
    name: string,
    description: string,
    images: string[],
    href: any
}


export default async function Search({ searchParams } : { searchParams: { search: string } }) {
    const search = searchParams.search.toLowerCase()
    const renderSearch = search.charAt(0).toUpperCase() + search.slice(1)
    const allData = search ? await fetchAllData() : {formations: [], services: [], projects: []};

    const filterResults = () => {
        const results : ResultProps[] = [];
        allData.formations.map((formation: FormationProps) => {
            if(formation.name.toLowerCase().includes(search)) {
                const href = `/formations/${formation.id}`;
                results.push({
                    id: formation.id,
                    name: formation.name,
                    href: href,
                    description: formation.school,
                    images: [formation.image]
                });
            }

        });
        allData.services.map((service: ServiceProps) => {
            if(service.name.toLowerCase().includes(search)) {
                const href = `/services/${service.id}`;
                results.push({
                    id: service.id,
                    name: service.name,
                    href: href,
                    description: service.description,
                    images: service.images
                });
            }
        })
        allData.projects.map((project: ProjetProps) => {
            if(project.name.toLowerCase().includes(search)) {
                const href = `/projects/${project.id}`;
                results.push({
                    id: project.id,
                    name: project.name,
                    href: href,
                    description: project.description,
                    images: project.images
                });
            }
        })
        return results;
    }

    const renderResults = () => {
        return (
            <article>
                <ul className="flex flex-row items-center flex-wrap justify-center w-full gap-8 p-4">
                    {filterResults().length === 0 && <li className="text-center">Aucun résultat trouvé pour votre recherche</li>}
                    {filterResults().map((result: ResultProps) => {
                        return <li key={`${result.id}_${result.name}`}>
                            {
                                new CardModel({
                                    id: result.id,
                                    name: result.name,
                                    href: result.href,
                                    images: result.images || ['/images/logo_1.png'],
                                    description: result.description
                                }).card_result()
                            }
                        </li>
                    })}
                </ul>
            </article>
        )
    }


    return (
        <section className="flex flex-col items-center justify-start">
            <Title title={`Résultats de la recherche, ${renderSearch}`} />
            {renderResults()}
        </section>
    );
}