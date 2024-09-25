import CardModel, { CardProps } from "./Card";
import MenuModel from "./Menu";
import Title from "../components/title";
import Quote from "../components/quote";
import Wave from "../components/wave";

export interface ServiceProps {
    id: number;
    name: string;
    description: string;
    images: string[];
    quotes: [
        {
            id: number,
            content: string,
            author: string
        }
    ],
    content: [
        {
          id: number,
          title: string,
          paraph:[
            {
              id: number,
              title: string,
              detail:[
                {
                  id: number,
                  title: string,
                  description: string
                }
              ]
            }
          ]
        }
    ]
}

export default class ServiceModel {
  props : ServiceProps;

    constructor(
        props : ServiceProps
    ) {
        this.props = props
    }

    private renderMenu() {
      const menu = new MenuModel([
        {
            trigger: [
                { title: 'Table des matières', href: '#', class: 'text-blue'}
            ],
            content: this.props.content.slice(1).map((content: { id: number, title: string, paraph: { id: number, title: string, detail: { id: number, title: string, description: string }[] }[] }) => (
              {id: content.id.toString(), title: content.title, href: '#' + content.id.toString(), description: ''}
              ))
        }
      ]);
      return menu.toStatic();
    }    

    private renderIntro() {
        return this.props.content[0]?.paraph.map((paraph: { id: number, title: string, detail: { id: number, title: string, description: string }[] }) => (
            <article key={paraph.id} className="w-full flex flex-col items-start justify-center">
                <h3 className="text-2xl font-bold">{paraph.title}</h3>
                {paraph?.detail.map((detail: { id: number, title: string, description: string }) => (
                    <div key={detail.id} className="w-full flex flex-col items-center justify-center">
                        <h4 className="text-xl font-bold">{detail.title}</h4>
                        <p className="text-lg">{detail.description}</p>
                    </div>
                ))}
            </article>
        ));
    }

    private renderParaph() {
       return this.props.content?.slice(1).map((content: { id: number, title: string, paraph: { id: number, title: string, detail: { id: number, title: string, description: string }[] }[] }) => (
            <section id={content.id.toString()} key={content.id} className="w-full flex flex-col items-center justify-center">

              <Title title={content.title} size="text-3xl" />
      
              <div className="w-full flex flex-row flex-wrap items-center justify-center">
                {content.paraph?.map((paraph: { id: number, title: string, detail: { id: number, title: string, description: string }[] }) => (
                  <>
                    {this.props.quotes && (<Quote id={this.props.quotes[content.id]?.id} content={this.props.quotes[paraph.id]?.content} author={this.props.quotes[paraph.id]?.author} color="#000" />)}

                    <article id={paraph.id.toString()} key={paraph.id} className="relative flex flex-col items-center justify-center w-full gap-4">
                        <span className="w-[100%] mb-10 ">
                          <Title title={paraph.title ? `${paraph.title}` : `${content.title}` } size="text-2xl" />
                        </span>
                      
                        <div className="mb-10 lg:mb-20 flex flex-col md:flex-row md:items-start items-center justify-center gap-4 w-full flex-wrap">
                        {paraph?.detail.map((detail: { id: number, title: string, description: string }) => (
                            new CardModel({
                                id: detail.id.toString(),
                                name: detail.title,
                                description: detail.description,
                                images: [],
                                href: '#' + detail.id,
                            } as CardProps).card_service_details()
                        ))}
                        </div>
                        
                        <span className="w-full absolute bottom-0">
                          <Wave />
                        </span>
                    </article>
                   
                  </>
                ))}
              </div>
            </section>
        ));
    }

    renderService_details() {
        return (
            <>
            <span className="z-20 mt-5 w-full flex flex-row items-center justify-start">
                {this.renderMenu()}
              </span>
              <Title title={this.props.name} size="text-4xl" image={this.props.images[0]} />              
              {this.renderParaph()}  
            </>
        );
    }

    renderServiceCard() {
        return (
              <>
                {
                  new CardModel({
                    id: this.props.id.toString(),
                    name: this.props.name,
                    images: this.props.images,
                    description: this.props.description,
                    href: '/services/' + this.props.id,
                    } as CardProps
                  ).card_service()
                }
              </>
        );
    }
} 