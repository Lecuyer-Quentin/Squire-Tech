import Image from 'next/image';

export interface IconProps {
    id: string;
    name: string;
    image: string | JSX.Element;
}


export default class IconModel{
    props: IconProps;

    constructor(props: IconProps) {
        this.props = props;
    }

    toHtml() {
        return (
        <>
            <div className="relative flex flex-col items-center justify-center gap-2 w-16 h-16">

            {typeof this.props.image === 'string' ? (
                <Image src={this.props.image} alt={this.props.name} fill className='absolute objet-cover' />
            ) : (
                this.props.image
            )}
            </div>
        </>
        );
    }
}
