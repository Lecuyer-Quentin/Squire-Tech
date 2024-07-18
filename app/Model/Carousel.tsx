import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

interface CarouselProps {
    images: string[];
};

export default class CarouselModel {
    props : CarouselProps;

    constructor(props : CarouselProps) {
        this.props = props;
    }
   
        
    carousel() {
        return (
            <Carousel className="relative w-full h-full">
                <CarouselPrevious className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </CarouselPrevious>
                <CarouselNext className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </CarouselNext>
                <CarouselContent className="relative w-full h-full">
                    {this.props.images.map((image, index) => (
                        <CarouselItem key={index} className="relative w-full h-full">
                            <Image src={image} alt={`image_${index}`} width={1000} height={100} sizes="100%" className="object-cover rounded-md overflow-hidden" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
               
            </Carousel>
        );
    }

}