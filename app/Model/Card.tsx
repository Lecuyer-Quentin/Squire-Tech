import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link";
import Image from "next/image";
import CarouselModel from "./Carousel";
import { Windows } from "../components/windows";

export interface CardProps {
    id: string | number;
    name: string;
    images?: string[] | null;
    description?: string | string[];
    href?: string | '';
    icon?: JSX.Element | null;
    tech?: [
        {
            id: string;
            name: string;
            description: string;
            image: string;
            href: string;
        }
    ] | null;
}

export default class CardModel{
    props: CardProps;
    
    constructor(props: CardProps) {
        this.props = props;   
    }

    card_home() {
        return this.props.href &&
            <Link key={this.props.id} href= {this.props.href}
            className="relative group w-[80%] md:w-[40%] lg:w-[40%] h-[20rem] p-[.1rem] shadow-xl rounded-xl bg-gradient-to-br from-blue-500 to-blue-300">
            <Card className="w-full h-full">
            <div className="absolute z-10 bottom-0 left-0 w-full h-full rounded-xl bg-black bg-opacity-40
            group-hover:bg-opacity-0 transition-all duration-300 ease-in-out
            "></div>

                <CardHeader className="absolute top-0 left-0 w-full h-full group-hover:h-[50%] transition-all duration-300 ease-in-out">

                    {Array.isArray(this.props.images)
                        && this.props.images.length > 0
                        && <Image src={this.props.images[0]} alt={this.props.name} fill priority sizes="100%" className="object-cover rounded-xl group-hover:rounded-b-none p-[.1rem]" />
                    }
                </CardHeader>
                <CardContent className="h-full w-full flex flex-col items-start justify-end ">
                    <CardTitle>{this.props.name}</CardTitle>
                    <CardDescription className="overflow-hidden overflow-ellipsis line-clamp-2>">{this.props.description}</CardDescription>
                </CardContent>
            </Card>
            </Link>
    }
    card_md() {
        return (
            <Card className="group relative lg:w-[36rem] w-[18rem] h-[22rem] shadow-xl shadow-stone-950">
                <CardHeader className="z-10">
                    <CardTitle>{this.props.name}</CardTitle>
                </CardHeader>
                <CardContent className="absolute inset-0 z-0 top-0 left-0 w-full h-full">
                    {(this.props.images)
                        && <Image src={this.props.images[0]} alt={this.props.name} fill priority sizes="90%" className="object-cover rounded-md" />
                    }
                </CardContent>
                <CardFooter className="">
                    <CardDescription className="font-bold">{this.props.description}</CardDescription>
                </CardFooter>
            </Card>
        );
    }
    card_lg() {
        return (
            <Card className="relative w-[18rem] h-[22rem] shadow-2xl shadow-stone-950">
                <CardHeader className="">
                    <CardTitle>{this.props.name}</CardTitle>
                </CardHeader>
                <CardContent className="absolute top-0 left-0 w-full h-full">
                    {Array.isArray(this.props.images)
                        && this.props.images.length > 0
                        && <Image src={this.props.images[0]} alt={this.props.name} fill priority sizes="90%" className="object-cover rounded-md" />
                    }
                </CardContent>
                <CardFooter className="">
                    <CardDescription className="font-bold">{this.props.description}</CardDescription>
                </CardFooter>
            </Card>
        );
    }
    card_xl() {
        return (
            <Card className="relative shadow-xl flex flex-col items-center justify-center 
            w-full md:w-[45rem] h-full">
                <CardHeader className="w-full absolute -top-4 z-10">
                    <CardTitle>{this.props.name}</CardTitle>
                </CardHeader>
                <CardContent className="relative flex flex-row items-center justify-center w-full h-full">
                    
                    {Array.isArray(this.props.images)
                        && this.props.images.length > 0
                        && <Image src={this.props.images[1]} alt={this.props.name} fill priority sizes="90%" className="object-cover rounded-md" />
                        //&& new CarouselModel({images: this.props.images}).carousel()
                    }
                </CardContent>
                <CardFooter className="w-full absolute -bottom-5 z-10 ">
                    <CardDescription className="font-bold">{this.props.description}</CardDescription>
                </CardFooter>
            </Card>
        );
    }
    card_menu() {
        return this.props.href && 
            <Link href={this.props.href}>
                <Card className="group w-[18rem] h-10 flex justify-start items-center shadow-md shadow-stone-950">
                    <i className={`${this.props.icon && 'ml-4 group-hover:text-blue-500'} text-blue-300`}>
                                {this.props.icon}
                    </i>
                    <CardHeader className="flex flex-col items-start justify-center"  >
                        <CardTitle className="text-xs" >
                            {this.props.name}
                        </CardTitle>
                        <CardDescription className="text-xs" style={{ lineHeight: '.5' }}>{this.props.description}</CardDescription>
                    </CardHeader>
                </Card>
            </Link>
    }
    card_service() {
        return this.props.href &&
            <Link href={this.props.href} className="relative group rounded-md card_service w-[90%] h-[10rem] lg:w-[30%] lg:h-[16rem]" >
                <Card className="rounded-md w-full h-full flex flex-row items-center justify-between border-none">

                    <CardHeader className='text-white w-full h-full absolute flex flex-col justify-start md:justify-between lg:justify-start z-10 rounded-md transition-all duration-800 ease-in-out group-hover:bg-black group-hover:bg-opacity-80'>
                            <CardTitle className="text-left w-fit z-10 bg-black bg-opacity-50 p-2 rounded-md transition-all duration-800 ease-in-out group-hover:bg-opacity-0"> 
                                {this.props.name}
                            </CardTitle>
                            <CardDescription className="rounded-md text-left font-bold opacity-0 transition-all duration-800 ease-in-out group-hover:opacity-100">
                                {this.props.description}
                            </CardDescription>
                    </CardHeader>

                    <CardContent className="absolute z-0 w-full h-full">
                        {Array.isArray(this.props.images)
                            && this.props.images.length > 0
                            && <Image src={this.props.images[0]} alt={this.props.name} fill priority sizes="100%" className="object-cover rounded-md" />
                        }
                    </CardContent>
                        
                </Card>
            </Link>
    } 
    card_service_details() {
        const gradient = `linear-gradient(60deg, #7747FF 0%, #03B2E1 20%, #7747FF 110%)`;
        const descriptions = Array.isArray(this.props.description) ? this.props.description.join('.').split('.') : this.props.description?.split('.');
        return (
            <Card 
            className="group shadow-2xl w-[20rem] md:w-[22rem] xl:w-[32rem] h-full flex flex-col items-center justify-center">
                <CardHeader 
                    className="w-full text-center rounded-t-md"
                    style={{background: gradient}}>
                    <CardTitle className="text-2xl">
                        {this.props.name}
                    </CardTitle>
                </CardHeader>
                <CardContent className="h-full w-full flex flex-col items-center justify-center">
                    <CardDescription className="text-xl font-bold text-center pt-10">
                        {descriptions?.map((item, index) => (
                            <>
                            <span key={index}>{item}</span><br /><br />
                            </>
                        ))}
                    </CardDescription>
                </CardContent>
            </Card>
        );
    }

    // not use
    card_service_details_xs() {
        const gradient = `linear-gradient(60deg, #7747FF 0%, #03B2E1 20%, #7747FF 110%)`;
        const first = this.props.description && this.props.description[0];
        const second = this.props.description && this.props.description[1];
        return (
            <Card className="group shadow-2xl w-100 md:w-[40rem] h-[20rem] flex flex-col items-center justify-center">
            <CardHeader style={{background: gradient}}
                        className="h-[30%] rounded-t-md flex flex-row items-center justify-center w-full text-center">
                <CardTitle>{this.props.name}</CardTitle>
            </CardHeader>
            <CardContent className="relative h-[70%] w-full bg-white font-bold rounded-md flex flex-col items-center justify-center">
                <CardDescription className="text-md pt-4 text-center overflow-hidden overflow-ellipsis line-clamp-6 transition-all duration-300 ease-in-out group-hover:opacity-0
                    transform group-hover:translate-x-28 
                ">
                    {first?.split('.').map((item, index) => (
                        <>
                        <span key={index}>{item}</span><br />
                        </>
                    ))}
                </CardDescription>
                <CardDescription className="absolute pt-8 w-full h-full flex flex-col items-center justify-center opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100
                transform -translate-x-32 group-hover:translate-x-0
                ">
                    {second?.split('.').map((item, index) => (
                        <>
                        <span key={index} className="text-md text-center ">{item}</span><br />
                        </>
                    ))}
                </CardDescription>
            </CardContent>
            </Card>
        );
    }
    card_formation() {
        return (
            <Card className="relative group w-full h-[6rem] rounded-lg shadow-md overflow-hidden">
                <Windows />
                {/*}
                <CardHeader className="absolute z-20 top-0 left-0 w-full opacity-0 group-hover:opacity-100 transform translate-x-60 group-hover:translate-x-0 transition-all duration-300 ease-in-out">
                    <CardTitle>{this.props.name}</CardTitle>
                </CardHeader>
                */}
                <CardHeader className="absolute z-20 top-0 left-0 w-full h-full text-white ">
                    <CardTitle className="ellipsis">{this.props.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-white absolute z-20 bottom-0 left-100 w-full group-hover:opacity-100 opacity-100 transform group-hover:translate-x-0 transition-all duration-300 ease-in-out">
                    <CardDescription className="text-white ellipsis">{this.props.description}</CardDescription>
                </CardContent>
                <CardFooter className="absolute bottom-0 left-0 w-full h-full">
                    {Array.isArray(this.props.images)
                        && this.props.images.length > 0
                        && <Image src={this.props.images[0]} alt={this.props.name} priority fill sizes="100%" className="object-cover rounded-sm" />
                    }
                </CardFooter>
            </Card>
        );
    }
    card_result() {
        return this.props.href &&
        <Link href={this.props.href}>
            <Card className="relative group w-[18rem] h-[8rem] rounded-lg shadow-md overflow-hidden onClick ">
                <Windows />
                <CardHeader className="text-white absolute z-20 top-0 left-0 ">
                    <CardTitle>{this.props.name}</CardTitle>
                </CardHeader>
                <CardContent className="absolute z-0 top-0 left-0 w-full h-full">
                    {Array.isArray(this.props.images)
                        && this.props.images.length > 0
                        && <Image src={this.props.images[0]} alt={this.props.name} fill priority sizes="90%" className="object-cover rounded-md" />
                    }
                </CardContent>
                <CardFooter className="absolute z-20 bottom-0 left-0 ">
                    <CardDescription className="text-white">{this.props.description}</CardDescription>
                </CardFooter>
            </Card>
        </Link>
    }
}