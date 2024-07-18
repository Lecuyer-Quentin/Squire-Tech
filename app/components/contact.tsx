
import DialogModel from "../Model/Dialog";
import { DialogProps } from "../Model/Dialog";
import { IconContact } from "./icons/menu/svg";
import Arrow_Left from "./icons/arrow_left";
import { ContactForm } from "./form/contact";

const message = ":)"
const title = "Contact";

const Contact = () => {

    const trigger = (
        <div className="relative btn_contact group w-full p-4 shadow-2xl">
                <div className="relative p-2  w-full flex justify-center items-center">
                    <span className="absolute transition duration-300 ease-in-out group-hover:opacity-0">
                        <IconContact />
                    </span>
                    <span className="absolute flex opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
                        <div className="group-hover:-translate-x-16 transform transition-all duration-300 ease-in-out ">
                            <Arrow_Left />
                        </div>
                        
                        <em className=" absolute left-4 top-0 w-full h-full flex justify-center items-center font-bold">
                            <strong className="text-gradient">{title}</strong>
                        </em>
                    </span>
                </div>  
                {/* 
            <div className="absolute p-2 -top-10 md:top-[.5rem] md:right-[12rem] w-[15rem] h-fit bg-white rounded-md text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                <em> {message} </em>
            </div>
                                    */}

        </div>
    );

    const dialogProps : DialogProps = {
        title: "Contactez-moi",
        footer: "Pour me contacter",
        trigger: trigger,
        content: <ContactForm />
    };

    return (
        <>
            {new DialogModel(dialogProps).render()}
        </>
    );
}

export default Contact;
