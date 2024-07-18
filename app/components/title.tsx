import Separator from "./separator"
import Image from "next/image";
import { WindowsGradient } from './windows';

interface TitleProps {
    title: string;
    size?: string;
    image?: string;
}

const Title = ({ title, size, image }: TitleProps) => {
    const [firstPart, secondPart] = title.split(",");
    return (
        <article className={`relative z-10 w-full ${image && 'h-[200px]'} flex flex-col items-center justify-center mb-4 md:flex-row md:items-center md:justify-between`}>
            <Separator />
            <h2 className={`${size ? size : "text-2xl"} z-20 ${image && 'text-white'} text-center font-bold w-full  md:w-[100rem]`}>
                {firstPart}
                <br />
                <span className="z-10 text-gradient">
                    {secondPart}
                </span>
            </h2>
            <Separator />
            {image && <><Image src={image} alt={title} fill className="object-cover absolute top-10 mb-10 left-0" />
            <WindowsGradient /></>}
        </article>
    )
}

export default Title;