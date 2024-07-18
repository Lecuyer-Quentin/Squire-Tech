import Projet, { ProjetProps } from "@/app/Model/Projet";
import { fetchProjets } from "@/app/utils/fetch";
import Title from "@/app/components/title";
import Link from "next/link";

export default function Projets() {
  const projets = fetchProjets() as Promise<Projet[]>;


  const renderProjets = async (projets: Promise<Projet[]>) => {
    return projets.then((projets) => projets.map((projet) => 
      projets.indexOf(projet) % 2 === 0 || projets.indexOf(projet) % 4 === 0  || projets.indexOf(projet) % 3 === 0 ? (
        <Link key={projet.props.id} href={`/projets/${projet.props.id}`}>
          {projet.render_lg()}
        </Link>
      ) : (
        <Link key={projet.props.id} href={`/projets/${projet.props.id}`}>
          {projet.render_md()}
        </Link>
      )
    ));
  };


    return (
      <section className="w-full flex flex-col items-center justify-start">
        <Title title="Projets" size="text-4xl" />

        <article className="w-[90%] md:w-[100%] xl:w-[80%] flex flex-row flex-wrap items-center justify-center gap-4">
          {renderProjets(projets)}
        </article>
      </section>
    );
  }