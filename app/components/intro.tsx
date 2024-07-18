import IconModel, { IconProps } from "../Model/Icon"
import { IconJavascript, IconReact, IconNext, IconNode, IconPHP, IconPHPmyAdmin, IconMySQL, IconMongoDB, IconTailwindCSS, IconSass, IconBootstrap, IconFigma } from "./icons/tech/svg"
import { fetchFormations } from "../utils/fetch"
import FormationModel, { FormationProps } from "../Model/Formation"
import Contact from "./contact"
import Link from "next/link"
import Title from "./title"
import { IconLinkedIn, IconGithub } from "./icons/social/svg"

const tech = [
    {id:'0', name: "JavaScript", image: <IconJavascript />},
    {id:'1', name: "React", image: <IconReact />},
    {id:'2', name: "Next.js", image: <IconNext />},
    {id:'3', name: "Node.js", image: <IconNode />},
    {id:'4', name: "PHP", image: <IconPHP />},
    {id:'5', name: "PHPmyAdmin", image: <IconPHPmyAdmin />},
    {id:'6', name: "MySQL", image: <IconMySQL />},
    {id:'7', name: "MongoDB", image: <IconMongoDB />},
    {id:'8', name: "TailwindCSS", image: <IconTailwindCSS />},
    {id:'9', name: "SASS", image: <IconSass />},
    {id:'10', name: "Bootstrap", image: <IconBootstrap />},
    {id:'11', name: "Figma", image: <IconFigma />},
] as IconProps[]

const social = [
    {id:'0', name: "LinkedIn", href: "https://www.linkedin.com/in/quentin-lecuyer-607a2114b/", image: <IconLinkedIn />},
    {id:'1', name: "GitHub", href: "https://github.com/Lecuyer-Quentin", image: <IconGithub />}
]


const renderVideo = () => {
    return (
        <article className="relative flex flex-col items-center justify-center w-full">
            {/*    <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
                    <source src="/videos/user-connect.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            */}
                <span className="z-10 p-2 rounded-md shadow-2xl">
                    <em className="font-bold">Gardons le contact</em>
                </span>

                <span className="z-10 w-full relative flex justify-around items-center gap-4 p-4">
                    {social.map((s) => (
                        <Link key={s.id} href={s.href} target="_blank" referrerPolicy="no-referrer">
                            {new IconModel(s).toHtml()}
                        </Link>
                    ))}
                </span>
                <span className="z-10 absolute top-10 right-50 transform -translate-x-50 translate-y-5">
                    <Contact />
                </span>
            </article>
    )
}
const renderTech = () => {
    return (
        <article className="carousel-wrapper bg-slate-100 shadow-md shadow-neutral-400 border-none">
            <ul className="flex flex-row items-center justify-center gap-4 w-full car_tech">
                {tech.map((t) => (
                    <>
                    <li key={t.id} className="car_tech-item">
                        {new IconModel(t).toHtml()}
                    </li>
                    </>
                ))}
                {tech.map((t) => (
                    <li key={`${t.id}-duplicate`} className="car_tech-item">
                        {new IconModel(t).toHtml()}
                    </li>
                ))}
            </ul>
        </article>
    );
}
const renderFormations = async () => {
    const formations = await fetchFormations() as FormationModel[];
    return (
        <article className="w-full h-full flex justify-center items-center">
            <ul className="flex items-center justify-center flex-wrap w-full gap-4">
                {formations.map((formation) => (
                    <li key={formation.props.id} className="w-[90%] md:w-[30%] bg-gradient-to-br from-blue-500 to-blue-300 rounded-xl shadow-2xl p-1">
                        {formation.toHtml()}
                    </li>
                ))}
            </ul>
        </article>
    );
}


const Intro = () => {
    return (
        <>
            <Title title="Petit coup d'oeil, sur mon parcours" />
            {renderFormations()}  
            {renderTech()}
            {renderVideo()}
      </>
    )
}

export default Intro