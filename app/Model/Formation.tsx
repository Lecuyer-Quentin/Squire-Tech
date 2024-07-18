import CardModel, { CardProps } from "./Card";

export interface FormationProps {
    id: number | string;
    name: string;
    school: string;
    year: string;
    image: string;
}

export default class FormationModel{
    props: FormationProps
    constructor(props: FormationProps){
        this.props = props;
    }
    
    toHtml(){
        return (
            <>
            {
                new CardModel({
                    id: this.props.id,
                    name: this.props.name,
                    description: this.props.school + ' - ' + this.props.year,
                    images: [this.props.image],
                } as CardProps).card_formation()
            }
            </>
        );
    }
}