import { fetchServices } from "../utils/fetch";
import ServiceModel from "../Model/Service";
import Title from "./title";

const Services = () => {
  const services = fetchServices() as Promise<ServiceModel[]>;
  const title = `Quelque soit votre besoin, Nous avons une response pour vous`;
  
    return (
        <article className="w-full min-h-[70vh] flex flex-col items-center justify-around">

          <Title title={title} />

          <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
            {services?.then(s => s.map((service) => (
              service.renderServiceCard()) ?? 'Chargement en cours...' 
            ))}
          </div>

        </article>
    );
}

export default Services;