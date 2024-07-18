'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { onSendMail } from "@/app/utils/handlers"

import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
    name: z.string().min(2,{
        message: "Veuillez renseigner votre nom",
    }),
    subject: z.string().min(2,{
        message: "Veuillez renseigner un sujet",
    }),
    email: z.string().email({
        message: "Veuillez renseigner un email valide",
    }),
    message: z.string().min(2,{
        message: "Veuillez renseigner un message",
    }),
})
export type FormValues = z.infer<typeof formSchema>


export const ContactForm = () => {
    const { toast } = useToast();
    const AlertMessage = (state : string) => {
        {state === "success" && toast({
            title: "Message envoyé",
            description: "Votre message a bien été envoyé",
            variant: "success",
        })}
        {state === "error" && toast({
            title: "Erreur lors de l'envoi",
            description: "Une erreur est survenue lors de l'envoi du message",
            variant: "destructive",
        })
    }}

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            subject: "",
            email: "",
            message: "",
        }
    })

    const onSubmit = async (values: FormValues) => {
        const json = JSON.stringify(values);
        console.log(json);
        try{
            await onSendMail(json);
            AlertMessage("success")
            form.reset();
        } catch (error){
            AlertMessage("error")
            alert("Erreur lors de l'envoi du message");
        }
    }
        

    return (
        <>
        <Form {...form} >
            <form className="p-4 bg-slate-300 rounded-xl" onSubmit={form.handleSubmit(onSubmit)}>
            <FormItem className="mt-2">
                <FormLabel>Votre nom</FormLabel>
                <FormControl>
                    <Input type="text" {...form.register("name")} />
                </FormControl>
                <FormMessage>{form.formState.errors.name?.message}</FormMessage>
            </FormItem>
            <FormItem className="mt-4">
                <FormLabel>Sujet</FormLabel>
                <FormControl>
                    <Input type="text" {...form.register("subject")} />
                </FormControl>
                <FormMessage>{form.formState.errors.subject?.message}</FormMessage>
            </FormItem>
            <FormItem className="mt-4">
                <FormLabel>Votre email</FormLabel>
                <FormControl>
                    <Input type="email" {...form.register("email")} />
                </FormControl>
                <FormMessage>{form.formState.errors.email?.message}</FormMessage>
            </FormItem>
            <FormItem className="mt-4">
                <FormLabel>Votre message</FormLabel>
                <FormControl>
                    <Input type="text" {...form.register("message")} />
                </FormControl>
                <FormMessage>{form.formState.errors.message?.message}</FormMessage>
            </FormItem>
            <FormItem className="mt-6 mb-2 flex justify-center">

                <Button type="submit" disabled={form.formState.isSubmitting || form.formState.isSubmitted} className="w-1/2">
                    {form.formState.isSubmitting && <><Loader2 className="w-6 h-6 m-2 animate-spin" />Envoie en cours</>}
                    {form.formState.isSubmitSuccessful && <p>Message envoyé</p>}
                    {!form.formState.isSubmitted && !form.formState.isSubmitting && <p>Envoyer</p>}
                </Button>
            </FormItem>
            </form>
        </Form>
        </>
    )
}
    