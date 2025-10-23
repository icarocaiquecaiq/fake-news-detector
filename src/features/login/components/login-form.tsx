import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    userNameOrEmail: z.union([
        z.string().min(1, "User name not found"),
        z.string().email("Invalid email address"),
    ]),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export function LoginContentTitle() {
    return (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Login
        </h4>
    );
}

export function LoginContentDescription() {
    return (
        <p className="text-sm text-muted-foreground">
            First time here? Create an account to get started!
        </p>
    );
}

export default function LoginForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            userNameOrEmail: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("Login form submitted with values:");
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="userNameOrEmail"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="ex: johndoe" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>password</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full">
                    submit
                </Button>
            </form>
        </Form>
    );
}
