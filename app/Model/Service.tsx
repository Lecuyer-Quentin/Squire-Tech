import CardModel, { CardProps } from "./Card";
import MenuModel from "./Menu";
import Title from "../components/title";
import Quote from "../components/quote";

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
            <section id={content.id.toString()} key={content.id} className="w-full flex flex-col items-center justify-center border-2 border-black">

              <Title title={content.title} size="text-3xl" />
      
              <div className="w-full flex flex-row flex-wrap items-center justify-center border-2 border-green-500">
                {content.paraph?.map((paraph: { id: number, title: string, detail: { id: number, title: string, description: string }[] }) => (
                  <>
                    {this.props.quotes && (<Quote id={this.props.quotes[paraph.id]?.id} content={this.props.quotes[paraph.id]?.content} author={this.props.quotes[paraph.id]?.author} color="#000" />)}

                    <article id={paraph.id.toString()} key={paraph.id} className="flex flex-col items-center justify-center w-full gap-4 border-2 border-red-500">
                        <h3 className="text-2xl font-bold text-left hidden md:flex">{paraph.title}</h3>
                        <div className="md:hidden">
                          {new CardModel({
                            id: paraph.id.toString(),
                            name: paraph.title,
                            description: [
                                paraph.detail[0]?.description,
                                paraph.detail[1]?.description
                            ],
                            images: [],
                            href: '#' + paraph.id,
                          } as CardProps).card_service_details_xs()}
                        </div>

                      
                        <div className="flex flex-col items-center justify-end gap-4 border-2 border-blue-500">
                            {paraph?.detail.map((detail: { id: number, title: string, description: string }) => (
                                <>
                                  {new CardModel({
                                    id : detail.id.toString(),
                                    name: detail.title,
                                    description: [
                                      paraph.detail[0]?.description,
                                      paraph.detail[1]?.description
                                    ]
                                  } as CardProps
                                  ).card_service_details()}
                                </>
                            ))}
                        </div>
                      
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
            <span className="z-20 w-full flex flex-row items-center justify-start">
                {this.renderMenu()}
              </span>
              <Title title={this.props.name} size="text-4xl" image={this.props.images[0]} />
              
              {/* {this.renderIntro()} */}
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