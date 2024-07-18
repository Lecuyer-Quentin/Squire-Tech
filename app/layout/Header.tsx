import Link from "next/link";
import { IconHome, IconAbout, IconContact, IconWeb, IconDesign, IconCyberSecurity, IconAllProjects } from "../components/icons/menu/svg";
import MenuModel from "../Model/Menu";
import { MenuProps } from "../Model/Menu";
import Image from "next/image";
import Logo4 from "/public/images/logo_4.png";
import Logo6 from "/public/images/logo_6.png";
import SearchForm from "../components/form/search";

const components: MenuProps[] = [
    {
        trigger: [
            {
                title: "Accueil",
                href: "/",
            }
        ],
        content: [
            {
                id: "0",
                title: "Accueil",
                href: "/",
                description: "Retour à la page d'accueil",
                icon: <IconHome />
            },
            {
                id: "1",
                title: "À Propos",
                href: "/about",
                description: "En savoir plus sur moi",
                icon: <IconAbout />
            },
            {
                id: "2",
                title: "Contact",
                href: "/contact",
                description: "Me contacter",
                icon: <IconContact />
            }
        ],
    },
    {
        trigger: [
            {
                title: "Services",
                href: "/services",
            }
        ],
        content: [
            {
                id:"0",
                title: "Web Development",
                href: "/services/0",
                description: "Création de site web",
                icon: <IconWeb />
            },
            {
                id:"1",
                title: "Design",
                href: "/services/1",
                description: "Design d'interface utilisateur",
                icon: <IconDesign />
            },
            {
                id:"2",
                title: "Cybersecurity",
                href: "/services/2",
                description: "Sécurité informatique",
                icon: <IconCyberSecurity />
                
            }
        ],
    },
    {
        trigger: [
            {
                title: "Projets",
                href: "/projets",
            }
        ],
        content: [
            {
                id:"00",
                title: "Voir tous les projets",
                href: "/projets",
                description: "Voir tous les projets",
                icon: <IconAllProjects />
            },
            //{
            //    id:"0",
            //    title: "Projet 1",
            //    href: "/projets/0",
            //    description: "Description du projet 1",
            //},
            //{
            //    id:"1",
            //    title: "Projet 2",
            //    href: "/projets/1",
            //    description: "Description du projet 2",
            //},
            //{
            //    id:"2",
            //    title: "Projet 3",
            //    href: "/projets/2",
            //    description: "Description du projet 3",
            //},
        ],
    },
];

export default function Header() {
    return (
        <header className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center p-4 sticky top-0 bg-white shadow-xl z-50">

            <Link href="/" className={`md:hidden`}>
                <Image src={Logo4} alt="logo" width={40} height={40} priority/>
            </Link>

            {new MenuModel(components).toStatic()}

            <SearchForm />
            <Link href="/" className={`hidden md:block mr-6`}>
                <Image src={Logo4} alt="logo" width={40} height={40} priority className="hidden md:block lg:hidden"/>
                <Image src={Logo6} alt="logo" width={200} height={200} priority className="hidden lg:block"/>
            </Link>

        </header>
    );
}