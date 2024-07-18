import { useRouter } from 'next/navigation';

import { Button } from "@/components/ui/button";
export interface FormProps {
    name: string;
    placeholder: string;
    action: string;
    method: string;
    button: string;
}
class FormModel {
    props: FormProps;

    constructor(props: FormProps) {
        this.props = props;
    }

    search_form() {

        return (
            <form action={this.props.action} method={this.props.method} className="flex flex-row items-center justify-center gap-4">
                <input type="text" name={this.props.name} placeholder={this.props.placeholder} />
                <Button type="submit">{this.props.button}</Button>
            </form>
        );
    }
}

export default FormModel;