'use client';
import { Button } from "@/components/ui/button"
import Link from "next/link"


interface CTA_BtnProps {
    classnames?: string;
    href: string | '';
    children: JSX.Element | string;
    event?: string;
}

const CTA_btn = (props : CTA_BtnProps) => {

    
    switch (props.event) {
        case "modal":
            return (
                <div className={props.classnames}>
                    {props.children}
                </div>
            );
        default:
            return (
                <Link href={props.href}>
                    {props.children}
                </Link>
            );
    }
   



}

export default CTA_btn