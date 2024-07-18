import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogFooter, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import ImgBrand from "/public/images/logo_2.png";
import Image from "next/image";

export interface DialogProps {
    title: string;
    footer: string;
    trigger: React.ReactNode | JSX.Element;
    content: JSX.Element | React.ReactNode;
}

class DialogModel {
    props: DialogProps;

    constructor(props: DialogProps) {
        this.props = props;
    }
    
    render() {
        return (
            <Dialog>
                <DialogTrigger>
                    {this.props.trigger}
                </DialogTrigger>
                <DialogContent className="w-[90%] bg-white rounded-md border-none">
                    <DialogHeader className="flex flex-col items-center justify-end ">
                        <Image src={ImgBrand} alt="logo" width={150} height={150} priority className="shadow-3xl z-20" />
                    </DialogHeader>
                    <DialogDescription>
                        {this.props.content}
                    </DialogDescription>

                    <DialogFooter>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        );
    }
}

export default DialogModel;