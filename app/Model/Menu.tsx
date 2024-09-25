import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import CardModel, { CardProps } from "../Model/Card";
import FormModel, { FormProps } from "../Model/Form";

export interface MenuProps {
        trigger: { title: string; href: string; class?:string }[];
        content: { id: string, title: string; href: string; description: string; icon?: JSX.Element, class?: string}[];
}[];

class MenuModel {
    props: MenuProps[];

    constructor(props: MenuProps[]) {
        this.props = props;
    }

    toStatic() {
            return (
                <NavigationMenu>
                    <NavigationMenuList >
                        {this.props.map((menu, index) => (

                    <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger>
                        {menu.trigger.map((trigger, index) => (
                            <NavigationMenuLink key={index} href={trigger.href} className={`${trigger.class}`} >
                                {trigger.title}
                            </NavigationMenuLink>
                        ))}
                    </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="flex flex-row items-center justify-center flex-wrap z-50 gap-4 p-2 ">
                                {menu.content.map((content) => (
                                        <NavigationMenuLink key={content.id} href={content.href}>
                                        {new CardModel({
                                            id: content.id,
                                            name: content.title, 
                                            description: content.description, 
                                            href: content.href,
                                            icon: content.icon ? content.icon : null,
                                        } as CardProps
                                        ).card_menu()}
                                    </NavigationMenuLink>
                                ))}

{
                            menu.trigger[0].title === "Projets" ?
                            <>
                                {
                                    new FormModel({
                                        name: "search",
                                        placeholder: "Rechercher un projet",
                                        action: "/projets",
                                        method: "GET",
                                        button: "Rechercher",
                                    } as FormProps
                                    ).search_form()
                                }
                            </>
                            : null

                        }
                                
                            </ul>
                        </NavigationMenuContent>

                    </NavigationMenuItem>
                    ))}
                    </NavigationMenuList>
                </NavigationMenu>
            );
        };
    }

export default MenuModel;