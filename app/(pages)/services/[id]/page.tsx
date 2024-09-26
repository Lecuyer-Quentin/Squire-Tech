import { fetchService, fetchServices } from "@/app/utils/fetch";
import ServiceModel, { ServiceProps } from "@/app/Model/Service";

export const dynamicParams = true;

export async function generateStaticParams() {
    const services = await fetchServices();
    return services.map((service: ServiceProps) => ({
        params: { id: service.id }
    }));
}

export async function generateMetadata({ params }: { params: { id: number } }) {
    const { id } = params;
    try {
        const service = await fetchService(id);
        return {
            title: service?.props.name,
            description: service?.props.description,
        };
    } catch (error) {
        console.error(`Failed to fetch service data for ID: ${id}`, error);
        return {
            title: "Service Not Found",
            description: "The requested service could not be found."
        };
    }
}

export default async function Service({ params }: { params: { id: number } }) {
    const { id } = params;
    try {
        const service = await fetchService(id) as ServiceModel; // Use await to fetch the service
        return (
            <>
                {service ? service.renderService_details() : "Service not found."}
            </>
        );
    } catch (error) {
        console.error(`Error fetching service with ID: ${id}`, error);
        return (
            <div>
                <h2>Error</h2>
                <p>Failed to load service details. Please try again later.</p>
            </div>
        );
    }
}


//import { fetchService, fetchServices } from "@/app/utils/fetch";
//import ServiceModel, { ServiceProps } from "@/app/Model/Service";
//
//export const dynamicParams = true;
//
//export async function generateStaticParams() {
//    const services = await fetchServices();
//    return services.map((service : ServiceProps) => ({
//        params: { id: service.id }
//    }));
//}
//
//export async function generateMetadata( { params } : { params: { id : number } }) {
//    const { id } = params;
//    const service = await fetchService(id);
//    return {
//        title: service?.props.name,
//        description: service?.props.description
//    };
//}
//
//export default function Service ({ params } : { params: { id : number } }) {
//    const { id } = params;
//    const service = fetchService(id) as Promise<ServiceModel>;
//    return (
//        <>
//            {service?.then(p => p?.renderService_details()) ?? "Chargement..."}
//        </>
//    );
//}
