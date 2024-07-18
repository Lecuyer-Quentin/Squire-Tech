interface QuoteProps {
    id: number | string;
    content: string;
    author: string;
    color?: string;
}
const Quote = ( props : QuoteProps ) => {
    const { id, content, author, color } = props;

    const gradient = `linear-gradient(60deg, #7747FF 0%, #03B2E1 50%, #7747FF 100%)`;
return (
    <article key={id} className="relative my-20 w-fit top-10 flex flex-col items-center justify-center">
        <em style={{ 
            backgroundImage: gradient,
            WebkitTextFillColor: "transparent", 
            WebkitBackgroundClip: "text",
            //textShadow: "1px 1px 1px #000"
        }}
        className="text-[1.5rem] text-center font-bold w-full">{`"${content}"`}</em>
        <em className="text-sm w-full font-bold text-right mr-20">{author}</em>
    </article>
);
}

export default Quote;