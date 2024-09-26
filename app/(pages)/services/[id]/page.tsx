import { fetchService, fetchServices } from "@/app/utils/fetch";
import ServiceModel, { ServiceProps } from "@/app/Model/Service";

//export const dynamicParams = true;
//
//export async function generateStaticParams() {
//    const services = await fetchServices();
//    return services.map((service : ServiceProps) => ({
//        params: { id: service.id }
//    }));
//}

export async function generateMetadata( { params } : { params: { id : number } }) {
    const { id } = params;
    const service = await fetchService(id);
    return {
        title: service?.props.name,
        description: service?.props.description
    };
}

export default function Service ({ params } : { params: { id : number } }) {
    const { id } = params;
    const service = fetchService(id) as Promise<ServiceModel>;
    return (
        <>
            {service?.then(p => p?.renderService_details()) ?? "Chargement..."}
        </>
    );
}
