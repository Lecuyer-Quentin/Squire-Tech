import { Permanent_Marker, Black_Ops_One } from "next/font/google";
import DialogModel from "../Model/Dialog";
import Contact from "./contact";

  
const boo_font = Black_Ops_One({weight: '400', style: 'normal', subsets: ['latin']});
const perm_font = Permanent_Marker({weight: '400', style: 'normal', subsets: ['latin']});


interface HeroProps {
    title: string;
    description?: string;
}

const Hero = ( { title, description }: HeroProps ) => {
    return (
        <article className="bg-gradient-to-r from-blue-600 to-blue-400 w-full p-4">
            <div className="relative flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between bg-gradient-to-r from-blue-300 to-blue-500 rounded-sm font-bold p-4">
                <div>
                    <h1 className={`${boo_font.className} text-3xl mb-2 md:mb-0`}>{title}</h1>
                    {description && 
                        <p className={`${boo_font.className}
                        bg-clip-text text-transparent bg-gradient-to-l from-blue-900 to-blue-700
                                 text-lg text-left hidden md:block 
                        `}>
                            {description}
                        </p>
                    }
                </div>
            </div>
        </article>
        
    );
}

export default Hero;