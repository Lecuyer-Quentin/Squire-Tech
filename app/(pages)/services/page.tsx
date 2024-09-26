import { fetchServices } from "@/app/utils/fetch";
import ServiceModel from "@/app/Model/Service";
import Title from "@/app/components/title";


export default function Services () {
    const services = fetchServices() as Promise<ServiceModel[]>;

  return (
    <section className="w-full flex flex-col items-center justify-start">
        <Title title="Services" size="text-4xl" />
        <article className="w-full flex flex-row flex-wrap items-center justify-center gap-8 md:mb-40">
            {services?.then(s => s.map((service) => (
              service.renderServiceCard()) ?? 'Chargement en cours...' 
            ))}
          </article>
    </section>
  );
}