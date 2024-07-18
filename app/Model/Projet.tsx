import Title from "../components/title";
import CardModel, { CardProps } from "./Card";
import IconModel from "./Icon";
import { IconProps } from "./Icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import { HoverCard, HoverCardContent, HoverCardTrigger, } from "@/components/ui/hover-card"

export interface ProjetProps {
    id: number;
    name: string;
    description: string;
    images: string[];
    date: Date;
    task: [
        {
            id: number,
            name: string,
            description: string
        }
    ] | null;
    tech: [
        {
            id: string,
            name: string,
            description: string,
            image: string,
            href: string
        }
    ] | null;
    link?: string | null;
    url?: string | null;
}

export default class Projet {
    props : ProjetProps;

    constructor( props : ProjetProps) {
        this.props = props;
    }

    private renderTech() {
        return this.props.tech?.map((tech) => (
            <>
                {tech 
                    ? <HoverCard key={tech.id}>
                            <HoverCardTrigger>
                                {new IconModel(tech as IconProps).toHtml()}
                            </HoverCardTrigger>
                            <HoverCardContent className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
                                <p>{tech.description}</p>
                            </HoverCardContent>
                    </HoverCard>
                    : "No tech"
                }
            </>
        ));  
    }

    private renderTask() {
        return this.props.task?.map((task) => (
            <>
                {task
                    ? <Accordion type="single" collapsible key={task.id}>
                        <AccordionItem value={task.id.toString()}>
                            <AccordionTrigger>
                                <h3>{task.name}</h3>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p>{task.description}</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    : "No task"
                }
            </>

        ));
    }

    render_home() {
        return (
            new CardModel({
                id: this.props.id,
                name: this.props.name,
                images: this.props.images,
                description: this.props.description,
                href: `/projets/${this.props.id}`,
                tech: this.props.tech,
            } as CardProps
            ).card_home()
        );
    }
    
    render_md() {
        return(
            <>
            {new CardModel({
                id: this.props.id,
                name: this.props.name,
                images: this.props.images,
                description: this.props.description,
                href: `/projets/${this.props.id}`,
                tech: this.props.tech,
                } as CardProps
            ).card_md()}
            </>
        )
    }

    render_lg() {
        return (
            <>
            {new CardModel({
                id: this.props.id,
                name: this.props.name,
                images: this.props.images,
                description: this.props.description,
                href: `/projets/${this.props.id}`,
                tech: this.props.tech,
                } as CardProps
            ).card_lg()}
            </>
        );
    }

    render_details() {
        return (
            <>
            <Title title={this.props.name} size="text-4xl" />
            <article className="h-[400px] mt-4 bg-gradient-to-bl from-blue-200 to-blue-400 rounded-lg flex flex-col items-center justify-center p-4">
                {new CardModel({
                    id: this.props.id.toString(),
                    name: this.props.name,
                    images: this.props.images,
                    description: this.props.description,
                    href: `/projets/${this.props.id}`,
                    } as CardProps
                ).card_xl()}                
            </article>

            <article className="mt-4 bg-blue-200 p-4 rounded-lg flex flex-col items-center justify-center gap-4">
                <h2>Taches réalisées pour ce projet</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {this.renderTask()}
                </div>
            </article>

            <article className="mt-4 bg-blue-200 p-4 rounded-lg flex flex-col items-center justify-center gap-4">
                <h2>Technologies utilisées pour ce projet</h2>
                <div className="flex flex-row items-center justify-center flex-wrap gap-4">
                    {this.renderTech()}
                </div>
            </article>
            </>
        );
    }


}



