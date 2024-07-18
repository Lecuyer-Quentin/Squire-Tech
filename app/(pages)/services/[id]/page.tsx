import { fetchService } from "@/app/utils/fetch";
import ServiceModel from "@/app/Model/Service";

export default function Service ({ params } : { params: { id : number } }) {
    const { id } = params;
    const service = fetchService(id) as Promise<ServiceModel>;

    return (
        <>
            {service?.then(p => p?.renderService_details()) ?? "Chargement..."}
        </>
    );
}
